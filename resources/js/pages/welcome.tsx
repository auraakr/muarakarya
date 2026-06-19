import React, { useState, useEffect, useRef } from 'react';
import { Head } from '@inertiajs/react';
import CompanyNavbar from '@/components/company-navbar';
import CompanyFooter from '@/components/company-footer';

interface Faq { id: number; question: string; answer: string; }
interface Service { id: number; title: string; description: string; items: string[]; color: string; }

/* ── Palette ─────────────────────────────────────────── */
// #f2f3f3  light bg
// #080808  near-black text
// #135b97  primary blue
// #bec0c1  muted border / label
// #5e7d9a  secondary blue

/* ── Animated counter hook ───────────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [start, target, duration]);
    return count;
}

/* ── Intersection observer hook ─────────────────────── */
function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

/* ── Stat item ───────────────────────────────────────── */
function StatItem({ value, suffix, label, sub, inView }: { value: number; suffix: string; label: string; sub: string; inView: boolean }) {
    const count = useCounter(value, 1800, inView);
    return (
        <div className="flex flex-col gap-1">
            <span className="text-4xl lg:text-5xl font-black text-[#080808] tracking-tight">
                {count}{suffix}
            </span>
            <span className="text-sm font-bold text-[#135b97] uppercase tracking-widest">{label}</span>
            <span className="text-xs text-[#5e7d9a]">{sub}</span>
        </div>
    );
}

const serviceIcons: Record<string, React.ReactElement> = {
    blue: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    cyan: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    green: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
};

const serviceAccent: Record<string, string> = {
    blue: '#135b97',
    cyan: '#5e7d9a',
    green: '#135b97',
};

