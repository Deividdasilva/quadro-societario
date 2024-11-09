<?php
// src/Controller/EmpresaController.php

namespace App\Controller;

use App\Entity\Empresa;
use App\Repository\EmpresaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EmpresaController extends AbstractController
{
    /**
     * @Route("/empresas", name="empresa_index", methods={"GET"})
     */
    public function index(EmpresaRepository $empresaRepository): JsonResponse
    {
        $empresas = $empresaRepository->findAll();
        $data = [];

        foreach ($empresas as $empresa) {
            $data[] = [
                'id' => $empresa->getId(),
                'nome' => $empresa->getNome(),
                'cnpj' => $empresa->getCnpj(),
            ];
        }

        return $this->json($data);
    }

    /**
     * @Route("/empresas/new", name="empresa_new", methods={"POST"})
     */
    public function create(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $empresa = new Empresa();
        $empresa->setNome($data['nome'] ?? '');
        $empresa->setCnpj($data['cnpj'] ?? '');

        $em->persist($empresa);
        $em->flush();

        return $this->json([
            'id' => $empresa->getId(),
            'nome' => $empresa->getNome(),
            'cnpj' => $empresa->getCnpj(),
        ], Response::HTTP_CREATED);
    }

    /**
     * @Route("/empresas/{id}", name="empresa_show", methods={"GET"})
     */
    public function show(int $id, EmpresaRepository $empresaRepository): JsonResponse
    {
        $empresa = $empresaRepository->find($id);

       

        if (!$empresa) {
            return $this->json(['error' => 'Empresa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        return $this->json([
            'id' => $empresa->getId(),
            'nome' => $empresa->getNome(),
            'cnpj' => $empresa->getCnpj(),
        ]);
    }

    /**
     * @Route("/empresas/{id}", name="empresa_edit", methods={"PUT"})
     */
    public function update(int $id, Request $request, EmpresaRepository $empresaRepository, EntityManagerInterface $em): JsonResponse
    {
        $empresa = $empresaRepository->find($id);

        if (!$empresa) {
            return $this->json(['error' => 'Empresa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        $empresa->setNome($data['nome'] ?? $empresa->getNome());
        $empresa->setCnpj($data['cnpj'] ?? $empresa->getCnpj());

        $em->persist($empresa);
        $em->flush();

        return $this->json([
            'id' => $empresa->getId(),
            'nome' => $empresa->getNome(),
            'cnpj' => $empresa->getCnpj(),
        ]);
    }

    /**
     * @Route("/empresas/{id}", name="empresa_delete", methods={"DELETE"})
     */
    public function delete(int $id, EmpresaRepository $empresaRepository, EntityManagerInterface $em): JsonResponse
    {
        $empresa = $empresaRepository->find($id);

        if (!$empresa) {
            return $this->json(['error' => 'Empresa não encontrada'], Response::HTTP_NOT_FOUND);
        }

        $em->remove($empresa);
        $em->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}
