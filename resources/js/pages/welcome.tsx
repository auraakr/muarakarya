import { useState } from 'react';
import { Head } from '@inertiajs/react';
import CompanyNavbar from '@/components/company-navbar';
import CompanyFooter from '@/components/company-footer';

interface Faq { id: number; question: string; answer: string; }
interface Service { id: number; title: string; description: string; items: string[]; color: string; }

const colorStyles: Record<string, { card: string; icon: string; iconBg: string; check: string }> = {
    blue:  { card: 'hover:border-blue-200',  icon: 'text-blue-700',  iconBg: 'bg-blue-100 group-hover:bg-blue-200',  check: 'text-blue-500' },
    cyan:  { card: 'hover:border-cyan-200',  icon: 'text-cyan-700',  iconBg: 'bg-cyan-100 group-hover:bg-cyan-200',  check: 'text-cyan-500' },
    green: { card: 'hover:border-green-200', icon: 'text-green-700', iconBg: 'bg-green-100 group-hover:bg-green-200', check: 'text-green-500' },
};

export default function Welcome({ faqs = [], services = [] }: { faqs: Faq[]; services: Service[] }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <Head title="CV. Muara Karya — Kontraktor HVAC & Refrigerasi" />
            <div className="min-h-screen bg-white text-gray-800 scroll-smooth">

                <CompanyNavbar />

                {/* ── Hero / Beranda ── */}
                <section
                    id="beranda"
                    className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16"
                >
                    {/* Background blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-24 left-8 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-16 right-8 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 w-full">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                                <span className="text-blue-300 text-sm">Beroperasi sejak 2014</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Solusi HVAC &{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Refrigerasi
                                </span>{' '}
                                Terpercaya
                            </h1>

                            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl">
                                CV. Muara Karya bergerak di bidang Jasa Mecanical dan Electrical, khususnya untuk bidang
                                mesin Pendingin dan Tata Udara. Berdiri sejak tahun 2014 dan telah memiliki pengalaman
                                10 tahun di bidangnya, siap memenuhi kebutuhan pangsa pasar dan permintaan para customer
                                pengguna Mesin Pendingin dan Tata Udara.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-16">
                                <a
                                    href="#layanan"
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Lihat Layanan
                                </a>
                                <a
                                    href="#tentang"
                                    className="border border-slate-500 hover:border-blue-400 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Tentang Kami
                                </a>
                            </div>

                            {/* Achievement stats */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { value: '500+', label: 'Proyek Selesai', sub: 'Residential & Commercial' },
                                    { value: '10+', label: 'Tahun Pengalaman', sub: 'Sejak 2014' },
                                    { value: '30+', label: 'Tenaga Profesional', sub: 'Teknisi Berpengalaman' },
                                    { value: 'OSHA', label: 'Compliant', sub: 'Terdaftar HSSE Safety' },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                                    >
                                        <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-sm font-semibold text-blue-300">{stat.label}</div>
                                        <div className="text-xs text-slate-400 mt-0.5">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Award badge */}
                        <div className="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm">
                            <div className="w-9 h-9 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="text-white text-sm font-semibold">Contractor of the Year 2018</div>
                                <div className="text-slate-400 text-xs">Penghargaan atas prestasi proyek terbaik</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Tentang Kami ── */}
                <section id="tentang" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                                Tentang Kami
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Membangun Kepercayaan Sejak 2014
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Kami hadir sebagai mitra terpercaya dalam solusi teknik HVAC dan Refrigerasi dengan standar
                                kualitas, kecepatan layanan, dan keselamatan kerja tertinggi.
                            </p>
                        </div>

                        {/* Visi & Misi */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Visi</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    Dengan konsep fokus di bidang Pendingin Refrigerasi dan Tata Udara, kami menjadi jawaban
                                    dari kebutuhan akan kualitas dan kecepatan layanan. Berawal dari layanan Service, Maintenance,
                                    dan Design untuk kebutuhan Pendingin Tata Udara dan Refrigerasi, berkembang sebagai bisnis
                                    partner strategis yang sanggup memberikan kepuasan dan kenyamanan bagi Personal maupun
                                    Corporate Customer.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Misi</h3>
                                <ul className="space-y-3 text-gray-600">
                                    {[
                                        'Menerapkan teknologi tepat guna dan selalu melakukan inovasi baru melalui pendekatan kehati-hatian dan ramah lingkungan',
                                        'Meningkatkan kualitas dan profesionalisme sehingga dapat memberikan pelayanan prima kepada seluruh Customer',
                                        'Memberikan pelatihan guna memajukan ketrampilan SDM dalam rangka kerjasama operasional perawatan mesin pendingin dan tata udara',
                                        'Memberikan layanan dengan kecepatan respon, kendali mutu, dan garansi sehingga setiap mitra mendapat pelayanan yang memuaskan',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm">
                                            <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* HSSE */}
                        <div className="bg-slate-900 rounded-2xl p-8 mb-16">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-1">Komitmen HSSE</h3>
                                <p className="text-slate-400 text-sm">Health · Safety · Security · Environment</p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { letter: 'H', title: 'Health', desc: 'Menjaga kesehatan seluruh tenaga kerja di lapangan' },
                                    { letter: 'S', title: 'Safety', desc: 'Zero accident menjadi standar utama setiap proyek' },
                                    { letter: 'S', title: 'Security', desc: 'Keamanan aset dan lokasi kerja terjamin penuh' },
                                    { letter: 'E', title: 'Environment', desc: 'Praktik kerja ramah lingkungan dan berkelanjutan' },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                                    >
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-lg">{item.letter}</span>
                                        </div>
                                        <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CEO Message */}
                        <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="flex-shrink-0">
                                    <img 
                                        src="/logo/ceobg.svg" 
                                        alt="Denny Alamsyah Priatna" 
                                        className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                </div>
                                <div>
                                    <svg className="w-8 h-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                        "Komitmen kami adalah memberikan jasa dan dukungan handal agar dapat menambah jumlah
                                        basis pelanggan dengan standar nilai terbaik & Peningkatan kepuasan pelanggan dengan
                                        memberikan tanggapan yang cepat dan penyediaan tenaga teknik yang memadai."
                                    </p>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">Denny Alamsyah Priatna</div>
                                        <div className="text-blue-600 text-sm">Chief Executive Officer — CV. Muara Karya</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Layanan ── */}
                <section id="layanan" className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                                Layanan Kami
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Solusi Lengkap HVAC & Refrigerasi
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Dari instalasi hingga perawatan berkala, kami menangani kebutuhan sistem HVAC Anda dari awal hingga akhir.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, idx) => {
                                const c = colorStyles[service.color] ?? colorStyles.blue;
                                return (
                                    <div
                                        key={service.id}
                                        className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all group ${c.card} ${idx === 2 && services.length === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                    >
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${c.iconBg}`}>
                                            <svg className={`w-7 h-7 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-500 mb-5 leading-relaxed text-sm">{service.description}</p>
                                        <ul className="space-y-2.5">
                                            {service.items.map((item) => (
                                                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                                                    <svg className={`w-4 h-4 flex-shrink-0 ${c.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-slate-200">

                            {/* Left — person image panel */}
                            <div className="relative bg-slate-900 min-h-[520px] flex flex-col justify-end overflow-hidden">
                                
                                {/* Foto Latar Belakang Penuh */}
                                <img 
                                    src="/logo/faq.svg" 
                                    alt="Layanan Muara Karya" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Efek gradasi gelap agar teks pertanyaan di bawah tetap terbaca jelas */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                                {/* Bottom overlay card */}
                                <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/10 px-8 py-6">
                                    <p className="text-white font-semibold text-lg leading-snug">
                                        Ada pertanyaan tentang proyek Anda?
                                    </p>
                                    <p className="text-slate-300 text-sm mt-1">
                                        Tim kami siap membantu, konsultasi awal gratis.
                                    </p>
                                </div>
                            </div>

                            {/* Right — FAQ accordion */}
                            <div className="bg-white px-8 py-12 lg:px-12 lg:py-14 flex flex-col justify-center">
                                <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 self-start">
                                    FAQ
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                                    Pertanyaan yang Sering Diajukan
                                </h2>
                                <p className="text-gray-500 text-sm mb-8">
                                    Temukan jawaban atas pertanyaan umum seputar layanan kami.
                                </p>

                                <div className="space-y-3">
                                    {faqs.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`border rounded-xl overflow-hidden transition-colors ${
                                                openFaq === i ? 'border-blue-200 bg-blue-50/50' : 'border-slate-200 bg-white'
                                            }`}
                                        >
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                                            >
                                                <span className={`font-medium text-sm leading-snug ${openFaq === i ? 'text-blue-700' : 'text-gray-800'}`}>
                                                    {item.question}
                                                </span>
                                                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                                                    openFaq === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                                                }`}>
                                                    <svg className={`w-3.5 h-3.5 transition-transform ${openFaq === i ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </span>
                                            </button>
                                            {openFaq === i && (
                                                <div className="px-5 pb-5">
                                                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
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