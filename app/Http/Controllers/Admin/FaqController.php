<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FaqController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/faqs/index', [
            'faqs' => Faq::ordered()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('admin/faqs/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'question'   => 'required|string|max:500',
            'answer'     => 'required|string|max:2000',
            'sort_order' => 'nullable|integer|min:0',
            'is_active'  => 'boolean',
        ]);

        Faq::create([
            ...$data,
            'sort_order' => $data['sort_order'] ?? 0,
            'is_active'  => $data['is_active'] ?? true,
        ]);

        return to_route('admin.faqs.index')->with('success', 'FAQ berhasil ditambahkan.');
    }

    public function edit(Faq $faq): Response
    {
        return Inertia::render('admin/faqs/edit', [
            'faq' => $faq,
        ]);
    }

    public function update(Request $request, Faq $faq): RedirectResponse
    {
        $data = $request->validate([
            'question'   => 'required|string|max:500',
            'answer'     => 'required|string|max:2000',
            'sort_order' => 'nullable|integer|min:0',
            'is_active'  => 'boolean',
        ]);

        $faq->update([
            ...$data,
            'sort_order' => $data['sort_order'] ?? 0,
        ]);

        return to_route('admin.faqs.index')->with('success', 'FAQ berhasil diperbarui.');
    }

    public function destroy(Faq $faq): RedirectResponse
    {
        $faq->delete();

        return to_route('admin.faqs.index')->with('success', 'FAQ berhasil dihapus.');
    }
}
