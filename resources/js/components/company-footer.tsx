import { Link } from '@inertiajs/react';

const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/#tentang', label: 'Tentang Kami' },
    { href: '/#layanan', label: 'Layanan' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/client', label: 'Mitra' },
    { href: '/karir', label: 'Karir' },
];

const services = [
    'Instalasi AC Residential & Commercial',
    'Pengadaan Unit & Komponen HVAC',
    'Instalasi & Fabrikasi Ducting',
    'Air Ventilation System',
    'Preventive Maintenance',
    'Reactive Maintenance 24/7',
];

export default function CompanyFooter() {
    return (
        <footer style={{ backgroundColor: '#080808', color: '#bec0c1' }}>

            {/* ── CTA Banner ── */}
            <div style={{ backgroundColor: '#135b97' }}>
                <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-6 h-0.5" style={{ backgroundColor: 'rgba(242,243,243,0.4)' }} />
                                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(242,243,243,0.7)' }}>
                                    Mulai Proyek Anda
                                </span>
                            </div>
                            <h3 className="font-black leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#f2f3f3' }}>
                                DAPATKAN KONSULTASI<br />GRATIS SEKARANG
                            </h3>
                            <p className="mt-2 text-sm" style={{ color: 'rgba(242,243,243,0.7)' }}>
                                Tim teknisi berpengalaman kami siap membantu kebutuhan HVAC & Refrigerasi Anda.
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
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                Chat WhatsApp
                            </a>
                            <a
                                href="tel:+6287778440548"
                                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider border transition-all hover:bg-white/10"
                                style={{ borderColor: 'rgba(242,243,243,0.3)', color: '#f2f3f3' }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +62 877-7844-0548
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main Footer ── */}
            <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Col 1 — Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-5">
                            <img
                                src="/logo/logomk.svg"
                                alt="Logo CV. Muara Karya"
                                className="h-9 w-auto object-contain"
                                onError={(e) => {
                                    const el = e.target as HTMLImageElement;
                                    el.style.display = 'none';
                                    const next = el.nextElementSibling as HTMLElement;
                                    if (next) next.style.display = 'flex';
                                }}
                            />
                            <div
                                className="w-9 h-9 items-center justify-center font-black text-sm flex-shrink-0"
                                style={{ backgroundColor: '#135b97', color: '#f2f3f3', display: 'none' }}
                            >
                                MK
                            </div>
                            <div className="leading-tight">
                                <div className="font-black text-sm tracking-wide" style={{ color: '#f2f3f3' }}>CV. Muara Karya</div>
                                <div className="text-xs font-medium" style={{ color: '#135b97' }}>HVAC & Refrigerasi</div>
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed mb-6" style={{ color: '#5e7d9a' }}>
                            Kontraktor HVAC & Refrigerasi terpercaya sejak 2014. Melayani instalasi,
                            pengadaan, dan perawatan sistem pendingin untuk hunian dan komersial
                            di seluruh Indonesia.
                        </p>

                        {/* Jam operasional singkat */}
                        <div className="space-y-1.5 mb-6">
                            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#135b97' }}>Jam Operasional</div>
                            {[
                                { day: 'Sen – Jum', hours: '08:00 – 17:00' },
                                { day: 'Sabtu', hours: '08:00 – 15:00' },
                                { day: 'Darurat', hours: '24/7' },
                            ].map((row) => (
                                <div key={row.day} className="flex justify-between text-xs" style={{ color: '#5e7d9a' }}>
                                    <span>{row.day}</span>
                                    <span className="font-semibold" style={{ color: row.hours === '24/7' ? '#135b97' : '#bec0c1' }}>{row.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b" style={{ color: '#f2f3f3', borderColor: 'rgba(190,192,193,0.1)' }}>
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2.5 text-sm transition-all group"
                                        style={{ color: '#5e7d9a' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#135b97'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#5e7d9a'; }}
                                    >
                                        <svg className="w-3 h-3 flex-shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Services */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b" style={{ color: '#f2f3f3', borderColor: 'rgba(190,192,193,0.1)' }}>
                            Layanan
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s} className="flex items-start gap-2.5 text-sm" style={{ color: '#5e7d9a' }}>
                                    <div className="w-1 h-1 flex-shrink-0 mt-2" style={{ backgroundColor: '#135b97' }} />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b" style={{ color: '#f2f3f3', borderColor: 'rgba(190,192,193,0.1)' }}>
                            Kontak
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: 'rgba(19,91,151,0.15)' }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#135b97' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#5e7d9a' }}>Email</p>
                                    <a
                                        href="mailto:Muara.karya@gmail.com"
                                        className="text-sm transition-colors"
                                        style={{ color: '#bec0c1' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#135b97'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#bec0c1'; }}
                                    >
                                        Muara.karya@gmail.com
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: 'rgba(19,91,151,0.15)' }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#135b97' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#5e7d9a' }}>Telepon / WhatsApp</p>
                                    <a
                                        href="tel:+6287778440548"
                                        className="text-sm transition-colors"
                                        style={{ color: '#bec0c1' }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#135b97'; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#bec0c1'; }}
                                    >
                                        +62 877-7844-0548
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div
                                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                                    style={{ backgroundColor: 'rgba(19,91,151,0.15)' }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#135b97' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#5e7d9a' }}>Alamat</p>
                                    <p className="text-sm leading-relaxed" style={{ color: '#bec0c1' }}>
                                        Jl. Galaxy III No.57 Margahayu Raya,<br />Bandung, Jawa Barat
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t" style={{ borderColor: 'rgba(190,192,193,0.08)' }}>
                <div className="max-w-7xl mx-auto px-4 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs" style={{ color: '#5e7d9a' }}>
                        &copy; {new Date().getFullYear()} CV. Muara Karya. Kontraktor HVAC & Refrigerasi sejak 2014.
                    </p>
                    <div className="flex items-center gap-4 text-xs" style={{ color: '#5e7d9a' }}>
                        <Link
                            href="/karir"
                            className="transition-colors hover:text-[#135b97]"
                        >
                            Karir
                        </Link>
                        <span style={{ color: 'rgba(190,192,193,0.2)' }}>·</span>
                        <Link
                            href="/client"
                            className="transition-colors hover:text-[#135b97]"
                        >
                            Mitra
                        </Link>
                        <span style={{ color: 'rgba(190,192,193,0.2)' }}>·</span>
                        <a
                            href="mailto:Muara.karya@gmail.com"
                            className="transition-colors hover:text-[#135b97]"
                        >
                            Kontak
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}