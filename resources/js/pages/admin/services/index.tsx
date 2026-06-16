import { Head, Link, router, usePage } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    description: string;
    items: string[];
    color: string;
    sort_order: number;
    is_active: boolean;
}

const colorBar: Record<string, string> = {
    blue:  'bg-blue-500',
    cyan:  'bg-cyan-500',
    green: 'bg-green-500',
};

export default function ServiceIndex({ services }: { services: Service[] }) {
    const { flash } = usePage<any>().props;

    function handleDelete(id: number) {
        if (!confirm('Hapus layanan ini?')) return;
        router.delete(`/admin/services/${id}`);
    }

    return (
        <>
            <Head title="Kelola Layanan" />
            <div className="p-6 space-y-6">

                {flash?.success && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                        {flash.success}
                    </div>
                )}

                {/* Page header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Kelola Layanan</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">{services.length} layanan terdaftar</p>
                    </div>
                    <Link
                        href="/admin/services/create"
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex-shrink-0"
                        style={{ backgroundColor: '#135b97' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah Layanan
                    </Link>
                </div>

                {/* Service grid */}
                {services.length === 0 ? (
                    <div className="py-20 text-center text-muted-foreground bg-card rounded-xl border border-border">
                        <svg className="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-sm font-medium">Belum ada layanan</p>
                        <p className="text-xs mt-1">
                            <Link href="/admin/services/create" className="text-[#135b97] hover:underline">Tambahkan layanan pertama</Link>
                        </p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {services.map((service) => (
                            <div key={service.id} className="bg-card rounded-xl border border-border overflow-hidden flex flex-col">
                                {/* Card top accent */}
                                <div className={`h-1 w-full ${colorBar[service.color] ?? 'bg-muted-foreground'}`} />

                                <div className="p-5 flex flex-col gap-4 flex-1">
                                    {/* Title + status */}
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="font-semibold text-foreground text-sm leading-snug">{service.title}</h3>
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                                            service.is_active
                                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                : 'bg-muted text-muted-foreground'
                                        }`}>
                                            {service.is_active ? 'Aktif' : 'Nonaktif'}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>

                                    {/* Checklist items */}
                                    <ul className="space-y-1.5 flex-1">
                                        {service.items.slice(0, 4).map((item, i) => (
                                            <li key={i} className="text-xs text-foreground flex items-start gap-2">
                                                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                        {service.items.length > 4 && (
                                            <li className="text-xs text-muted-foreground pl-5.5">+{service.items.length - 4} item lainnya</li>
                                        )}
                                    </ul>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                                        <Link
                                            href={`/admin/services/${service.id}/edit`}
                                            className="flex-1 text-center text-xs font-semibold text-[#135b97] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 py-2 rounded-lg transition-colors"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(service.id)}
                                            className="flex-1 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 py-2 rounded-lg transition-colors"
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    );
}

ServiceIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Layanan', href: '/admin/services' },
    ],
};
