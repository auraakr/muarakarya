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
            <div className="p-6">
                <div className="max-w-2xl space-y-6">

                    {/* Page header */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/admin/faqs"
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Edit FAQ</h1>
                            <p className="text-sm text-muted-foreground">Perbarui pertanyaan dan jawaban.</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border divide-y divide-border">
                        <div className="p-6 space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Pertanyaan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.question}
                                    onChange={e => setData('question', e.target.value)}
                                    rows={3}
                                    className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#135b97]/40 focus:border-[#135b97] resize-none transition-colors"
                                />
                                {errors.question && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.question}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Jawaban <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.answer}
                                    onChange={e => setData('answer', e.target.value)}
                                    rows={5}
                                    className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#135b97]/40 focus:border-[#135b97] resize-none transition-colors"
                                />
                                {errors.answer && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.answer}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Urutan Tampil</label>
                                    <input
                                        type="number"
                                        min={0}
                                        value={data.sort_order}
                                        onChange={e => setData('sort_order', Number(e.target.value))}
                                        className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#135b97]/40 focus:border-[#135b97] transition-colors"
                                    />
                                    <p className="mt-1.5 text-xs text-muted-foreground">Angka lebih kecil tampil lebih dulu.</p>
                                </div>
                                <div className="flex flex-col justify-end pb-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={data.is_active}
                                            onChange={e => setData('is_active', e.target.checked)}
                                            className="w-4 h-4 rounded border-input accent-[#135b97]"
                                        />
                                        <span className="text-sm font-medium text-foreground">Tampilkan di website</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Footer actions */}
                        <div className="px-6 py-4 flex items-center gap-3 bg-muted/30">
                            <button
                                type="submit"
                                disabled={processing}
                                className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60"
                                style={{ backgroundColor: '#135b97' }}
                            >
                                {processing ? 'Menyimpan...' : 'Perbarui FAQ'}
                            </button>
                            <Link
                                href="/admin/faqs"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Batal
                            </Link>
                        </div>
                    </form>

                </div>
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