export default function Welcome({ faqs = [], services = [] }: { faqs: Faq[]; services: Service[] }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { ref: statsRef, inView: statsInView } = useInView();
    const { ref: aboutRef, inView: aboutInView } = useInView(0.1);
    const [heroVisible, setHeroVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <Head title="CV. Muara Karya — Kontraktor HVAC & Refrigerasi" />
            <div className="min-h-screen scroll-smooth" style={{ backgroundColor: '#f2f3f3', color: '#080808' }}>
                <CompanyNavbar />

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section
                    id="beranda"
                    className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
                    style={{ backgroundColor: '#080808' }}
                >
                    {/* Background image with overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="/elementpanjang/8.svg"
                            alt=""
                            className="w-full h-full object-cover opacity-30"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.95) 0%, rgba(19,91,151,0.3) 100%)' }} />
                    </div>

                    {/* Diagonal accent line */}
                    <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10"
                            style={{ background: 'linear-gradient(135deg, transparent 40%, #135b97 40%, #135b97 41%, transparent 41%)' }} />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 lg:px-12 py-20 w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left content */}
                            <div>
                                {/* Eyebrow */}
                                <div
                                    className={`flex items-center gap-3 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                >
                                    <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>
                                        // Kontraktor HVAC & Refrigerasi //
                                    </span>
                                </div>

                                <h1
                                    className={`font-black leading-[0.95] mb-6 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                    style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#f2f3f3' }}
                                >
                                    SOLUSI HVAC{' '}
                                    <span className="block" style={{ color: '#135b97' }}>& REFRIGERASI</span>
                                    <span className="block" style={{ color: '#f2f3f3' }}>TERPERCAYA</span>
                                </h1>

                                <p
                                    className={`text-base leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                    style={{ color: '#bec0c1' }}
                                >
                                    CV. Muara Karya bergerak di bidang Jasa Mecanical & Electrical khususnya mesin Pendingin
                                    dan Tata Udara. Berdiri sejak 2014 dengan pengalaman 10 tahun melayani kebutuhan
                                    residensial dan komersial di seluruh Indonesia.
                                </p>

                                <div
                                    className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                >
                                    <a
                                        href="#layanan"
                                        className="inline-flex items-center gap-3 px-7 py-3.5 font-bold text-sm uppercase tracking-wider transition-all hover:gap-5"
                                        style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                                    >
                                        Lihat Layanan
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://wa.me/6281221107273"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-7 py-3.5 font-bold text-sm uppercase tracking-wider border transition-all hover:bg-white/5"
                                        style={{ borderColor: '#bec0c1', color: '#bec0c1' }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        +62 812-2110-7273
                                    </a>
                                </div>

                                {/* Award badge */}
                                <div
                                    className={`inline-flex items-center gap-3 px-4 py-3 border transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                                    style={{ borderColor: 'rgba(190,192,193,0.2)', backgroundColor: 'rgba(19,91,151,0.1)' }}
                                >
                                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#f59e0b' }}>
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#f2f3f3' }}>Contractor of the Year 2018</div>
                                        <div className="text-xs" style={{ color: '#bec0c1' }}>Penghargaan atas prestasi proyek terbaik</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right — info card stack */}
                            <div
                                className={`hidden lg:flex flex-col gap-4 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                            >
                                {/* Main card */}
                                <div className="p-6 border" style={{ borderColor: 'rgba(190,192,193,0.15)', backgroundColor: 'rgba(242,243,243,0.04)' }}>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#135b97' }}>Layanan Utama</div>
                                    <div className="grid grid-cols-2 gap-3">
                                        {['HVAC & AC', 'Refrigerasi', 'Instalasi Ducting', 'Air Ventilation', 'Heat Pump', 'Preventive Maint.'].map((s) => (
                                            <div key={s} className="flex items-center gap-2 text-sm" style={{ color: '#bec0c1' }}>
                                                <div className="w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: '#135b97' }} />
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Partner badges */}
                                <div className="p-5 border" style={{ borderColor: 'rgba(190,192,193,0.15)', backgroundColor: 'rgba(242,243,243,0.04)' }}>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#135b97' }}>Auto Service Dealer</div>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            { name: 'Daikin', img: '/mitra/resmi/daikin.svg' },
                                            { name: 'Panasonic', img: '/mitra/resmi/panasonic.svg' },
                                            { name: 'Toshiba', img: '/mitra/resmi/toshiba.svg' },
                                            { name: 'Gree', img: '/mitra/resmi/gree.svg' },
                                            { name: 'Carrier', img: '/mitra/resmi/carrier.svg' },
                                            { name: 'Bitzer', img: '/mitra/resmi/bitzer.svg' }
                                        ].map((brand) => (
                                            <div 
                                                key={brand.name} 
                                                className="w-20 h-10 px-2 py-1 flex items-center justify-center border rounded bg-white/5 transition-colors hover:bg-white/10" 
                                                style={{ borderColor: 'rgba(190,192,193,0.2)' }}
                                            >
                                                <img 
                                                    src={brand.img} 
                                                    alt={brand.name} 
                                                    className="max-w-full max-h-full object-contain"
                                                    onError={(e) => {
                                                        // Jika gambar gagal dimuat, tampilkan namanya saja
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                        const span = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                                        if (span) span.style.display = 'block';
                                                    }}
                                                />
                                                <span className="hidden text-[10px] font-bold text-[#f2f3f3] text-center">{brand.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* OSHA badge */}
                                <div className="flex items-center gap-4 p-4 border" style={{ borderColor: 'rgba(19,91,151,0.4)', backgroundColor: 'rgba(19,91,151,0.08)' }}>
                                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 font-black text-sm" style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}>
                                        ✓
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold" style={{ color: '#f2f3f3' }}>OSHA Compliant · Terdaftar HSSE</div>
                                        <div className="text-xs" style={{ color: '#bec0c1' }}>Standar keselamatan kerja internasional</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wave divider */}
                    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform: 'translateY(2px)' }}>
                            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    STATS STRIP
                ══════════════════════════════════════════ */}
                <section ref={statsRef} className="py-16 lg:py-20" style={{ backgroundColor: '#f2f3f3' }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x" style={{ borderColor: '#bec0c1' }}>
                            <div className="lg:px-10 first:pl-0 last:pr-0">
                                <StatItem value={500} suffix="+" label="Proyek Selesai" sub="Residential & Commercial" inView={statsInView} />
                            </div>
                            <div className="lg:px-10">
                                <StatItem value={10} suffix="+" label="Tahun Pengalaman" sub="Sejak 2014" inView={statsInView} />
                            </div>
                            <div className="lg:px-10">
                                <StatItem value={30} suffix="+" label="Tenaga Profesional" sub="Teknisi Berpengalaman" inView={statsInView} />
                            </div>
                            <div className="lg:px-10">
                                <div className="flex flex-col gap-1">
                                    <span className="text-4xl lg:text-5xl font-black tracking-tight" style={{ color: '#080808' }}>24/7</span>
                                    <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#135b97' }}>Customer Service</span>
                                    <span className="text-xs" style={{ color: '#5e7d9a' }}>Reactive Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    TENTANG KAMI
                ══════════════════════════════════════════ */}
                <section id="tentang" ref={aboutRef} className="py-20 lg:py-28" style={{ backgroundColor: '#f2f3f3' }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">

                        {/* Section eyebrow */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Tentang Kami //</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                            <div className={`transition-all duration-700 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <h2 className="font-black leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#080808' }}>
                                    MEMBANGUN KEPERCAYAAN<br />
                                    <span style={{ color: '#135b97' }}>SEJAK 2014</span>
                                </h2>
                                <p className="text-base leading-relaxed mb-6" style={{ color: '#5e7d9a' }}>
                                    Dengan konsep fokus di bidang Pendingin Refrigerasi dan Tata Udara, kami menjadi jawaban
                                    dari kebutuhan akan kualitas dan kecepatan layanan. Berawal dari layanan Service, Maintenance,
                                    dan Design — berkembang sebagai bisnis partner strategis yang sanggup memberikan kepuasan
                                    bagi Personal maupun Corporate Customer.
                                </p>
                                {/* CEO quote */}
                                <div className="p-6 border-l-4 mb-6" style={{ borderColor: '#135b97', backgroundColor: 'rgba(19,91,151,0.04)' }}>
                                    <p className="text-sm italic leading-relaxed mb-4" style={{ color: '#080808' }}>
                                        "Komitmen kami adalah memberikan jasa dan dukungan handal agar dapat menambah jumlah
                                        basis pelanggan dengan standar nilai terbaik & Peningkatan kepuasan pelanggan dengan
                                        memberikan tanggapan yang cepat dan penyediaan tenaga teknik yang memadai."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src="/logo/ceobg.svg"
                                            alt="CEO"
                                            className="w-10 h-10 rounded-full object-cover"
                                            onError={(e) => {
                                                const el = e.target as HTMLImageElement;
                                                el.style.display = 'none';
                                                const next = el.nextElementSibling as HTMLElement;
                                                if (next) next.style.display = 'flex';
                                            }}
                                        />
                                        <div className="w-10 h-10 items-center justify-center font-black text-sm flex-shrink-0"
                                            style={{ backgroundColor: '#135b97', color: '#f2f3f3', display: 'none' }}>
                                            DA
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold" style={{ color: '#080808' }}>Denny Alamsyah Priatna</div>
                                            <div className="text-xs" style={{ color: '#135b97' }}>CEO — CV. Muara Karya</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Misi list */}
                            <div className={`transition-all duration-700 delay-150 ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#135b97' }}>Misi Kami</div>
                                <div className="space-y-0">
                                    {[
                                        { num: '01', text: 'Menerapkan teknologi tepat guna dan selalu melakukan inovasi baru melalui pendekatan kehati-hatian dan ramah lingkungan' },
                                        { num: '02', text: 'Meningkatkan kualitas dan profesionalisme sehingga dapat memberikan pelayanan prima kepada seluruh Customer' },
                                        { num: '03', text: 'Memberikan pelatihan guna memajukan ketrampilan SDM dalam rangka kerjasama operasional perawatan mesin pendingin' },
                                        { num: '04', text: 'Memberikan layanan dengan kecepatan respon, kendali mutu, dan garansi sehingga setiap mitra mendapat pelayanan yang memuaskan' },
                                    ].map((m, i) => (
                                        <div
                                            key={m.num}
                                            className="flex gap-5 py-5 border-b"
                                            style={{ borderColor: '#bec0c1', animationDelay: `${i * 100}ms` }}
                                        >
                                            <span className="text-2xl font-black flex-shrink-0 leading-none" style={{ color: '#bec0c1' }}>{m.num}</span>
                                            <p className="text-sm leading-relaxed pt-1" style={{ color: '#5e7d9a' }}>{m.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* HSSE block */}
                        <div className="p-8 lg:p-12" style={{ backgroundColor: '#080808' }}>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#135b97' }}>Komitmen</span>
                                    </div>
                                    <h3 className="text-2xl font-black" style={{ color: '#f2f3f3' }}>HSSE — Health · Safety · Security · Environment</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { letter: 'H', title: 'Health', desc: 'Menjaga kesehatan seluruh tenaga kerja di lapangan' },
                                    { letter: 'S', title: 'Safety', desc: 'Zero accident menjadi standar utama setiap proyek' },
                                    { letter: 'S', title: 'Security', desc: 'Keamanan aset dan lokasi kerja terjamin penuh' },
                                    { letter: 'E', title: 'Environment', desc: 'Praktik kerja ramah lingkungan dan berkelanjutan' },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="group p-5 border cursor-default transition-all hover:border-[#135b97]"
                                        style={{ borderColor: 'rgba(190,192,193,0.15)' }}
                                    >
                                        <div
                                            className="w-12 h-12 flex items-center justify-center mb-4 font-black text-xl transition-colors"
                                            style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                                        >
                                            {item.letter}
                                        </div>
                                        <h4 className="font-bold mb-2" style={{ color: '#f2f3f3' }}>{item.title}</h4>
                                        <p className="text-xs leading-relaxed" style={{ color: '#bec0c1' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    LAYANAN
                ══════════════════════════════════════════ */}
                <section id="layanan" className="relative pt-32 pb-28" style={{ backgroundColor: '#080808' }}>
                    {/* Top wave */}
                    <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
                        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform: 'translateY(-2px)' }}>
                            <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Layanan Kami //</span>
                                </div>
                                <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f2f3f3' }}>
                                    SOLUSI LENGKAP<br />HVAC & REFRIGERASI
                                </h2>
                            </div>
                            <a
                                href="#tentang"
                                className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider border transition-all hover:bg-white/5"
                                style={{ borderColor: '#135b97', color: '#135b97' }}
                            >
                                Selengkapnya
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(190,192,193,0.1)' }}>
                            {services.map((service) => {
                                const accent = serviceAccent[service.color] ?? '#135b97';
                                return (
                                    <div
                                        key={service.id}
                                        className="group p-8 transition-all cursor-default"
                                        style={{ backgroundColor: '#080808' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'rgba(19,91,151,0.08)'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#080808'; }}
                                    >
                                        <div
                                            className="w-14 h-14 flex items-center justify-center mb-6 transition-colors"
                                            style={{ backgroundColor: 'rgba(19,91,151,0.15)', color: accent }}
                                        >
                                            {serviceIcons[service.color] ?? serviceIcons.blue}
                                        </div>
                                        <h3 className="text-lg font-black mb-3" style={{ color: '#f2f3f3' }}>{service.title}</h3>
                                        <p className="text-sm leading-relaxed mb-5" style={{ color: '#bec0c1' }}>{service.description}</p>
                                        <ul className="space-y-2 mb-6">
                                            {service.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2.5 text-xs" style={{ color: '#5e7d9a' }}>
                                                    <div className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: accent }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div
                                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-3"
                                            style={{ color: accent }}
                                        >
                                            Pelajari
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Schedule hours card */}
                        <div className="mt-px grid lg:grid-cols-2" style={{ backgroundColor: 'rgba(190,192,193,0.1)' }}>
                            {/* Square image — never cropped */}
                            <div className="overflow-hidden" style={{ backgroundColor: '#080808' }}>
                                <div className="aspect-square w-full relative">
                                    <img
                                        src="/logo/faq.svg"
                                        alt="Tim Muara Karya"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        onError={(e) => {
                                            const el = e.target as HTMLImageElement;
                                            el.style.display = 'none';
                                            const next = el.nextElementSibling as HTMLElement;
                                            if (next) next.style.display = 'flex';
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 items-center justify-center" style={{ backgroundColor: 'rgba(19,91,151,0.1)' }}>
                                        <span className="text-6xl font-black" style={{ color: 'rgba(19,91,151,0.3)' }}>MK</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 lg:p-10" style={{ backgroundColor: '#0d0d0d' }}>
                                <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: '#135b97' }}>Jam Operasional</div>
                                <h3 className="text-xl font-black mb-2" style={{ color: '#f2f3f3' }}>Hubungi Kami Kapan Saja</h3>
                                <p className="text-sm mb-8" style={{ color: '#bec0c1' }}>
                                    Layanan 24/7 untuk kedaruratan. Konsultasi awal gratis.
                                </p>
                                <div className="space-y-3 mb-8">
                                    {[
                                        { day: 'Senin – Jumat', hours: '08:00 – 17:00' },
                                        { day: 'Sabtu', hours: '08:00 – 15:00' },
                                        { day: 'Darurat / On-call', hours: '24/7' },
                                    ].map((row) => (
                                        <div key={row.day} className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(190,192,193,0.1)' }}>
                                            <span className="text-sm" style={{ color: '#bec0c1' }}>{row.day}</span>
                                            <span className="text-sm font-bold" style={{ color: row.hours === '24/7' ? '#135b97' : '#f2f3f3' }}>{row.hours}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="https://wa.me/6281221107273"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90"
                                    style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                                >
                                    Hubungi Sekarang
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom wave */}
                    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
                        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ transform: 'translateY(2px)' }}>
                            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f2f3f3"/>
                        </svg>
                    </div>
                </section>


                {/* ══════════════════════════════════════════
                    PROYEK UNGGULAN
                ══════════════════════════════════════════ */}
                <section id="proyek" className="py-20 lg:py-28" style={{ backgroundColor: '#f2f3f3' }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// Proyek Kami //</span>
                                </div>
                                <h2 className="font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#080808' }}>
                                    PROYEK UNGGULAN<br />
                                    <span style={{ color: '#135b97' }}>YANG TELAH KAMI KERJAKAN</span>
                                </h2>
                            </div>
                            <a
                                href="/client"
                                className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider border transition-all"
                                style={{ borderColor: '#135b97', color: '#135b97' }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(19,91,151,0.05)'; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; }}
                            >
                                Semua Klien
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </a>
                        </div>

                        {/* Project grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: '#bec0c1' }}>
                            {[
                                {
                                    img: '/element3/1.svg',
                                    title: 'Preventive Maintenance HVAC AHU Amazon KIC',
                                    client: 'PT. Sumber Daya Sewatama',
                                    tags: ['Preventive Maintenance', 'HVAC AHU'],
                                },
                                {
                                    img: '/element3/10.svg',
                                    title: 'Instalasi VRF 20 PK PT. Pertambangan Nusantara',
                                    client: 'PT. Kangean Energy Indonesia',
                                    tags: ['Instalasi VRF', 'Komersial'],
                                },
                                {
                                    img: '/element3/5.svg',
                                    title: 'Kontrak PM Air Conditioning Server Biznet',
                                    client: 'Biznet',
                                    tags: ['PM Server AC', 'Reaktive Maintenance'],
                                },
                                {
                                    img: '/element3/2.svg',
                                    title: 'PM MEP Equipment SHELL Station Gas Jabotabek',
                                    client: 'CBRE / Sewatama',
                                    tags: ['MEP Equipment', 'Jabotabek'],
                                },
                                {
                                    img: '/element3/8.svg',
                                    title: 'PM Air Conditioning Mini Market Jawa Barat',
                                    client: 'Alfamidi (PT. Midi Utama Indonesia)',
                                    tags: ['Preventive Maintenance', 'Retail'],
                                },
                                {
                                    img: '/element3/3.svg',
                                    title: 'PM Utility Equipment British Petroleum (AKR) Java',
                                    client: 'AKR / Sewatama',
                                    tags: ['Utility Equipment', 'Industrial'],
                                },
                            ].map((proj, i) => (
                                <div
                                    key={i}
                                    className="group relative overflow-hidden cursor-default"
                                    style={{ backgroundColor: '#f2f3f3' }}
                                >
                                    {/* Square image */}
                                    <div className="aspect-square w-full relative overflow-hidden">
                                        <img
                                            src={proj.img}
                                            alt={proj.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            onError={(e) => {
                                                const el = e.target as HTMLImageElement;
                                                el.style.display = 'none';
                                                const fb = el.nextElementSibling as HTMLElement;
                                                if (fb) fb.style.display = 'flex';
                                            }}
                                        />
                                        {/* Fallback placeholder */}
                                        <div
                                            className="hidden absolute inset-0 items-center justify-center flex-col gap-2"
                                            style={{ backgroundColor: 'rgba(19,91,151,0.08)' }}
                                        >
                                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#bec0c1' }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-xs font-medium" style={{ color: '#bec0c1' }}>Foto segera hadir</span>
                                        </div>
                                        {/* Overlay gradient on hover */}
                                        <div
                                            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                            style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 60%)' }}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 border-t" style={{ borderColor: '#bec0c1', backgroundColor: '#f2f3f3' }}>
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {proj.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider"
                                                    style={{ backgroundColor: 'rgba(19,91,151,0.08)', color: '#135b97', border: '1px solid rgba(19,91,151,0.15)' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-sm font-black leading-snug mb-1" style={{ color: '#080808' }}>{proj.title}</h3>
                                        <p className="text-xs" style={{ color: '#5e7d9a' }}>{proj.client}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════ */}
                <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: '#f2f3f3' }}>
                    <div className="max-w-7xl mx-auto px-4 lg:px-12">

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                            {/* Left */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    <span className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#135b97' }}>// FAQ //</span>
                                </div>
                                <h2 className="font-black leading-tight mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#080808' }}>
                                    PERTANYAAN YANG<br />SERING DIAJUKAN
                                </h2>
                                <p className="text-sm leading-relaxed mb-8" style={{ color: '#5e7d9a' }}>
                                    Temukan jawaban atas pertanyaan umum seputar layanan kami. Butuh info lebih? Tim kami siap membantu.
                                </p>

                                {/* CTA card */}
                                <div className="relative overflow-hidden p-6 lg:p-8" style={{ backgroundColor: '#135b97' }}>
                                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: '#f2f3f3' }} />
                                    <img
                                        src="/elementpanjang/6.svg"
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
                                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                    />
                                    <div className="relative">
                                        <p className="font-bold text-lg mb-2" style={{ color: '#f2f3f3' }}>Ada pertanyaan tentang proyek Anda?</p>
                                        <p className="text-sm mb-6" style={{ color: 'rgba(242,243,243,0.7)' }}>Tim kami siap membantu — konsultasi awal gratis.</p>
                                        <a
                                            href="https://wa.me/6281221107273"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all hover:opacity-90"
                                            style={{ backgroundColor: '#f2f3f3', color: '#135b97' }}
                                        >
                                            Chat WhatsApp
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right — accordion */}
                            <div>
                                <div className="divide-y" style={{ borderColor: '#bec0c1' }}>
                                    {faqs.map((item, i) => (
                                        <div key={i} className="border-t first:border-t-0" style={{ borderColor: '#bec0c1' }}>
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                                            >
                                                <span
                                                    className="font-semibold text-sm leading-snug transition-colors group-hover:text-[#135b97]"
                                                    style={{ color: openFaq === i ? '#135b97' : '#080808' }}
                                                >
                                                    {item.question}
                                                </span>
                                                <div
                                                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center transition-all"
                                                    style={{
                                                        backgroundColor: openFaq === i ? '#135b97' : 'transparent',
                                                        border: `1.5px solid ${openFaq === i ? '#135b97' : '#bec0c1'}`,
                                                        color: openFaq === i ? '#f2f3f3' : '#080808',
                                                        transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                                                    }}
                                                >
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                            </button>
                                            {openFaq === i && (
                                                <div className="pb-5">
                                                    <p className="text-sm leading-relaxed" style={{ color: '#5e7d9a' }}>{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
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