<?php
// src/Controller/SocioController.php

namespace App\Controller;

use App\Entity\Socio;
use App\Repository\SocioRepository;
use App\Repository\EmpresaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/socios")
 */
class SocioController extends AbstractController
{
    /**
     * @Route("/socios", name="socio_index", methods={"GET"})
     */
    public function index(SocioRepository $socioRepository): JsonResponse
    {
        $socios = $socioRepository->findAll();
        $data = [];

        foreach ($socios as $socio) {
            $data[] = [
                'id' => $socio->getId(),
                'nome' => $socio->getNome(),
                'cpf' => $socio->getCpf(),
                'empresa_id' => $socio->getEmpresa() ? $socio->getEmpresa()->getId() : null,
                'empresa' => $socio->getEmpresa() ? $socio->getEmpresa()->getNome() : null,
            ];
        }

        return $this->json($data);
    }

    /**
     * @Route("/socios/new", name="socio_new", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $em, EmpresaRepository $empresaRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $empresa = $empresaRepository->find($data['empresa_id']);
        if (!$empresa) {
            return $this->json(['error' => 'Empresa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        $socio = new Socio();
        $socio->setNome($data['nome']);
        $socio->setCpf($data['cpf']);
        $socio->setEmpresa($empresa);

        $em->persist($socio);
        $em->flush();

        return $this->json([
            'id' => $socio->getId(),
            'nome' => $socio->getNome(),
            'cpf' => $socio->getCpf(),
            'empresa' => $socio->getEmpresa()->getId(),
        ], Response::HTTP_CREATED);
    }

    /**
     * @Route("socios/{id}", name="socio_show", methods={"GET"})
     */
    public function show(int $id, SocioRepository $socioRepository): JsonResponse
    {
        $socio = $socioRepository->find($id);

        if (!$socio) {
            return $this->json(['error' => 'Sócio não encontrado'], Response::HTTP_NOT_FOUND);
        }

        return $this->json([
            'id' => $socio->getId(),
            'nome' => $socio->getNome(),
            'cpf' => $socio->getCpf(),
            'empresa_id' => $socio->getEmpresa() ? $socio->getEmpresa()->getId() : null,
        ]);
    }

    /**
     * @Route("socios/{id}/edit", name="socio_edit", methods={"PUT"})
     */
    public function update(int $id, Request $request, SocioRepository $socioRepository, EmpresaRepository $empresaRepository, EntityManagerInterface $em): JsonResponse
    {
        $socio = $socioRepository->find($id);

        if (!$socio) {
            return $this->json(['error' => 'Sócio não encontrado'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        $socio->setNome($data['nome'] ?? $socio->getNome());
        $socio->setCpf($data['cpf'] ?? $socio->getCpf());

        // Atualiza a empresa, caso o ID seja fornecido
        if (isset($data['empresa_id'])) {
            $empresa = $empresaRepository->find($data['empresa_id']);
            if ($empresa) {
                $socio->setEmpresa($empresa);
            }
        }

        $em->persist($socio);
        $em->flush();

        return $this->json([
            'id' => $socio->getId(),
            'nome' => $socio->getNome(),
            'cpf' => $socio->getCpf(),
            'empresa_id' => $socio->getEmpresa() ? $socio->getEmpresa()->getId() : null,
        ]);
    }

    /**
     * @Route("socios/{id}", name="socio_delete", methods={"DELETE"})
     */
    public function delete(int $id, SocioRepository $socioRepository, EntityManagerInterface $em): JsonResponse
    {
        $socio = $socioRepository->find($id);

        if (!$socio) {
            return $this->json(['error' => 'Sócio não encontrado'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($socio);
        $em->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }

}
