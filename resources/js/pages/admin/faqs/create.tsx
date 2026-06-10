import { Head, Link, useForm } from '@inertiajs/react';

export default function FaqCreate() {
    const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
        sort_order: 0,
        is_active: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post('/admin/faqs');
    }

    return (
        <>
            <Head title="Tambah FAQ" />
            <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-3">
                    <Link href="/admin/faqs" className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Tambah FAQ</h1>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Pertanyaan <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={data.question}
                            onChange={e => setData('question', e.target.value)}
                            rows={3}
                            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Tulis pertanyaan..."
                        />
                        {errors.question && <p className="mt-1 text-xs text-red-600">{errors.question}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Jawaban <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={data.answer}
                            onChange={e => setData('answer', e.target.value)}
                            rows={5}
                            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Tulis jawaban..."
                        />
                        {errors.answer && <p className="mt-1 text-xs text-red-600">{errors.answer}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Urutan</label>
                            <input
                                type="number"
                                min={0}
                                value={data.sort_order}
                                onChange={e => setData('sort_order', Number(e.target.value))}
                                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <p className="mt-1 text-xs text-gray-400">Angka lebih kecil tampil lebih awal.</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <label className="flex items-center gap-2.5 cursor-pointer mt-4">
                                <input
                                    type="checkbox"
                                    checked={data.is_active}
                                    onChange={e => setData('is_active', e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm font-medium text-gray-700">Tampilkan di website</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                        >
                            {processing ? 'Menyimpan...' : 'Simpan FAQ'}
                        </button>
                        <Link href="/admin/faqs" className="text-sm text-gray-500 hover:text-gray-700">
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

FaqCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'FAQ', href: '/admin/faqs' },
        { title: 'Tambah', href: '/admin/faqs/create' },
    ],
};
