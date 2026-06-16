import { Head, Link, router, usePage } from '@inertiajs/react';

interface Faq {
    id: number;
    question: string;
    answer: string;
    sort_order: number;
    is_active: boolean;
}

export default function FaqIndex({ faqs }: { faqs: Faq[] }) {
    const { flash } = usePage<any>().props;

    function handleDelete(id: number) {
        if (!confirm('Hapus FAQ ini?')) return;
        router.delete(`/admin/faqs/${id}`);
    }

    return (
        <>
            <Head title="Kelola FAQ" />
            <div className="p-6 space-y-6">

                {flash?.success && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                        {flash.success}
                    </div>
                )}

                {/* Page header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Kelola FAQ</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">{faqs.length} pertanyaan terdaftar</p>
                    </div>
                    <Link
                        href="/admin/faqs/create"
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex-shrink-0"
                        style={{ backgroundColor: '#135b97' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah FAQ
                    </Link>
                </div>

                {/* Table card */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    {faqs.length === 0 ? (
                        <div className="py-20 text-center text-muted-foreground">
                            <svg className="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm font-medium">Belum ada FAQ</p>
                            <p className="text-xs mt-1">
                                <Link href="/admin/faqs/create" className="text-[#135b97] hover:underline">Tambahkan FAQ pertama</Link>
                            </p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted/60 border-b border-border">
                                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-12">#</th>
                                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Pertanyaan</th>
                                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Jawaban</th>
                                    <th className="text-center px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-28">Status</th>
                                    <th className="px-6 py-3.5 w-24"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {faqs.map((faq, i) => (
                                    <tr key={faq.id} className="hover:bg-muted/40 transition-colors group">
                                        <td className="px-6 py-4">
                                            <span className="text-xs font-medium text-muted-foreground">{i + 1}</span>
                                        </td>
                                        <td className="px-4 py-4 max-w-xs">
                                            <p className="font-medium text-foreground line-clamp-2 leading-snug">{faq.question}</p>
                                        </td>
                                        <td className="px-4 py-4 hidden lg:table-cell max-w-sm">
                                            <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">{faq.answer}</p>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                faq.is_active
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-muted text-muted-foreground'
                                            }`}>
                                                {faq.is_active ? 'Aktif' : 'Nonaktif'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link
                                                    href={`/admin/faqs/${faq.id}/edit`}
                                                    className="p-2 rounded-lg text-muted-foreground hover:text-[#135b97] hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                                    title="Edit"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(faq.id)}
                                                    className="p-2 rounded-lg text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                    title="Hapus"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </>
    );
}

FaqIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'FAQ', href: '/admin/faqs' },
    ],
};
