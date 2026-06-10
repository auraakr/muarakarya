<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/services/index', [
            'services' => Service::ordered()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/services/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'       => 'required|string|max:200',
            'description' => 'required|string|max:500',
            'items'       => 'required|array|min:1|max:10',
            'items.*'     => 'required|string|max:200',
            'color'       => 'required|in:blue,cyan,green',
            'sort_order'  => 'nullable|integer|min:0',
            'is_active'   => 'boolean',
        ]);

        Service::create([
            ...$data,
            'sort_order' => $data['sort_order'] ?? 0,
            'is_active'  => $data['is_active'] ?? true,
        ]);

        return to_route('admin.services.index')->with('success', 'Layanan berhasil ditambahkan.');
    }

    public function edit(Service $service): Response
    {
        return Inertia::render('admin/services/edit', [
            'service' => $service,
        ]);
    }

    public function update(Request $request, Service $service): RedirectResponse
    {
        $data = $request->validate([
            'title'       => 'required|string|max:200',
            'description' => 'required|string|max:500',
            'items'       => 'required|array|min:1|max:10',
            'items.*'     => 'required|string|max:200',
            'color'       => 'required|in:blue,cyan,green',
            'sort_order'  => 'nullable|integer|min:0',
            'is_active'   => 'boolean',
        ]);

        $service->update([
            ...$data,
            'sort_order' => $data['sort_order'] ?? 0,
        ]);

        return to_route('admin.services.index')->with('success', 'Layanan berhasil diperbarui.');
    }

    public function destroy(Service $service): RedirectResponse
    {
        $service->delete();

        return to_route('admin.services.index')->with('success', 'Layanan berhasil dihapus.');
    }
}
