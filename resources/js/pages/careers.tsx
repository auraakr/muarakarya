import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import CompanyNavbar from '@/components/company-navbar';
import CompanyFooter from '@/components/company-footer';

type Department = 'Semua' | 'Engineering' | 'Sales' | 'Admin';

interface Job {
    id: number;
    title: string;
    department: Exclude<Department, 'Semua'>;
    type: 'Full-time' | 'Contract';
    location: string;
    deadline: string;
    summary: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

const jobs: Job[] = [
    {
        id: 1,
        title: 'Teknisi HVAC & Refrigerasi',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Bekasi, Jawa Barat',
        deadline: '31 Jul 2026',
        summary: 'Bertanggung jawab atas instalasi, perawatan preventif, dan perbaikan sistem AC, chiller, serta refrigerasi di site klien.',
        responsibilities: [
            'Melakukan instalasi dan komisioning sistem HVAC/refrigerasi',
            'Melaksanakan preventive maintenance sesuai jadwal yang ditetapkan',
            'Mendiagnosa dan menangani kerusakan sistem secara reaktif',
            'Membuat laporan teknis dan dokumentasi hasil pekerjaan',
            'Menjaga standar K3 dan prosedur HSSE di setiap pekerjaan',
        ],
        requirements: [
            'Min. SMK Teknik Pendingin / Refrigerasi atau D3 Teknik Mesin / Elektro',
            'Pengalaman min. 1 tahun sebagai teknisi AC / HVAC',
            'Memahami sistem refrigerasi, ducting, dan kelistrikan dasar',
            'Memiliki SIM A / C (diutamakan)',
            'Bersedia ditempatkan di lokasi proyek (area Jabodetabek)',
        ],
        benefits: ['BPJS Kesehatan & Ketenagakerjaan', 'Tunjangan transport & makan', 'Lembur dibayar', 'Pelatihan & sertifikasi teknis'],
    },
    {
        id: 2,
        title: 'Project Manager HVAC',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Jakarta Selatan',
        deadline: '15 Agu 2026',
        summary: 'Memimpin dan mengelola proyek instalasi HVAC skala menengah–besar dari perencanaan, pelaksanaan, hingga serah terima kepada klien.',
        responsibilities: [
            'Merencanakan, mengelola, dan mengawasi jalannya proyek HVAC end-to-end',
            'Berkoordinasi dengan subkontraktor, vendor, dan perwakilan klien',
            'Memastikan proyek selesai tepat scope, budget, dan timeline',
            'Menyusun laporan progres dan presentasi kepada klien',
            'Mengelola risiko proyek dan mengkoordinasikan mitigasinya',
        ],
        requirements: [
            'S1 Teknik Mesin, Teknik Elektro, atau bidang relevan',
            'Pengalaman min. 3 tahun sebagai PM atau Site Engineer di HVAC / MEP',
            'Mampu membaca gambar teknik dan memahami spesifikasi HVAC',
            'Terbiasa menggunakan MS Project atau alat manajemen proyek sejenis',
            'Kemampuan komunikasi, negosiasi, dan kepemimpinan yang baik',
        ],
        benefits: ['BPJS Kesehatan & Ketenagakerjaan', 'Tunjangan jabatan', 'Kendaraan operasional', 'Bonus project completion'],
    },
    {
        id: 3,
        title: 'Estimator / Quantity Surveyor',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Bekasi, Jawa Barat',
        deadline: '31 Jul 2026',
        summary: 'Menyusun estimasi biaya, Bill of Quantity (BOQ), dan penawaran teknis untuk proyek-proyek HVAC yang akan ditenderkan.',
        responsibilities: [
            'Melakukan material takeoff dan penyusunan BOQ dari gambar desain',
            'Menyusun Rencana Anggaran Biaya (RAB) yang akurat dan kompetitif',
            'Menganalisa dokumen tender dan menyiapkan dokumen penawaran',
            'Berkoordinasi dengan tim engineering untuk klarifikasi teknis',
            'Memonitor harga material dan mengupdate database harga secara berkala',
        ],
        requirements: [
            'D3 / S1 Teknik Mesin, Teknik Sipil, atau Arsitektur',
            'Pengalaman min. 2 tahun di bidang estimasi MEP / HVAC',
            'Mahir menggunakan AutoCAD dan MS Excel tingkat lanjut',
            'Memahami spesifikasi teknis dan standar harga material HVAC',
            'Teliti, sistematis, dan terbiasa bekerja dengan deadline ketat',
        ],
        benefits: ['BPJS Kesehatan & Ketenagakerjaan', 'Tunjangan transport & makan', 'Bonus performance tahunan'],
    },
    {
        id: 4,
        title: 'Sales & Business Development',
        department: 'Sales',
        type: 'Full-time',
        location: 'Jakarta',
        deadline: '31 Jul 2026',
        summary: 'Mengembangkan bisnis perusahaan dengan mencari klien baru, membangun relasi strategis, dan menutup kontrak proyek HVAC.',
        responsibilities: [
            'Mencari dan mengembangkan prospek klien baru (B2B)',
            'Melakukan presentasi dan proposal layanan kepada calon klien',
            'Membangun dan menjaga hubungan jangka panjang dengan klien existing',
            'Berkoordinasi dengan tim teknis untuk penyusunan penawaran harga',
            'Memenuhi target penjualan bulanan dan kuartalan',
        ],
        requirements: [
            'D3 / S1 semua jurusan, diutamakan Teknik atau Manajemen Bisnis',
            'Pengalaman min. 1 tahun di bidang sales B2B, diutamakan proyek / kontraktor',
            'Memiliki jaringan relasi di industri properti, industri, atau fasilitas',
            'Komunikatif, persuasif, dan sangat berorientasi pada target',
            'Memiliki SIM A dan bersedia mobile di area Jabodetabek',
        ],
        benefits: ['BPJS Kesehatan & Ketenagakerjaan', 'Komisi penjualan kompetitif', 'Tunjangan kendaraan & komunikasi', 'Incentive trip tahunan'],
    },
    {
        id: 5,
        title: 'Admin Operasional & Keuangan',
        department: 'Admin',
        type: 'Full-time',
        location: 'Bekasi, Jawa Barat',
        deadline: '31 Jul 2026',
        summary: 'Mengelola administrasi operasional harian, dokumen proyek, dan pembukuan untuk mendukung kelancaran operasional perusahaan.',
        responsibilities: [
            'Mengelola dokumen kontrak, PO, invoice, dan faktur proyek',
            'Membantu proses pengadaan material dan koordinasi pengiriman',
            'Membuat laporan keuangan sederhana dan rekonsiliasi kas harian',
            'Mengelola arsip dokumen fisik dan digital perusahaan',
            'Mendukung kebutuhan administratif manajemen dan tim lapangan',
        ],
        requirements: [
            'D3 / S1 Akuntansi, Manajemen, atau Administrasi Bisnis',
            'Pengalaman min. 1 tahun sebagai admin / keuangan di perusahaan konstruksi / jasa',
            'Mahir menggunakan MS Office, terutama Excel',
            'Familiar dengan software akuntansi (Accurate / Jurnal.id) adalah nilai plus',
            'Teliti, rapi, dan mampu bekerja secara multitasking',
        ],
        benefits: ['BPJS Kesehatan & Ketenagakerjaan', 'Tunjangan transport & makan', 'THR', 'Lingkungan kerja profesional & kekeluargaan'],
    },
];

const deptColors: Record<Exclude<Department, 'Semua'>, string> = {
    Engineering: 'bg-blue-100 text-blue-700',
    Sales: 'bg-emerald-100 text-emerald-700',
    Admin: 'bg-purple-100 text-purple-700',
};

const filters: Department[] = ['Semua', 'Engineering', 'Sales', 'Admin'];

export default function Careers() {
    const [activeFilter, setActiveFilter] = useState<Department>('Semua');
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const filtered = activeFilter === 'Semua' ? jobs : jobs.filter((j) => j.department === activeFilter);

    return (
        <>
            <Head title="Karir — CV. Muara Karya" />
            <div className="min-h-screen bg-slate-50 text-gray-800">
                <CompanyNavbar />

                {/* ── Hero ── */}
                <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-16 right-16 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-5"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 text-center">
                        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-blue-300 text-sm">{jobs.length} Posisi Terbuka</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                            Bergabunglah Bersama{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Tim Kami
                            </span>
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                            CV. Muara Karya membuka kesempatan bagi para profesional yang berdedikasi untuk tumbuh
                            bersama dalam industri HVAC & Refrigerasi.
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { icon: '🏢', label: 'Kantor Nyaman', sub: 'Bekasi & Jakarta' },
                                { icon: '📈', label: 'Karir Berkembang', sub: 'Pelatihan rutin' },
                                { icon: '🛡️', label: 'BPJS Lengkap', sub: 'Kesehatan & TK' },
                                { icon: '⚙️', label: 'Tim Profesional', sub: 'Sejak 2014' },
                            ].map((item) => (
                                <div key={item.label} className="bg-white/8 border border-white/10 rounded-xl px-4 py-4 backdrop-blur-sm">
                                    <div className="text-2xl mb-1">{item.icon}</div>
                                    <div className="text-white text-sm font-semibold">{item.label}</div>
                                    <div className="text-slate-400 text-xs mt-0.5">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Job Listings ── */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 lg:px-8">

                        {/* Filter tabs */}
                        <div className="flex items-center gap-2 mb-8 flex-wrap">
                            <span className="text-sm text-gray-500 mr-1">Filter:</span>
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => { setActiveFilter(f); setExpandedId(null); }}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                        activeFilter === f
                                            ? 'bg-blue-700 text-white'
                                            : 'bg-white border border-slate-200 text-gray-600 hover:border-blue-300 hover:text-blue-700'
                                    }`}
                                >
                                    {f}
                                    {f !== 'Semua' && (
                                        <span className="ml-1.5 text-xs opacity-70">
                                            ({jobs.filter((j) => j.department === f).length})
                                        </span>
                                    )}
                                </button>
                            ))}
                            <span className="ml-auto text-sm text-gray-400">{filtered.length} posisi ditemukan</span>
                        </div>

                        {/* Job cards */}
                        <div className="space-y-4">
                            {filtered.map((job) => {
                                const isOpen = expandedId === job.id;
                                return (
                                    <div
                                        key={job.id}
                                        className={`bg-white rounded-2xl border transition-all ${
                                            isOpen ? 'border-blue-200 shadow-md' : 'border-slate-200 shadow-sm hover:border-slate-300'
                                        }`}
                                    >
                                        {/* Card header */}
                                        <div className="p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                                {/* Icon */}
                                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                </div>

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${deptColors[job.department]}`}>
                                                            {job.department}
                                                        </span>
                                                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                                            {job.type}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {job.location}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            Tutup: {job.deadline}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">{job.summary}</p>
                                                </div>

