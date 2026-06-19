import React, { useState, useRef, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import CompanyNavbar from '@/components/company-navbar';
import CompanyFooter from '@/components/company-footer';

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

type Department = 'Semua' | 'Engineering' | 'Sales' | 'Admin';

interface Job {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    deadline: string;
    summary: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

const deptStyle: Record<Exclude<Department, 'Semua'>, { bg: string; text: string; border: string }> = {
    Engineering: { bg: 'rgba(19,91,151,0.1)', text: '#135b97', border: 'rgba(19,91,151,0.2)' },
    Sales:       { bg: 'rgba(16,185,129,0.08)', text: '#059669', border: 'rgba(16,185,129,0.2)' },
    Admin:       { bg: 'rgba(124,58,237,0.08)', text: '#7c3aed', border: 'rgba(124,58,237,0.2)' },
};

const filters: Department[] = ['Semua', 'Engineering', 'Sales', 'Admin'];

export default function Careers({ jobs = [] }: { jobs: Job[] }) {
    const [activeFilter, setActiveFilter] = useState<Department>('Semua');
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [heroVisible, setHeroVisible] = useState(false);
    const { ref: listRef, inView: listIn } = useInView(0.05);
    const { ref: ctaRef, inView: ctaIn } = useInView(0.1);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    const filtered = activeFilter === 'Semua' ? jobs : jobs.filter((j: Job) => j.department === activeFilter);

    return (
        <>
            <Head title="Karir — CV. Muara Karya" />
            <div className="min-h-screen scroll-smooth" style={{ backgroundColor: '#f2f3f3', color: '#080808' }}>
                <CompanyNavbar />

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: '#080808' }}>
                    {/* bg decoration & image */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Gambar Background */}
                        <img
                            src="/elementpanjang/8.svg" /* Nanti ganti dengan file fotomu ya */
                            alt="Karir Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        {/* Gradasi gelap dari kiri ke kanan agar teks tetap terbaca */}
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.2) 100%)' }} />

                        {/* Cahaya Biru */}
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
                            style={{ backgroundColor: '#135b97', transform: 'translate(30%,-30%)' }} />
                        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
                            style={{ backgroundColor: '#135b97', transform: 'translate(-30%,30%)' }} />
                        
                        {/* Dot grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(242,243,243,0.4) 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }} />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 lg:px-12 pt-16 pb-20">
                        {/* Eyebrow */}
                        <div
                            className="flex items-center gap-3 mb-5 transition-all duration-700"
                            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(16px)' }}
                        >
                            <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>
                                // Bergabung Bersama Kami //
                            </span>
                            <div className="flex items-center gap-1.5 ml-2">
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#22c55e' }} />
                                <span className="text-xs font-semibold" style={{ color: '#22c55e' }}>{jobs.length} Posisi Terbuka</span>
                            </div>
                        </div>

                        <h1
                            className="font-black leading-[0.95] mb-6 transition-all duration-700 delay-100"
                            style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                color: '#f2f3f3',
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                            }}
                        >
                            KARIR DI{' '}
                            <span style={{ color: '#135b97' }}>CV. MUARA</span>
                            <br />
                            <span style={{ color: '#f2f3f3' }}>KARYA</span>
                        </h1>

                        <p
                            className="text-base leading-relaxed mb-12 max-w-xl transition-all duration-700 delay-200"
                            style={{
                                color: '#bec0c1',
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                            }}
                        >
                            Kami membuka kesempatan bagi para profesional yang berdedikasi untuk tumbuh bersama
                            dalam industri HVAC & Refrigerasi. Bergabunglah dengan tim kami di Bandung.
                        </p>

                        {/* Stats grid */}
                        <div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-px transition-all duration-700 delay-300"
                            style={{
                                backgroundColor: 'rgba(190,192,193,0.12)',
                                opacity: heroVisible ? 1 : 0,
                                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                            }}
                        >
                            {[
                                { 
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>, 
                                    label: 'Kantor Nyaman', 
                                    sub: 'Margahayu Raya, Bandung' 
                                },
                                { 
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, 
                                    label: 'Karir Berkembang', 
                                    sub: 'Pelatihan rutin' 
                                },
                                { 
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, 
                                    label: 'BPJS Lengkap', 
                                    sub: 'Kesehatan & TK' 
                                },
                                { 
                                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, 
                                    label: 'Tim Profesional', 
                                    sub: 'Sejak 2014' 
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex flex-col gap-1 p-5 transition-colors"
                                    style={{ backgroundColor: 'rgba(8,8,8,0.8)' }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(19,91,151,0.2)'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(8,8,8,0.8)'; }}
                                >
                                    {/* Ganti emotikon dengan Ikon SVG berwarna biru */}
                                    <div className="mb-2 text-[#135b97]">{item.icon}</div>
                                    <span className="text-sm font-bold" style={{ color: '#f2f3f3' }}>{item.label}</span>
                                    <span className="text-xs" style={{ color: '#5e7d9a' }}>{item.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wave */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform: 'translateY(2px)' }}>
                            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    JOB LISTINGS
                ══════════════════════════════════════════ */}
                <section className="py-16 lg:py-24" ref={listRef}>
                    <div className="max-w-5xl mx-auto px-4 lg:px-12">

                        {/* Filter bar */}
                        <div
                            className="flex flex-wrap items-center gap-2 mb-10 transition-all duration-700"
                            style={{ opacity: listIn ? 1 : 0, transform: listIn ? 'translateY(0)' : 'translateY(16px)' }}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest mr-2" style={{ color: '#5e7d9a' }}>Filter:</span>
                            {filters.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => { setActiveFilter(f); setExpandedId(null); }}
                                    className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all"
                                    style={{
                                        backgroundColor: activeFilter === f ? '#135b97' : 'transparent',
                                        color: activeFilter === f ? '#f2f3f3' : '#5e7d9a',
                                        border: `1.5px solid ${activeFilter === f ? '#135b97' : '#bec0c1'}`,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeFilter !== f) (e.currentTarget as HTMLButtonElement).style.borderColor = '#135b97';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeFilter !== f) (e.currentTarget as HTMLButtonElement).style.borderColor = '#bec0c1';
                                    }}
                                >
                                    {f}
                                    {f !== 'Semua' && (
                                        <span className="ml-1.5 opacity-70">
                                            ({jobs.filter((j) => j.department === f).length})
                                        </span>
                                    )}
                                </button>
                            ))}
                            <span className="ml-auto text-xs font-medium" style={{ color: '#5e7d9a' }}>
                                {filtered.length} posisi ditemukan
                            </span>
                        </div>

                        {/* Job cards */}
                        <div className="space-y-px" style={{ backgroundColor: '#bec0c1' }}>
                            {filtered.map((job, idx) => {
                                const isOpen = expandedId === job.id;
                                const dept = deptStyle[job.department as keyof typeof deptStyle] ?? deptStyle.Engineering;
                                return (
                                    <div
                                        key={job.id}
                                        className="transition-all duration-500"
                                        style={{
                                            backgroundColor: '#f2f3f3',
                                            opacity: listIn ? 1 : 0,
                                            transform: listIn ? 'translateY(0)' : 'translateY(12px)',
                                            transitionDelay: `${idx * 60}ms`,
                                        }}
                                    >
                                        {/* Card header */}
                                        <div className="p-6 lg:p-8">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                                                {/* Number */}
                                                <div
                                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-black text-base"
                                                    style={{ backgroundColor: isOpen ? '#135b97' : 'rgba(19,91,151,0.08)', color: isOpen ? '#f2f3f3' : '#135b97', transition: 'all 0.3s' }}
                                                >
                                                    {String(idx + 1).padStart(2, '0')}
                                                </div>

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <span
                                                            className="text-xs font-bold px-2.5 py-0.5 uppercase tracking-wider"
                                                            style={{ backgroundColor: dept.bg, color: dept.text, border: `1px solid ${dept.border}` }}
                                                        >
                                                            {job.department}
                                                        </span>
                                                        <span
                                                            className="text-xs font-medium px-2.5 py-0.5"
                                                            style={{ backgroundColor: 'rgba(94,125,154,0.08)', color: '#5e7d9a', border: '1px solid rgba(94,125,154,0.2)' }}
                                                        >
                                                            {job.type}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-black mb-2" style={{ color: '#080808' }}>{job.title}</h3>
                                                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs mb-3" style={{ color: '#5e7d9a' }}>
                                                        <span className="flex items-center gap-1.5">
                                                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            </svg>
                                                            {job.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            Tutup: {job.deadline}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm leading-relaxed" style={{ color: '#5e7d9a' }}>{job.summary}</p>
                                                </div>

                                                {/* Toggle */}
                                                <button
                                                    onClick={() => setExpandedId(isOpen ? null : job.id)}
                                                    className="flex-shrink-0 self-start flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
                                                    style={{
                                                        backgroundColor: isOpen ? '#135b97' : 'transparent',
                                                        color: isOpen ? '#f2f3f3' : '#135b97',
                                                        border: `1.5px solid ${isOpen ? '#135b97' : '#135b97'}`,
                                                    }}
                                                >
                                                    {isOpen ? 'Tutup' : 'Detail'}
                                                    <svg
                                                        className="w-3.5 h-3.5"
                                                        style={{ transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expanded detail */}
                                        {isOpen && (
                                            <div
                                                className="border-t px-6 lg:px-8 pb-8 pt-6"
                                                style={{ borderColor: '#bec0c1', backgroundColor: '#fff' }}
                                            >
                                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                    {/* Responsibilities */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-4 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                                            <h4 className="text-xs font-black uppercase tracking-widest" style={{ color: '#135b97' }}>Tanggung Jawab</h4>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {job.responsibilities.map((r, i) => (
                                                                <li key={r} className="flex items-start gap-3 text-sm" style={{ color: '#5e7d9a' }}>
                                                                    <div
                                                                        className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-xs font-black mt-0.5"
                                                                        style={{ backgroundColor: 'rgba(19,91,151,0.1)', color: '#135b97' }}
                                                                    >
                                                                        {i + 1}
                                                                    </div>
                                                                    {r}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Requirements */}
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <div className="w-4 h-0.5" style={{ backgroundColor: '#f59e0b' }} />
                                                            <h4 className="text-xs font-black uppercase tracking-widest" style={{ color: '#b45309' }}>Kualifikasi</h4>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {job.requirements.map((r) => (
                                                                <li key={r} className="flex items-start gap-3 text-sm" style={{ color: '#5e7d9a' }}>
                                                                    <div className="w-1 h-1 flex-shrink-0 mt-2" style={{ backgroundColor: '#f59e0b' }} />
                                                                    {r}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Benefits + CTA */}
                                                <div
                                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 border-t"
                                                    style={{ borderColor: '#f2f3f3' }}
                                                >
                                                    <div>
                                                        <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#5e7d9a' }}>Yang Kami Tawarkan</div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {job.benefits.map((b) => (
                                                                <span
                                                                    key={b}
                                                                    className="text-xs px-3 py-1 font-medium"
                                                                    style={{ backgroundColor: 'rgba(19,91,151,0.06)', color: '#135b97', border: '1px solid rgba(19,91,151,0.15)' }}
                                                                >
                                                                    {b}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={`mailto:Muara.karya@gmail.com?subject=Lamaran: ${job.title}&body=Halo Tim HRD CV. Muara Karya,%0A%0ASaya tertarik untuk melamar posisi ${job.title}.%0A%0ATerlampir CV saya.%0A%0ATerima kasih.`}
                                                        className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                                                        style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
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

                {/* ══════════════════════════════════════════
                    CTA BAWAH
                ══════════════════════════════════════════ */}
                <section className="pb-16 lg:pb-24" ref={ctaRef}>
                    <div className="max-w-5xl mx-auto px-4 lg:px-12">
                        <div
                            className="grid lg:grid-cols-2 gap-px transition-all duration-700"
                            style={{
                                backgroundColor: '#bec0c1',
                                opacity: ctaIn ? 1 : 0,
                                transform: ctaIn ? 'translateY(0)' : 'translateY(20px)',
                            }}
                        >
                            {/* Tidak ada posisi sesuai */}
                            <div className="p-8 lg:p-10" style={{ backgroundColor: '#080808' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#135b97' }}>Open Application</span>
                                </div>
                                <h3 className="font-black text-xl mb-3" style={{ color: '#f2f3f3' }}>
                                    TIDAK ADA POSISI<br />YANG SESUAI?
                                </h3>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: '#5e7d9a' }}>
                                    Kirimkan CV dan portofolio Anda ke kami. Kami akan menyimpan profil Anda dan
                                    menghubungi jika ada posisi yang relevan di masa mendatang.
                                </p>
                                <a
                                    href="mailto:Muara.karya@gmail.com?subject=Open Application — CV Terbuka&body=Halo Tim HRD CV. Muara Karya,%0A%0ASaya ingin mengirimkan CV terbuka dan berharap dapat bergabung jika ada posisi yang sesuai.%0A%0ATerlampir CV saya.%0A%0ATerima kasih."
                                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                                    style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Kirim CV Terbuka
                                </a>
                            </div>

                            {/* Kontak HRD */}
                            <div className="p-8 lg:p-10" style={{ backgroundColor: '#135b97' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-0.5" style={{ backgroundColor: 'rgba(242,243,243,0.4)' }} />
                                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(242,243,243,0.7)' }}>Hubungi HRD</span>
                                </div>
                                <h3 className="font-black text-xl mb-3" style={{ color: '#f2f3f3' }}>
                                    ADA PERTANYAAN<br />SEPUTAR KARIR?
                                </h3>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(242,243,243,0.7)' }}>
                                    Tim HRD kami siap menjawab pertanyaan Anda seputar posisi, proses seleksi,
                                    dan budaya kerja di CV. Muara Karya.
                                </p>
                                <div className="space-y-3">
                                    <a
                                        href="mailto:Muara.karya@gmail.com"
                                        className="flex items-center gap-3 text-sm font-medium transition-all hover:opacity-80"
                                        style={{ color: '#f2f3f3' }}
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(242,243,243,0.15)' }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        Muara.karya@gmail.com
                                    </a>
                                    <a
                                        href="https://wa.me/6281221107273"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm font-medium transition-all hover:opacity-80"
                                        style={{ color: '#f2f3f3' }}
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(242,243,243,0.15)' }}>
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                        </div>
                                        +62 812-2110-7273
                                    </a>
                                </div>
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