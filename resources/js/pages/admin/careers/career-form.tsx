import { Link } from '@inertiajs/react';

const departments = ['Engineering', 'Sales', 'Admin'] as const;
const types = ['Full-time', 'Contract'] as const;

const inputCls = 'w-full rounded-lg border border-input bg-background text-foreground px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#135b97]/40 focus:border-[#135b97] transition-colors placeholder:text-muted-foreground';
const labelCls = 'block text-sm font-semibold text-foreground mb-2';

interface FormState {
    data: {
        title: string;
        department: string;
        type: string;
        location: string;
        deadline: string;
        summary: string;
        responsibilities: string[];
        requirements: string[];
        benefits: string[];
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

function DynamicList({
    label,
    items,
    onChange,
    placeholder,
}: {
    label: string;
    items: string[];
    onChange: (items: string[]) => void;
    placeholder: string;
}) {
    function update(i: number, val: string) {
        const next = [...items];
        next[i] = val;
        onChange(next);
    }
    function remove(i: number) {
        if (items.length <= 1) return;
        onChange(items.filter((_, idx) => idx !== i));
    }
    function add() {
        onChange([...items, '']);
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className={`${labelCls} mb-0`}>{label} <span className="text-red-500">*</span></label>
                <button type="button" onClick={add} className="text-xs font-semibold hover:underline flex items-center gap-1" style={{ color: '#135b97' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                    Tambah
                </button>
            </div>
            <div className="space-y-2">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-2">
                        <input
                            type="text"
                            value={item}
                            onChange={e => update(i, e.target.value)}
                            className={inputCls}
                            placeholder={`${placeholder} ${i + 1}`}
                        />
                        <button
                            type="button"
                            onClick={() => remove(i)}
                            disabled={items.length <= 1}
                            className="p-2.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CareerForm({ form, onSubmit, submitLabel, cancelHref }: Props) {
    const { data, setData, processing, errors } = form;

    return (
        <form onSubmit={onSubmit} className="bg-card rounded-xl border border-border divide-y divide-border">
            <div className="p-6 space-y-5">

                {/* Title */}
                <div>
                    <label className={labelCls}>Judul Posisi <span className="text-red-500">*</span></label>
                    <input type="text" value={data.title} onChange={e => setData('title', e.target.value)}
                        className={inputCls} placeholder="cth. Teknisi HVAC & Refrigerasi" />
                    {errors.title && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.title}</p>}
                </div>

                {/* Department + Type */}
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className={labelCls}>Departemen <span className="text-red-500">*</span></label>
                        <select value={data.department} onChange={e => setData('department', e.target.value)}
                            className={inputCls}>
                            <option value="">-- Pilih --</option>
                            {departments.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>
                        {errors.department && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.department}</p>}
                    </div>
                    <div>
                        <label className={labelCls}>Tipe Pekerjaan <span className="text-red-500">*</span></label>
                        <select value={data.type} onChange={e => setData('type', e.target.value)}
                            className={inputCls}>
                            {types.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.type && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.type}</p>}
                    </div>
                </div>

                {/* Location + Deadline */}
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <label className={labelCls}>Lokasi <span className="text-red-500">*</span></label>
                        <input type="text" value={data.location} onChange={e => setData('location', e.target.value)}
                            className={inputCls} placeholder="cth. Bandung, Jawa Barat" />
                        {errors.location && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.location}</p>}
                    </div>
                    <div>
                        <label className={labelCls}>Batas Lamaran <span className="text-red-500">*</span></label>
                        <input type="text" value={data.deadline} onChange={e => setData('deadline', e.target.value)}
                            className={inputCls} placeholder="cth. 31 Jul 2026" />
                        {errors.deadline && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.deadline}</p>}
                    </div>
                </div>

                {/* Summary */}
                <div>
                    <label className={labelCls}>Ringkasan Posisi <span className="text-red-500">*</span></label>
                    <textarea value={data.summary} onChange={e => setData('summary', e.target.value)}
                        rows={3} className={`${inputCls} resize-none`}
                        placeholder="Deskripsi singkat tentang posisi ini..." />
                    {errors.summary && <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">{errors.summary}</p>}
                </div>

                {/* Responsibilities */}
                <DynamicList
                    label="Tanggung Jawab"
                    items={data.responsibilities}
                    onChange={v => setData('responsibilities', v)}
                    placeholder="Tanggung jawab"
                />
                {errors.responsibilities && <p className="text-xs text-red-600 dark:text-red-400">{errors.responsibilities}</p>}

                {/* Requirements */}
                <DynamicList
                    label="Kualifikasi"
                    items={data.requirements}
                    onChange={v => setData('requirements', v)}
                    placeholder="Kualifikasi"
                />
                {errors.requirements && <p className="text-xs text-red-600 dark:text-red-400">{errors.requirements}</p>}

                {/* Benefits */}
                <DynamicList
                    label="Benefit / Tunjangan"
                    items={data.benefits}
                    onChange={v => setData('benefits', v)}
                    placeholder="Benefit"
                />
                {errors.benefits && <p className="text-xs text-red-600 dark:text-red-400">{errors.benefits}</p>}

                {/* Sort + Active */}
                <div className="grid grid-cols-2 gap-5 items-end">
                    <div>
                        <label className={labelCls}>Urutan Tampil</label>
                        <input type="number" min={0} value={data.sort_order}
                            onChange={e => setData('sort_order', Number(e.target.value))}
                            className={inputCls} />
                        <p className="mt-1.5 text-xs text-muted-foreground">Angka lebih kecil tampil lebih dulu.</p>
                    </div>
                    <div className="pb-1">
                        <label className="flex items-center gap-2.5 cursor-pointer">
                            <input type="checkbox" checked={data.is_active}
                                onChange={e => setData('is_active', e.target.checked)}
                                className="w-4 h-4 rounded border-input accent-[#135b97]" />
                            <span className="text-sm font-medium text-foreground">Tampilkan di website</span>
                        </label>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 flex items-center gap-3 bg-muted/30">
                <button type="submit" disabled={processing}
                    className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors disabled:opacity-60"
                    style={{ backgroundColor: '#135b97' }}>
                    {processing ? 'Menyimpan...' : submitLabel}
                </button>
                <Link href={cancelHref} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Batal
                </Link>
            </div>
        </form>
    );
}
