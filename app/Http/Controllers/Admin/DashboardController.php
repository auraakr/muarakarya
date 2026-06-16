<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('dashboard', [
            'stats' => [
                'total_services'  => Service::count(),
                'active_services' => Service::active()->count(),
                'total_faqs'      => Faq::count(),
                'active_faqs'     => Faq::active()->count(),
            ],
            'recent_faqs'     => Faq::latest()->limit(5)->get(['id', 'question', 'is_active', 'sort_order']),
            'recent_services' => Service::latest()->limit(5)->get(['id', 'title', 'color', 'is_active']),
        ]);
    }
}
