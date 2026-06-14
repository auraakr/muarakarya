import { Link } from '@inertiajs/react';

const colorOptions = [
    { value: 'blue', label: 'Biru', dot: 'bg-blue-500' },
    { value: 'cyan', label: 'Cyan', dot: 'bg-cyan-500' },
    { value: 'green', label: 'Hijau', dot: 'bg-green-500' },
];

interface FormState {
    data: {
        title: string;
        description: string;
        items: string[];
        color: string;
        sort_order: number;
        is_active: boolean;
    };
    setData: (key: string, value: any) => void;
    processing: boolean;
    errors: Record<string, string>;
}

interface Props {
    form: FormState;
    onSubmit: (e: React.FormEvent) => void;
    submitLabel: string;
    cancelHref: string;
}

export default function ServiceForm({ form, onSubmit, submitLabel, cancelHref }: Props) {
    const { data, setData, processing, errors } = form;

    function addItem() {
        setData('items', [...data.items, '']);
    }

    function updateItem(index: number, value: string) {
        const updated = [...data.items];
        updated[index] = value;
        setData('items', updated);
    }

    function removeItem(index: number) {
        if (data.items.length <= 1) return;
        setData('items', data.items.filter((_, i) => i !== index));
    }

    return (
        <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border p-6 space-y-5">
            {/* Title */}
            <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                    Judul Layanan <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-muted-foreground"
                    placeholder="cth. Residential & Commercial"
                />
                {errors.title && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.title}</p>}
            </div>

            {/* Description */}
            <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                    Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-muted-foreground"
                    placeholder="Deskripsi singkat layanan..."
                />
                {errors.description && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.description}</p>}
            </div>

            {/* Items */}
            <div>
                <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium text-foreground">
                        Item Checklist <span className="text-red-500">*</span>
                    </label>
                    <button
                        type="button"
                        onClick={addItem}
                        className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah item
                    </button>
                </div>
                <div className="space-y-2">
                    {data.items.map((item, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={item}
                                onChange={e => updateItem(index, e.target.value)}
                                className="flex-1 rounded-lg border border-input bg-background text-foreground px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-muted-foreground"
                                placeholder={`Item ${index + 1}`}
                            />
                            <button
                                type="button"
                                onClick={() => removeItem(index)}
                                disabled={data.items.length <= 1}
                                className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
                {errors.items && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.items}</p>}
            </div>

            {/* Color + Sort + Active */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Warna Ikon</label>
                    <div className="flex gap-2">
                        {colorOptions.map(opt => (
                            <button
                                key={opt.value}
                                type="button"
                                onClick={() => setData('color', opt.value)}
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                                    data.color === opt.value
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                        : 'border-border text-muted-foreground hover:border-border/80'
                                }`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full ${opt.dot}`} />
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Urutan</label>
                    <input
                        type="number"
                        min={0}
                        value={data.sort_order}
                        onChange={e => setData('sort_order', Number(e.target.value))}
                        className="w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                    type="checkbox"
                    checked={data.is_active}
                    onChange={e => setData('is_active', e.target.checked)}
                    className="w-4 h-4 rounded border-input text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-foreground">Tampilkan di website</span>
            </label>

            <div className="flex items-center gap-3 pt-2 border-t border-border">
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                >
                    {processing ? 'Menyimpan...' : submitLabel}
                </button>
                <Link href={cancelHref} className="text-sm text-muted-foreground hover:text-foreground">
                    Batal
                </Link>
            </div>
        </form>
    );
}
