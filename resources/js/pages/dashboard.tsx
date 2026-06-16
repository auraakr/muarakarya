import { Head, Link } from '@inertiajs/react';
import { dashboard } from '@/routes';
import type { ReactNode } from 'react';

interface Stats {
    total_services: number;
    active_services: number;
    total_faqs: number;
    active_faqs: number;
}

interface RecentFaq {
    id: number;
    question: string;
    is_active: boolean;
    sort_order: number;
}

interface RecentService {
    id: number;
    title: string;
    color: string;
    is_active: boolean;
}

interface Props {
    stats?: Stats;
    recent_faqs?: RecentFaq[];
    recent_services?: RecentService[];
}

const colorBar: Record<string, string> = {
    blue:  'bg-blue-500',
    cyan:  'bg-cyan-500',
    green: 'bg-green-500',
};

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function Dashboard({
    stats = { total_services: 0, active_services: 0, total_faqs: 0, active_faqs: 0 },
    recent_faqs = [],
    recent_services = [],
}: Props) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="space-y-6 p-1">

                {/* ── Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Ringkasan Konten</h1>
                        <p className="text-sm text-muted-foreground mt-0.5">
                            Kelola konten website CV. Muara Karya dari sini.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/admin/faqs/create"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah FAQ
                        </Link>
                        <Link
                            href="/admin/services/create"
                            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white transition-colors"
                            style={{ backgroundColor: '#135b97' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Tambah Layanan
                        </Link>
                    </div>
                </div>

                {/* ── Stat cards ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1 — highlighted */}
                    <div className="col-span-2 sm:col-span-1 rounded-xl p-5 flex flex-col justify-between gap-6" style={{ backgroundColor: '#0f2d4a' }}>
                        <div className="flex items-start justify-between">
                            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#7fb3d3' }}>
                                Layanan Aktif
                            </p>
                            <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(127,179,211,0.15)', color: '#7fb3d3' }}>
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                Aktif
                            </span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-white">{stats.active_services}</p>
                            <p className="text-xs mt-1" style={{ color: '#7fb3d3' }}>dari {stats.total_services} layanan total</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <StatCard
                        label="Total Layanan"
                        value={stats.total_services}
                        sub="layanan terdaftar"
                        icon={
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        }
                    />

                    {/* Card 3 */}
                    <StatCard
                        label="FAQ Aktif"
                        value={stats.active_faqs}
                        sub={`dari ${stats.total_faqs} FAQ total`}
                        icon={
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        }
                    />

                    {/* Card 4 */}
                    <StatCard
                        label="Total FAQ"
                        value={stats.total_faqs}
                        sub="pertanyaan terdaftar"
                        icon={
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        }
                    />
                </div>

                {/* ── Main grid ── */}
                <div className="grid lg:grid-cols-5 gap-6">

                    {/* ── Left: FAQ table ── */}
                    <div className="lg:col-span-3 bg-card rounded-xl border border-border overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                            <div>
                                <h2 className="font-bold text-foreground">FAQ Terkini</h2>
                                <p className="text-xs text-muted-foreground mt-0.5">5 pertanyaan terakhir ditambahkan</p>
                            </div>
                            <Link
                                href="/admin/faqs"
                                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            >
                                Lihat Semua
                            </Link>
                        </div>

                        {recent_faqs.length === 0 ? (
                            <div className="py-12 text-center text-muted-foreground text-sm">
                                Belum ada FAQ. <Link href="/admin/faqs/create" className="text-blue-600 underline">Tambah sekarang</Link>
                            </div>
                        ) : (
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-muted/50">
                                        <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground w-10">#</th>
                                        <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground">Pertanyaan</th>
                                        <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground w-20">Status</th>
                                        <th className="px-5 py-3 w-16"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {recent_faqs.map((faq, i) => (
                                        <tr key={faq.id} className="hover:bg-muted/30 transition-colors">
                                            <td className="px-5 py-3.5">
                                                <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                                                    {alphabet[i]}
                                                </div>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <p className="text-foreground font-medium line-clamp-1">{faq.question}</p>
                                            </td>
                                            <td className="px-5 py-3.5 text-center">
                                                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${
                                                    faq.is_active
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                        : 'bg-muted text-muted-foreground'
                                                }`}>
                                                    {faq.is_active ? 'Aktif' : 'Nonaktif'}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3.5">
                                                <Link
                                                    href={`/admin/faqs/${faq.id}/edit`}
                                                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    Edit →
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* ── Right: Services + Quick Actions ── */}
                    <div className="lg:col-span-2 flex flex-col gap-4">

                        {/* Services list */}
                        <div className="bg-card rounded-xl border border-border overflow-hidden">
                            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                                <h2 className="font-bold text-foreground">Layanan</h2>
                                <Link
                                    href="/admin/services"
                                    className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                >
                                    + Kelola
                                </Link>
                            </div>

                            {recent_services.length === 0 ? (
                                <div className="py-10 text-center text-muted-foreground text-sm">
                                    Belum ada layanan.
                                </div>
                            ) : (
                                <div className="divide-y divide-border">
                                    {recent_services.map((svc) => (
                                        <div key={svc.id} className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/30 transition-colors">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className={`w-1 h-8 rounded-full flex-shrink-0 ${colorBar[svc.color] ?? 'bg-muted-foreground'}`} />
                                                <div className="min-w-0">
                                                    <p className="text-sm font-semibold text-foreground truncate">{svc.title}</p>
                                                    <p className="text-xs text-muted-foreground capitalize">{svc.color}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 flex-shrink-0">
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                                    svc.is_active
                                                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                                        : 'bg-muted text-muted-foreground'
                                                }`}>
                                                    {svc.is_active ? 'Aktif' : 'Off'}
                                                </span>
                                                <Link href={`/admin/services/${svc.id}/edit`} className="text-muted-foreground hover:text-foreground">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Quick actions */}
                        <div className="bg-card rounded-xl border border-border p-5">
                            <h2 className="font-bold text-foreground mb-4">Aksi Cepat</h2>
                            <div className="space-y-2">
                                {[
                                    { href: '/admin/faqs', label: 'Kelola FAQ', desc: 'Edit & tambah pertanyaan', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' },
                                    { href: '/admin/services', label: 'Kelola Layanan', desc: 'Edit & tambah layanan', color: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-400' },
                                    { href: '/', label: 'Lihat Website', desc: 'Buka halaman publik', color: 'bg-muted text-muted-foreground' },
                                ].map((action) => (
                                    <Link
                                        key={action.href}
                                        href={action.href}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">{action.label}</p>
                                            <p className="text-xs text-muted-foreground">{action.desc}</p>
                                        </div>
                                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

function StatCard({ label, value, sub, icon }: { label: string; value: number; sub: string; icon: ReactNode }) {
    return (
        <div className="bg-card rounded-xl border border-border p-5 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon}
                    </svg>
                </div>
            </div>
            <div>
                <p className="text-4xl font-black text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{sub}</p>
            </div>
        </div>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
    ],
};
