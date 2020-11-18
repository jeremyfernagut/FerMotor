<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ServicesRepository;
use Symfony\Component\Serializer\Annotation\Groups;


class ServicesController extends AbstractController
{
    /**
     * @Route("/services", name="services")
     */
    public function index(): Response
    {
        return $this->render('services/index.html.twig', [
            'controller_name' => 'ServicesController',
        ]);
    }

    /**
     * @Route("/services/list, name="services_list")
     */
    public function details(ServicesRepository $servicesRepository) : Response
    {
        $services = $servicesRepository->findAll();

        return $this->render($services, 200, [], [
            'groups' => "services_details" 
        ]);
    }
}