                                                {/* Toggle button */}
                                                <button
                                                    onClick={() => setExpandedId(isOpen ? null : job.id)}
                                                    className={`flex-shrink-0 self-start flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                        isOpen
                                                            ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                                            : 'bg-slate-50 text-gray-700 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {isOpen ? 'Tutup' : 'Lihat Detail'}
                                                    <svg
                                                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expanded detail */}
                                        {isOpen && (
                                            <div className="border-t border-slate-100 px-6 pb-6 pt-5">
                                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                    {/* Responsibilities */}
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                            <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                                                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                                </svg>
                                                            </span>
                                                            Tanggung Jawab
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.responsibilities.map((r) => (
                                                                <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                                                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                                                                    {r}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Requirements */}
                                                    <div>
                                                        <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                            <span className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                                                                <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4" />
                                                                </svg>
                                                            </span>
                                                            Kualifikasi
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements.map((r) => (
                                                                <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                                                                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0 mt-2" />
                                                                    {r}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Benefits + CTA */}
                                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                                    <div>
                                                        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Yang Kami Tawarkan</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {job.benefits.map((b) => (
                                                                <span key={b} className="text-xs bg-green-50 text-green-700 border border-green-100 px-2.5 py-1 rounded-full">
                                                                    {b}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={`mailto:hrd@muarakarya.co.id?subject=Lamaran: ${job.title}&body=Halo Tim HRD CV. Muara Karya,%0A%0ASaya tertarik untuk melamar posisi ${job.title}.%0A%0ATerlampir CV saya.%0A%0ATerima kasih.`}
                                                        className="flex-shrink-0 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                        </svg>
                                                        Lamar Sekarang
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── CTA — Tidak ada posisi yang cocok ── */}
                <section className="pb-20">
                    <div className="max-w-4xl mx-auto px-4 lg:px-8">
                        <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-slate-900 rounded-2xl p-8 lg:p-10 text-center">
                            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
                            <div className="relative">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Tidak ada posisi yang sesuai?</h3>
                                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                                    Kirimkan CV dan portofolio Anda ke kami. Kami akan menyimpan profil Anda dan
                                    menghubungi jika ada posisi yang relevan di masa mendatang.
                                </p>
                                <a
                                    href="mailto:hrd@muarakarya.co.id?subject=Open Application — CV Terbuka&body=Halo Tim HRD CV. Muara Karya,%0A%0ASaya ingin mengirimkan CV terbuka dan berharap dapat bergabung jika ada posisi yang sesuai.%0A%0ATerlampir CV saya.%0A%0ATerima kasih."
                                    className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Kirim CV Terbuka
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <CompanyFooter />
            </div>
        </>
    );
}

Careers.layout = (page: React.ReactNode) => <>{page}</>;
