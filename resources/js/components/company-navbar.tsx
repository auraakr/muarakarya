import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

const navLinks = [
    { href: '/', label: 'Beranda', type: 'a' },
    { href: '/client', label: 'Mitra', type: 'link' },
    { href: '/karir', label: 'Karir', type: 'link' },
];

export default function CompanyNavbar() {
    const { auth } = usePage().props as any;
    const currentPath = usePage().url.split('?')[0];
    const isAdmin = auth?.user?.role === 'admin';
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const isActive = (href: string) =>
        href === '/' ? currentPath === '/' : currentPath.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/';

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    backgroundColor: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0)',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(190,192,193,0.12)' : '1px solid transparent',
                }}
            >
                <nav className="max-w-7xl mx-auto px-4 lg:px-12 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
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
                        {/* Fallback jika logo belum ada */}
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

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            const cls = `relative px-3 py-1.5 text-sm font-medium transition-colors ${
                                active ? 'text-[#135b97]' : 'text-[#bec0c1] hover:text-[#f2f3f3]'
                            }`;
                            return link.type === 'a' ? (
                                <a key={link.href} href={link.href} className={cls}>
                                    {link.label}
                                    {active && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    )}
                                </a>
                            ) : (
                                <Link key={link.href} href={link.href} className={cls}>
                                    {link.label}
                                    {active && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                    )}
                                </Link>
                            );
                        })}
                        {isAdmin && (
                            <Link
                                href="/dashboard"
                                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                                    currentPath.startsWith('/dashboard') || currentPath.startsWith('/admin')
                                        ? 'text-[#135b97]'
                                        : 'text-[#bec0c1] hover:text-[#f2f3f3]'
                                }`}
                            >
                                Dashboard
                                {(currentPath.startsWith('/dashboard') || currentPath.startsWith('/admin')) && (
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5" style={{ backgroundColor: '#135b97' }} />
                                )}
                            </Link>
                        )}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="tel:+6281221107273"
                            className="flex items-center gap-2 text-sm font-bold transition-colors"
                            style={{ color: '#bec0c1' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f2f3f3'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#bec0c1'; }}
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +62 812-2110-7273
                        </a>
                        <a
                            href="https://wa.me/6281221107273"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
                            style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                        >
                            Hubungi Kami
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className="block w-6 h-0.5 transition-all duration-300 origin-center"
                            style={{
                                backgroundColor: '#f2f3f3',
                                transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                            }}
                        />
                        <span
                            className="block w-6 h-0.5 transition-all duration-300"
                            style={{
                                backgroundColor: '#f2f3f3',
                                opacity: menuOpen ? 0 : 1,
                                transform: menuOpen ? 'scaleX(0)' : 'none',
                            }}
                        />
                        <span
                            className="block w-6 h-0.5 transition-all duration-300 origin-center"
                            style={{
                                backgroundColor: '#f2f3f3',
                                transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
                            }}
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile menu overlay */}
            <div
                className="fixed inset-0 z-40 md:hidden transition-all duration-300"
                style={{
                    backgroundColor: 'rgba(8,8,8,0.98)',
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? 'auto' : 'none',
                }}
            >
                <div className="flex flex-col h-full pt-20 px-6 pb-8">

                    {/* Links */}
                    <div className="flex-1">
                        <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(190,192,193,0.1)' }}>
                            {navLinks.map((link, i) => {
                                const active = isActive(link.href);
                                const content = (
                                    <div
                                        className="flex items-center justify-between py-5 transition-all"
                                        style={{
                                            transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                                            transform: menuOpen ? 'translateX(0)' : 'translateX(-16px)',
                                            opacity: menuOpen ? 1 : 0,
                                        }}
                                    >
                                        <span
                                            className="text-2xl font-black uppercase tracking-wide"
                                            style={{ color: active ? '#135b97' : '#f2f3f3' }}
                                        >
                                            {link.label}
                                        </span>
                                        {active && (
                                            <div className="w-2 h-2" style={{ backgroundColor: '#135b97' }} />
                                        )}
                                    </div>
                                );
                                return link.type === 'a' ? (
                                    <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                                        {content}
                                    </a>
                                ) : (
                                    <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                                        {content}
                                    </Link>
                                );
                            })}
                            {isAdmin && (
                                <Link
                                    href="/dashboard"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <div
                                        className="flex items-center justify-between py-5 transition-all"
                                        style={{
                                            transitionDelay: menuOpen ? `${navLinks.length * 50}ms` : '0ms',
                                            transform: menuOpen ? 'translateX(0)' : 'translateX(-16px)',
                                            opacity: menuOpen ? 1 : 0,
                                        }}
                                    >
                                        <span
                                            className="text-2xl font-black uppercase tracking-wide"
                                            style={{ color: currentPath.startsWith('/dashboard') || currentPath.startsWith('/admin') ? '#135b97' : '#f2f3f3' }}
                                        >
                                            Dashboard
                                        </span>
                                        {(currentPath.startsWith('/dashboard') || currentPath.startsWith('/admin')) && (
                                            <div className="w-2 h-2" style={{ backgroundColor: '#135b97' }} />
                                        )}
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Bottom contact */}
                    <div
                        className="border-t pt-6 space-y-3 transition-all duration-500"
                        style={{
                            borderColor: 'rgba(190,192,193,0.15)',
                            opacity: menuOpen ? 1 : 0,
                            transitionDelay: menuOpen ? '300ms' : '0ms',
                        }}
                    >
                        <a
                            href="tel:+6281221107273"
                            className="flex items-center gap-3 text-sm font-medium"
                            style={{ color: '#bec0c1' }}
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +62 812-2110-7273
                        </a>
                        <a
                            href="https://wa.me/6281221107273"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold uppercase tracking-wider"
                            style={{ backgroundColor: '#135b97', color: '#f2f3f3' }}
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}