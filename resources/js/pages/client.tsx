import React, { useRef, useState, useEffect } from 'react';
import { Head, usePage } from '@inertiajs/react';
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

const clientLogos = [
    { name: 'The Trans Luxury Hotel', src: '/mitra/client/thetrans.svg' },
    { name: 'CRP Group', src: '/mitra/client/crp.svg' },
    { name: 'Richeese Factory', src: '/mitra/client/richeese.svg' },
    { name: 'President University', src: '/mitra/client/presidentuniv.svg' },
    { name: 'CBRE', src: '/mitra/client/cbre.svg' },
    { name: 'Sari Ater Hot Springs', src: '/mitra/client/sariater.svg' },
    { name: 'Prodia', src: '/mitra/client/prodia.svg' },
    { name: 'Taka Turbo', src: '/mitra/client/taka.svg' },
    { name: 'Shell', src: '/mitra/client/shell.svg' },
    { name: 'Bank Mega', src: '/mitra/client/bankmega.svg' },
    { name: 'Saka Bistro & Bar', src: '/mitra/client/saka.svg' },
    { name: 'Bank Banten', src: '/mitra/client/bankbanten.svg' },
    { name: 'AKR (British Petroleum Java)', src: '/mitra/client/akr.svg' },
    { name: 'Biznet', src: '/mitra/client/biznet.svg' },
    { name: 'PT. Sumber Daya Sewatama', src: '/mitra/client/sewatama.svg' },
    { name: 'Alfamidi', src: '/mitra/client/alfamidi.svg' },
    { name: 'PT. Pertambangan Nusantara', src: '/mitra/client/ptpn.svg' },
];

const partnerLogos = [
    { name: 'GREE', src: '/mitra/resmi/gree.svg' },
    { name: 'DAIKIN', src: '/mitra/resmi/daikin.svg' },
    { name: 'TOSHIBA', src: '/mitra/resmi/toshiba.svg' },
    { name: 'Panasonic', src: '/mitra/resmi/panasonic.svg' },
    { name: 'Carrier', src: '/mitra/resmi/carrier.svg' },
    { name: 'Bitzer', src: '/mitra/resmi/bitzer.svg' },
];

const projects = [
    {
        client: 'PT. Sumber Daya Sewatama (CBRE)',
        items: [
            'Preventive Maintenance Utility Equipment British Petroleum (AKR) Java',
            'Preventive Maintenance Air Conditioning Standart Charter Bank Java',
            'Preventive Maintenance MEP Equipment SHELL Station Gas Jabotabek',
            'Instalasi HVAC AHU Amazon KIC',
        ],
    },
    {
        client: 'Biznet',
        items: [
            'Kontrak Preventive Maintenance Air Conditioning Server',
            'Repair & Instalasi Unit Baru, Relokasi',
            'Reaktive Maintenance',
        ],
    },
    {
        client: 'Alfamidi (PT. Midi Utama Indonesia)',
        items: [
            'Kontrak Preventive Maintenance Air Conditioning Mini Market Jawa Barat',
            'Repair & Instalasi Unit, Relokasi',
            'Reaktive Maintenance',
        ],
    },
    {
        client: 'PT. Pertambangan Nusantara',
        items: [
            'Pengadaan Unit VRF 20 PK',
            'Instalasi & Pemasangan Unit VRF PT. Kangean Energy Indonesia',
            'Kontrak Preventive Maintenance VRF Server PT. Kangean Energy Indonesia, Kuningan Jakarta',
        ],
    },
];

