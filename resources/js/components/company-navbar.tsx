import { Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

const sectionLinks = [
    { href: '/', label: 'Beranda' }
];

const pageLinks = [
    { href: '/client', label: 'Partner' },
    { href: '/karir', label: 'Karir' },
];

export default function CompanyNavbar() {
    const { auth } = usePage().props as any;
    const currentPath = usePage().url.split('?')[0];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
            <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">MK</span>
                    </div>
                    <div className="leading-tight">
                        <div className="font-bold text-gray-900 text-sm">CV. Muara Karya</div>
                        <div className="text-xs text-blue-600">HVAC & Refrigerasi</div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-7">
                    {sectionLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${
                                currentPath === link.href
                                    ? 'text-blue-700'
                                    : 'text-gray-600 hover:text-blue-700'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    {pageLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${
                                currentPath === link.href
                                    ? 'text-blue-700'
                                    : 'text-gray-600 hover:text-blue-700'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="text-sm bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="text-sm text-gray-600 hover:text-blue-700 transition-colors font-medium hidden sm:inline"
                            >
                                Masuk
                            </Link>
                            <Link
                                href={register()}
                                className="text-sm bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                            >
                                Daftar
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
