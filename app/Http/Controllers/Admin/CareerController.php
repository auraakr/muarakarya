<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CareerController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/careers/index', [
            'careers' => Career::ordered()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/careers/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'title'            => 'required|string|max:255',
            'department'       => 'required|in:Engineering,Sales,Admin',
            'type'             => 'required|in:Full-time,Contract',
            'location'         => 'required|string|max:255',
            'deadline'         => 'required|string|max:100',
            'summary'          => 'required|string',
            'responsibilities' => 'required|array|min:1',
            'responsibilities.*' => 'required|string',
            'requirements'     => 'required|array|min:1',
            'requirements.*'   => 'required|string',
            'benefits'         => 'required|array|min:1',
            'benefits.*'       => 'required|string',
            'sort_order'       => 'integer|min:0',
            'is_active'        => 'boolean',
        ]);

        Career::create($data);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Lowongan berhasil ditambahkan.');
    }

    public function edit(Career $career): Response
    {
        return Inertia::render('admin/careers/edit', [
            'career' => $career,
        ]);
    }

    public function update(Request $request, Career $career): RedirectResponse
    {
        $data = $request->validate([
            'title'            => 'required|string|max:255',
            'department'       => 'required|in:Engineering,Sales,Admin',
            'type'             => 'required|in:Full-time,Contract',
            'location'         => 'required|string|max:255',
            'deadline'         => 'required|string|max:100',
            'summary'          => 'required|string',
            'responsibilities' => 'required|array|min:1',
            'responsibilities.*' => 'required|string',
            'requirements'     => 'required|array|min:1',
            'requirements.*'   => 'required|string',
            'benefits'         => 'required|array|min:1',
            'benefits.*'       => 'required|string',
            'sort_order'       => 'integer|min:0',
            'is_active'        => 'boolean',
        ]);

        $career->update($data);

        return redirect()->route('admin.careers.index')
            ->with('success', 'Lowongan berhasil diperbarui.');
    }

    public function destroy(Career $career): RedirectResponse
    {
        $career->delete();

        return redirect()->route('admin.careers.index')
            ->with('success', 'Lowongan berhasil dihapus.');
    }
}
