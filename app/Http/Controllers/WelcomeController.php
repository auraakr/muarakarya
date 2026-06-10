<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class WelcomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('welcome', [
            'faqs'     => Faq::active()->ordered()->get(['id', 'question', 'answer']),
            'services' => Service::active()->ordered()->get(['id', 'title', 'description', 'items', 'color']),
        ]);
    }
}
