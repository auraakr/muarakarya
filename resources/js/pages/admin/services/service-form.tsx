import { Link } from '@inertiajs/react';

const colorOptions = [
    { value: 'blue',  label: 'Biru',  dot: 'bg-blue-500' },
    { value: 'cyan',  label: 'Cyan',  dot: 'bg-cyan-500' },
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

const inputCls = 'w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#135b97]/40 focus:border-[#135b97] transition-colors placeholder:text-muted-foreground';
const labelCls = 'block text-sm font-semibold text-foreground mb-2';

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
        <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border divide-y divide-border">
            <div className="p-6 space-y-5">

                {/* Title */}
                <div>
                    <label className={labelCls}>
                        Judul Layanan <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        className={inputCls}
                        placeholder="cth. Residential & Commercial"
                    />
                    {errors.title && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.title}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className={labelCls}>
                        Deskripsi <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        rows={3}
                        className={`${inputCls} resize-none`}
                        placeholder="Deskripsi singkat layanan..."
                    />
                    {errors.description && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.description}</p>}
                </div>

                {/* Items */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className={`${labelCls} mb-0`}>
                            Item Checklist <span className="text-red-500">*</span>
                        </label>
                        <button
                            type="button"
                            onClick={addItem}
                            className="text-xs font-semibold text-[#135b97] dark:text-blue-400 hover:underline flex items-center gap-1"
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
                                    className={inputCls}
                                    placeholder={`Item ${index + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    disabled={data.items.length <= 1}
                                    className="p-2.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    {errors.items && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.items}</p>}
                </div>

                {/* Color + Sort */}
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className={labelCls}>Warna Aksen</label>
                        <div className="flex gap-2 flex-wrap">
                            {colorOptions.map(opt => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => setData('color', opt.value)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                                        data.color === opt.value
                                            ? 'border-[#135b97] bg-blue-50 dark:bg-blue-900/20 text-[#135b97] dark:text-blue-300'
                                            : 'border-border text-muted-foreground hover:border-input hover:bg-muted'
                                    }`}
                                >
                                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${opt.dot}`} />
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className={labelCls}>Urutan Tampil</label>
                        <input
                            type="number"
                            min={0}
                            value={data.sort_order}
                            onChange={e => setData('sort_order', Number(e.target.value))}
                            className={inputCls}
                        />
                        <p className="mt-1.5 text-xs text-muted-foreground">Angka lebih kecil tampil lebih dulu.</p>
                    </div>
                </div>

                {/* Active toggle */}
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

            {/* Footer actions */}
            <div className="px-6 py-4 flex items-center gap-3 bg-muted/30">
                <button
                    type="submit"
                    disabled={processing}
                    className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60"
                    style={{ backgroundColor: '#135b97' }}
                >
                    {processing ? 'Menyimpan...' : submitLabel}
                </button>
                <Link
                    href={cancelHref}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    Batal
                </Link>
            </div>
        </form>
    );
}
