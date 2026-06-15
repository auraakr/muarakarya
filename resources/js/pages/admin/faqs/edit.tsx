import { Head, Link, useForm } from '@inertiajs/react';

interface Faq {
    id: number;
    question: string;
    answer: string;
    sort_order: number;
    is_active: boolean;
}

export default function FaqEdit({ faq }: { faq: Faq }) {
    const { data, setData, put, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
        sort_order: faq.sort_order,
        is_active: faq.is_active,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(`/admin/faqs/${faq.id}`);
    }

    return (
        <>
            <Head title="Edit FAQ" />
            <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-3">
                    <Link href="/admin/faqs" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-foreground">Edit FAQ</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Pertanyaan <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={data.question}
                            onChange={e => setData('question', e.target.value)}
                            rows={3}
                            className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                        {errors.question && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.question}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                            Jawaban <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={data.answer}
                            onChange={e => setData('answer', e.target.value)}
                            rows={5}
                            className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        />
                        {errors.answer && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.answer}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">Urutan</label>
                            <input
                                type="number"
                                min={0}
                                value={data.sort_order}
                                onChange={e => setData('sort_order', Number(e.target.value))}
                                className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="mt-1 text-xs text-muted-foreground">Angka lebih kecil tampil lebih awal.</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <label className="flex items-center gap-2.5 cursor-pointer mt-4">
                                <input
                                    type="checkbox"
                                    checked={data.is_active}
                                    onChange={e => setData('is_active', e.target.checked)}
                                    className="w-4 h-4 rounded border-input text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-foreground">Tampilkan di website</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                        >
                            {processing ? 'Menyimpan...' : 'Perbarui FAQ'}
                        </button>
                        <Link href="/admin/faqs" className="text-sm text-muted-foreground hover:text-foreground">
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

FaqEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'FAQ', href: '/admin/faqs' },
        { title: 'Edit', href: '#' },
    ],
};
