<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Inertia\Inertia;
use Inertia\Response;

class CareersController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('careers', [
            'jobs' => Career::active()->ordered()->get(),
        ]);
    }
}
