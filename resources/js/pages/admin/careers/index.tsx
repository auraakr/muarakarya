import { Head, Link, router, usePage } from '@inertiajs/react';

interface Career {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    deadline: string;
    is_active: boolean;
    sort_order: number;
}

const deptColor: Record<string, string> = {
    Engineering: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    Sales:       'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    Admin:       'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
};

export default function CareerIndex({ careers }: { careers: Career[] }) {
    const { flash } = usePage<any>().props;

    function handleDelete(id: number) {
        if (!confirm('Hapus lowongan ini?')) return;
        router.delete(`/admin/careers/${id}`);
    }

    return (
        <>
            <Head title="Kelola Karir" />
            <div className="p-6 space-y-6">

                {flash?.success && (
                    <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                        {flash.success}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h1 className="text-xl font-bold text-foreground">Kelola Karir</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">{careers.length} lowongan terdaftar</p>
                    </div>
                    <Link
                        href="/admin/careers/create"
                        className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex-shrink-0"
                        style={{ backgroundColor: '#135b97' }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Tambah Lowongan
                    </Link>
                </div>

                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    {careers.length === 0 ? (
                        <div className="py-20 text-center text-muted-foreground">
                            <svg className="w-10 h-10 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm font-medium">Belum ada lowongan</p>
                            <p className="text-xs mt-1">
                                <Link href="/admin/careers/create" className="hover:underline" style={{ color: '#135b97' }}>
                                    Tambahkan lowongan pertama
                                </Link>
                            </p>
                        </div>
                    ) : (
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted/60 border-b border-border">
                                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Posisi</th>
                                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">Departemen</th>
                                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Lokasi</th>
                                    <th className="text-left px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden lg:table-cell">Deadline</th>
                                    <th className="text-center px-4 py-3.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide w-28">Status</th>
                                    <th className="px-6 py-3.5 w-24"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {careers.map((career) => (
                                    <tr key={career.id} className="hover:bg-muted/40 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-foreground">{career.title}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{career.type}</p>
                                        </td>
                                        <td className="px-4 py-4 hidden md:table-cell">
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${deptColor[career.department] ?? 'bg-muted text-muted-foreground'}`}>
                                                {career.department}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 hidden lg:table-cell">
                                            <span className="text-sm text-muted-foreground">{career.location}</span>
                                        </td>
                                        <td className="px-4 py-4 hidden lg:table-cell">
                                            <span className="text-sm text-muted-foreground">{career.deadline}</span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                                                career.is_active
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                    : 'bg-muted text-muted-foreground'
                                            }`}>
                                                {career.is_active ? 'Aktif' : 'Nonaktif'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link
                                                    href={`/admin/careers/${career.id}/edit`}
                                                    className="p-2 rounded-lg text-muted-foreground hover:text-[#135b97] hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                                    title="Edit"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(career.id)}
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

CareerIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Karir', href: '/admin/careers' },
    ],
};
