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

const colorDots: Record<string, string> = {
    blue: 'bg-blue-500',
    cyan: 'bg-cyan-500',
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
            <div className="space-y-6">
                {flash?.success && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                        {flash.success}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Kelola Layanan</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">{services.length} layanan terdaftar</p>
                    </div>
                    <Link
                        href="/admin/services/create"
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah Layanan
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {services.length === 0 ? (
                        <div className="md:col-span-2 xl:col-span-3 py-16 text-center text-muted-foreground bg-card rounded-xl border border-border">
                            <svg className="w-10 h-10 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <p className="text-sm">Belum ada layanan. Tambahkan yang pertama.</p>
                        </div>
                    ) : (
                        services.map((service) => (
                            <div key={service.id} className="bg-card rounded-xl border border-border p-5 flex flex-col gap-3">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${colorDots[service.color] ?? 'bg-muted-foreground'}`} />
                                        <h3 className="font-semibold text-foreground text-sm leading-snug">{service.title}</h3>
                                    </div>
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${
                                        service.is_active
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                            : 'bg-muted text-muted-foreground'
                                    }`}>
                                        {service.is_active ? 'Aktif' : 'Nonaktif'}
                                    </span>
                                </div>

                                <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>

                                <ul className="space-y-1">
                                    {service.items.slice(0, 3).map((item, i) => (
                                        <li key={i} className="text-xs text-foreground flex items-center gap-1.5">
                                            <span className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />{item}
                                        </li>
                                    ))}
                                    {service.items.length > 3 && (
                                        <li className="text-xs text-muted-foreground">+{service.items.length - 3} item lainnya</li>
                                    )}
                                </ul>

                                <div className="flex items-center gap-2 pt-2 border-t border-border mt-auto">
                                    <Link
                                        href={`/admin/services/${service.id}/edit`}
                                        className="flex-1 text-center text-xs font-medium text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 py-1.5 rounded-lg transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="flex-1 text-xs font-medium text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 py-1.5 rounded-lg transition-colors"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
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
