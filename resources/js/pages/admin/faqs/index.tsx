import { Head, Link, router, usePage } from '@inertiajs/react';

interface Faq {
    id: number;
    question: string;
    answer: string;
    sort_order: number;
    is_active: boolean;
}

interface Props {
    faqs: Faq[];
}

export default function FaqIndex({ faqs }: Props) {
    const { flash } = usePage<any>().props;

    function handleDelete(id: number) {
        if (!confirm('Hapus FAQ ini?')) return;
        router.delete(`/admin/faqs/${id}`);
    }

    return (
        <>
            <Head title="Kelola FAQ" />
            <div className="space-y-6">
                {flash?.success && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                        {flash.success}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Kelola FAQ</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">{faqs.length} pertanyaan terdaftar</p>
                    </div>
                    <Link
                        href="/admin/faqs/create"
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah FAQ
                    </Link>
                </div>

                <div className="rounded-xl border border-border overflow-hidden bg-card">
                    {faqs.length === 0 ? (
                        <div className="py-16 text-center text-muted-foreground">
                            <svg className="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">Belum ada FAQ. Tambahkan yang pertama.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted border-b border-border">
                                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground w-8">#</th>
                                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Pertanyaan</th>
                                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground hidden md:table-cell">Jawaban</th>
                                    <th className="text-center px-5 py-3 font-semibold text-muted-foreground w-24">Status</th>
                                    <th className="px-5 py-3 w-28"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {faqs.map((faq, i) => (
                                    <tr key={faq.id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-5 py-4 text-muted-foreground">{i + 1}</td>
                                        <td className="px-5 py-4">
                                            <p className="font-medium text-foreground line-clamp-2">{faq.question}</p>
                                        </td>
                                        <td className="px-5 py-4 hidden md:table-cell">
                                            <p className="text-muted-foreground line-clamp-2">{faq.answer}</p>
                                        </td>
                                        <td className="px-5 py-4 text-center">
                                            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                faq.is_active
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-muted text-muted-foreground'
                                            }`}>
                                                {faq.is_active ? 'Aktif' : 'Nonaktif'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/faqs/${faq.id}/edit`}
                                                    className="p-1.5 rounded-lg text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                                    title="Edit"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(faq.id)}
                                                    className="p-1.5 rounded-lg text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
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
