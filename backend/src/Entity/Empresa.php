<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Repository\EmpresaRepository;

/**
 * @ORM\Entity(repositoryClass=EmpresaRepository::class)
 * @ORM\Table(name="empresa")
 */
class Empresa
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nome;

    /**
     * @ORM\Column(type="string", length=14, unique=true)
     */
    private $cnpj;

    /**
     * @ORM\OneToMany(targetEntity=Socio::class, mappedBy="empresa", cascade={"persist", "remove"})
     */
    private $socios;

    public function __construct()
    {
        $this->socios = new ArrayCollection();
    }

    // Getters e Setters

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNome(): ?string
    {
        return $this->nome;
    }

    public function setNome(string $nome): self
    {
        $this->nome = $nome;
        return $this;
    }

    public function getCnpj(): ?string
    {
        return $this->cnpj;
    }

    public function setCnpj(string $cnpj): self
    {
        $this->cnpj = $cnpj;
        return $this;
    }

    public function getSocios(): Collection
    {
        return $this->socios;
    }
}
