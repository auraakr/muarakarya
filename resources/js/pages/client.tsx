import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard, login, register } from '@/routes';
import CompanyNavbar from '@/components/company-navbar';

const clientLogos = [
    { name: 'British Petroleum (AKR) Java', src: 'https://via.placeholder.com/300x140?text=BP' },
    { name: 'Shell', src: 'https://via.placeholder.com/300x140?text=Shell' },
    { name: 'PT. Pertambangan Nusantara', src: 'https://via.placeholder.com/300x140?text=PTPN' },
    { name: 'Alfamidi', src: 'https://via.placeholder.com/300x140?text=Alfamidi' },
    { name: 'Biznet', src: 'https://via.placeholder.com/300x140?text=Biznet' },
    { name: 'The Trans Luxury Hotel', src: 'https://via.placeholder.com/300x140?text=Trans' },
    { name: 'Sewatama', src: 'https://via.placeholder.com/300x140?text=Sewatama' },
    { name: 'CBRE', src: 'https://via.placeholder.com/300x140?text=CBRE' },
    { name: 'Prodia', src: 'https://via.placeholder.com/300x140?text=Prodia' },
    { name: 'President University', src: 'https://via.placeholder.com/300x140?text=President+Univ' },
];

const partnerLogos = [
    { name: 'GREE', src: 'https://via.placeholder.com/200x100?text=GREE' },
    { name: 'DAIKIN', src: 'https://via.placeholder.com/200x100?text=DAIKIN' },
    { name: 'TOSHIBA', src: 'https://via.placeholder.com/200x100?text=TOSHIBA' },
    { name: 'Panasonic', src: 'https://via.placeholder.com/200x100?text=Panasonic' },
    { name: 'Carrier', src: 'https://via.placeholder.com/200x100?text=Carrier' },
    { name: 'Bitzer', src: 'https://via.placeholder.com/200x100?text=Bitzer' },
];

export default function ClientsAndPartners() {
    // Memanggil data auth untuk mengecek status login di Navbar
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Klien & Mitra — CV. Muara Karya" />

            <div className="min-h-screen bg-slate-50 text-gray-800 scroll-smooth">
                
                <CompanyNavbar />

                {/* ── Main Content ── */}
                {/* pt-24 ditambahkan agar konten tidak tertutup oleh Navbar yang fixed */}
                <main className="flex flex-col gap-8 p-4 lg:p-8 pt-24 max-w-7xl mx-auto w-full">
                    
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-2">
                        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                            Jaringan Kami
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Klien & Mitra Resmi
                        </h1>
                        <p className="text-gray-500">
                            CV. Muara Karya dipercaya oleh berbagai institusi dan bermitra dengan produsen HVAC terkemuka.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 w-full">
                        
                        {/* Kepercayaan Klien Kami */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                Kepercayaan Klien
                            </h2>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                {clientLogos.map((c) => (
                                    <div
                                        key={c.name}
                                        className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-slate-50 p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100 group"
                                    >
                                        <img
                                            src={c.src}
                                            alt={c.name}
                                            className="h-10 w-auto object-contain filter grayscale transition duration-300 group-hover:grayscale-0"
                                        />
                                        <span className="mt-2 text-[11px] font-medium text-slate-500 leading-tight group-hover:text-blue-700">{c.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mitra Resmi & Dukungan Teknologi */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 md:col-span-2">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                Mitra Resmi & Dukungan Teknologi
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {partnerLogos.map((p) => (
                                    <div
                                        key={p.name}
                                        className="flex h-24 w-40 items-center justify-center rounded-2xl bg-slate-50 p-4 border border-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-cyan-200 hover:bg-white group"
                                    >
                                        <img
                                            src={p.src}
                                            alt={p.name}
                                            className="h-12 w-auto object-contain filter grayscale transition duration-300 group-hover:grayscale-0"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Banner Informasi */}
                    <div className="w-full mt-4 mb-12">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800 p-8 lg:p-12 bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 shadow-xl">
                            
                            {/* Decorative Blobs */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
                            
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-white/5" />
                            
                            <div className="relative z-10 max-w-3xl">
                                <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-white/10">
                                    Dukungan Teknis
                                </span>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">Layanan Purna Jual Terpercaya</h3>
                                <p className="max-w-prose text-base lg:text-lg text-slate-300 leading-relaxed">
                                    Kami melayani berbagai proyek HVAC & Refrigerasi untuk klien korporat dan institusi. Sebagai
                                    Auto Service Dealer dari beberapa merek ternama, kami menyediakan layanan purna jual dan
                                    dukungan teknis yang dapat diandalkan untuk memastikan efisiensi kerja mesin tetap stabil.
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

ClientsAndPartners.layout = (page: React.ReactNode) => <>{page}</>;
// Hapus `ClientsAndPartners.layout = ...` di bagian ini agar tidak masuk ke template dashboard.