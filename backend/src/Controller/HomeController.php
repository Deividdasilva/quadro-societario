<?php

// src/Controller/HomeController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    // public function index(): Response
    // {
    //     return new Response('<html><body><h1>Bem-vindo ao Quadro Societário</h1></body></html>');
    // }
}