export default function ClientsAndPartners() {
    const { ref: heroRef, inView: heroIn } = useInView(0.1);
    const { ref: clientRef, inView: clientIn } = useInView(0.1);
    const { ref: partnerRef, inView: partnerIn } = useInView(0.1);
    const { ref: projectRef, inView: projectIn } = useInView(0.1);
    const [activeProject, setActiveProject] = useState(0);

    return (
        <>
            <Head title="Klien & Mitra — CV. Muara Karya" />
            <div className="min-h-screen scroll-smooth" style={{ backgroundColor: '#f2f3f3', color: '#080808' }}>
                <CompanyNavbar />

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section
                    className="relative pt-16 pb-0 overflow-hidden"
                    style={{ backgroundColor: '#080808', minHeight: '340px' }}
                    ref={heroRef}
                >
                    <div className="absolute inset-0 pointer-events-none">
                        {/* --- TAMBAHAN GAMBAR BACKGROUND DI SINI --- */}
                        <img
                            src="/elementpanjang/8.svg" /* Nanti ganti dengan file fotomu ya */
                            alt="Hero Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        {/* Gradasi gelap dari kiri ke kanan agar teks tetap terbaca */}
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.2) 100%)' }} />

                        {/* Hiasan cahaya biru bawaan */}
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#135b97', transform: 'translate(30%, -30%)' }} />
                        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#135b97', transform: 'translate(-30%, 30%)' }} />
                        
                        {/* dot grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(242,243,243,0.4) 1px, transparent 1px)',
                            backgroundSize: '28px 28px',
                        }} />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 lg:px-12 pt-16 pb-20">
                        <div
                            className="transition-all duration-700"
                            style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? 'translateY(0)' : 'translateY(24px)' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>
                                    // Jaringan Kami //
                                </span>
                            </div>
                            <h1 className="font-black leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f2f3f3' }}>
                                KLIEN &{' '}
                                <span style={{ color: '#135b97' }}>MITRA RESMI</span>
                            </h1>
                            <p className="text-base max-w-xl" style={{ color: '#bec0c1' }}>
                                CV. Muara Karya dipercaya oleh berbagai institusi terkemuka dan bermitra
                                dengan produsen HVAC kelas dunia sejak 2014.
                            </p>
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
                    KLIEN GRID
                ══════════════════════════════════════════ */}
                <section className="py-16 lg:py-24" style={{ backgroundColor: '#f2f3f3' }} ref={clientRef}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Klien Kami //</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
                            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#080808' }}>
                                DIPERCAYA OLEH<br />PERUSAHAAN TERKEMUKA
                            </h2>
                            <p className="text-sm max-w-sm" style={{ color: '#5e7d9a' }}>
                                17 klien korporat & institusi dari berbagai sektor industri di Indonesia.
                            </p>
                        </div>

                        {/* Client logo grid */}
                        <div
                            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-px"
                            style={{ backgroundColor: '#bec0c1', transition: 'opacity 0.7s', opacity: clientIn ? 1 : 0 }}
                        >
                            {clientLogos.map((c, i) => (
                                <div
                                    key={c.name}
                                    className="group flex flex-col items-center justify-center gap-2 p-5 transition-all duration-300 cursor-default"
                                    style={{
                                        backgroundColor: '#f2f3f3',
                                        transitionDelay: `${i * 30}ms`,
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fff'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#f2f3f3'; }}
                                >
                                    <img
                                        src={c.src}
                                        alt={c.name}
                                        // Hapus style abu-abu, tambahkan efek zoom (group-hover:scale-110)
                                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            const el = e.target as HTMLImageElement;
                                            el.style.display = 'none';
                                            const fb = el.nextElementSibling as HTMLElement;
                                            if (fb) fb.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback */}
                                    <div
                                        className="h-8 w-full items-center justify-center text-xs font-black"
                                        style={{ display: 'none', color: '#bec0c1' }}
                                    >
                                        {c.name.slice(0, 4).toUpperCase()}
                                    </div>
                                    <span className="text-[10px] font-medium text-center leading-tight transition-colors duration-300"
                                        style={{ color: '#5e7d9a' }}>
                                        {c.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    PARTNER BRANDS — dark section
                ══════════════════════════════════════════ */}
                <section className="py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#080808' }} ref={partnerRef}>
                    {/* top wave */}
                    <div className="-mt-24 overflow-hidden leading-none">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
                            <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Mitra Resmi //</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
                            <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#f2f3f3' }}>
                                AUTO SERVICE DEALER<br />
                                <span style={{ color: '#135b97' }}>BRAND TERKEMUKA</span>
                            </h2>
                            <p className="text-sm max-w-sm" style={{ color: '#5e7d9a' }}>
                                Kami mengikuti perkembangan teknologi setiap brand dan bekerja sama dalam Kontrak Aftersales.
                            </p>
                        </div>

                        <div
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
                            style={{
                                backgroundColor: 'rgba(190,192,193,0.1)',
                                opacity: partnerIn ? 1 : 0,
                                transition: 'opacity 0.7s',
                            }}
                        >
                            {partnerLogos.map((p, i) => (
                                <div
                                    key={p.name}
                                    className="flex flex-col items-center justify-center gap-3 p-8 transition-all duration-300 cursor-default group"
                                    style={{
                                        backgroundColor: '#080808',
                                        transitionDelay: `${i * 60}ms`,
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(19,91,151,0.08)'; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#080808'; }}
                                >
                                    <img
                                        src={p.src}
                                        alt={p.name}
                                        // Hapus filter abu-abu, tambahkan efek group-hover:scale-110
                                        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            const el = e.target as HTMLImageElement;
                                            el.style.display = 'none';
                                            const fb = el.nextElementSibling as HTMLElement;
                                            if (fb) fb.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback */}
                                    <div
                                        className="h-10 w-full items-center justify-center text-lg font-black"
                                        style={{ display: 'none', color: '#5e7d9a' }}
                                    >
                                        {p.name}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest transition-colors duration-300" style={{ color: '#5e7d9a' }}>
                                        {p.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                        {/* Keterangan partner */}
                        <div className="mt-px grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(190,192,193,0.1)' }}>
                            {[
                                { 
                                    icon: <svg className="w-8 h-8 text-[#135b97]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, 
                                    title: 'Kualitas Mutu', 
                                    desc: 'Menjaga efisiensi kinerja mesin pendingin agar tetap stabil dan tahan lama.' 
                                },
                                { 
                                    icon: <svg className="w-8 h-8 text-[#135b97]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, 
                                    title: 'Analisa Actual', 
                                    desc: 'Target analisa yang mengadopsi pencarian penyebab kerusakan atau sumber masalah.' 
                                },
                                { 
                                    icon: <svg className="w-8 h-8 text-[#135b97]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, 
                                    title: 'Terdaftar HSSE', 
                                    desc: 'Safety terdaftar HSSE — standar keselamatan kerja internasional.' 
                                },
                            ].map((item) => (
                                <div key={item.title} className="p-7 transition-all" style={{ backgroundColor: '#080808' }}>
                                    {/* Memanggil ikon SVG di sini */}
                                    <div className="mb-4">{item.icon}</div>
                                    <div className="text-sm font-black mb-2" style={{ color: '#f2f3f3' }}>{item.title}</div>
                                    <div className="text-xs leading-relaxed" style={{ color: '#5e7d9a' }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>

                    {/* bottom wave */}
                    <div className="overflow-hidden leading-none mt-16">
                        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
                            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    PROYEK UNGGULAN — tab layout
                ══════════════════════════════════════════ */}
                <section className="py-16 lg:py-24" style={{ backgroundColor: '#f2f3f3' }} ref={projectRef}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Proyek Unggulan //</span>
                        </div>
                        <h2 className="font-black leading-tight mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#080808' }}>
                            PORTOFOLIO<br />PEKERJAAN KAMI
                        </h2>

                        <div
                            className="grid lg:grid-cols-3 gap-px"
                            style={{
                                backgroundColor: '#bec0c1',
                                opacity: projectIn ? 1 : 0,
                                transition: 'opacity 0.7s',
                            }}
                        >
                            {/* Tab list */}
                            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible" style={{ backgroundColor: '#080808' }}>
                                {projects.map((proj, i) => (
                                    <button
                                        key={proj.client}
                                        onClick={() => setActiveProject(i)}
                                        className="flex-shrink-0 lg:flex-shrink text-left px-6 py-5 border-b transition-all"
                                        style={{
                                            borderColor: 'rgba(190,192,193,0.1)',
                                            backgroundColor: activeProject === i ? 'rgba(19,91,151,0.12)' : 'transparent',
                                            borderLeft: activeProject === i ? '3px solid #135b97' : '3px solid transparent',
                                        }}
                                    >
                                        <div className="text-xs font-black uppercase tracking-wide" style={{ color: activeProject === i ? '#135b97' : '#5e7d9a' }}>
                                            {`0${i + 1}`}
                                        </div>
                                        <div className="text-sm font-semibold mt-1 leading-snug" style={{ color: activeProject === i ? '#f2f3f3' : '#bec0c1' }}>
                                            {proj.client}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Detail panel */}
                            <div className="lg:col-span-2 p-8 lg:p-10" style={{ backgroundColor: '#f2f3f3' }}>
                                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#135b97' }}>
                                    {`0${activeProject + 1} — ${projects[activeProject].client}`}
                                </div>
                                <h3 className="text-lg font-black mb-6" style={{ color: '#080808' }}>Lingkup Pekerjaan</h3>
                                <ul className="space-y-4">
                                    {projects[activeProject].items.map((item, i) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-4"
                                            style={{
                                                opacity: projectIn ? 1 : 0,
                                                transition: `opacity 0.4s ${i * 80}ms`,
                                            }}
                                        >
                                            <div
                                                className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-xs font-black mt-0.5"
                                                style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                                            >
                                                {i + 1}
                                            </div>
                                            <p className="text-sm leading-relaxed pt-1" style={{ color: '#5e7d9a' }}>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    BANNER BAWAH
                ══════════════════════════════════════════ */}
                <section className="pb-16 lg:pb-24" style={{ backgroundColor: '#f2f3f3' }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">
                        <div
                            className="relative overflow-hidden p-10 lg:p-14"
                            style={{ backgroundColor: '#135b97' }}
                        >
                            {/* bg accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: '#f2f3f3' }} />
                            <div className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: '#080808' }} />

                            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-6 h-0.5" style={{ backgroundColor: 'rgba(242,243,243,0.4)' }} />
                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(242,243,243,0.7)' }}>Dukungan Teknis</span>
                                    </div>
                                    <h3 className="font-black leading-tight mb-3" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#f2f3f3' }}>
                                        LAYANAN PURNA JUAL<br />TERPERCAYA
                                    </h3>
                                    <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(242,243,243,0.75)' }}>
                                        Sebagai Auto Service Dealer Gree, Daikin, Toshiba, Panasonic, Carrier, dan Bitzer —
                                        kami menyediakan layanan purna jual dan dukungan teknis yang dapat diandalkan
                                        untuk memastikan efisiensi kerja mesin tetap stabil dan tahan lama.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                    <a
                                        href="https://wa.me/6287778440548"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                                        style={{ backgroundColor: '#f2f3f3', color: '#135b97' }}
                                    >
                                        Hubungi Kami
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:Muara.karya@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider border transition-all hover:bg-white/10"
                                        style={{ borderColor: 'rgba(242,243,243,0.3)', color: '#f2f3f3' }}
                                    >
                                        Email Kami
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

ClientsAndPartners.layout = (page: React.ReactNode) => <>{page}</>;