import { useState } from 'react';
import { Head } from '@inertiajs/react';
import CompanyNavbar from '@/components/company-navbar';

const faqs = [
    {
        q: 'Apa saja area layanan CV. Muara Karya?',
        a: 'Kami melayani seluruh wilayah Indonesia, dengan fokus utama di area Jabodetabek dan kota-kota besar lainnya. Tim kami siap hadir ke lokasi proyek Anda sesuai kebutuhan.',
    },
    {
        q: 'Apakah CV. Muara Karya menangani proyek komersial berskala besar?',
        a: 'Ya, kami berpengalaman menangani proyek dari skala rumah tinggal hingga gedung perkantoran, mall, hotel, dan fasilitas industri. Lebih dari 500 proyek residensial dan komersial telah kami selesaikan sejak 2014.',
    },
    {
        q: 'Berapa lama proses instalasi sistem HVAC?',
        a: 'Durasi instalasi bergantung pada skala dan kompleksitas sistem. Untuk hunian standar umumnya 1–3 hari, sedangkan proyek komersial besar dapat memakan waktu beberapa minggu. Kami selalu memberikan estimasi waktu yang akurat sebelum proyek dimulai.',
    },
    {
        q: 'Apakah tersedia layanan perbaikan darurat 24 jam?',
        a: 'Ya, tim Reactive Maintenance kami siaga 24/7 untuk merespons kerusakan darurat. Kami memahami bahwa gangguan sistem HVAC dapat berdampak langsung pada operasional bisnis Anda.',
    },
    {
        q: 'Bagaimana cara mendapatkan estimasi biaya proyek?',
        a: 'Anda dapat menghubungi kami melalui email atau telepon untuk konsultasi awal. Tim teknis kami akan melakukan survei lokasi secara gratis dan menyiapkan proposal anggaran yang transparan sesuai kebutuhan Anda.',
    },
];

export default function Welcome() {
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
                                CV. Muara Karya adalah kontraktor HVAC & Refrigerasi berpengalaman yang melayani kebutuhan
                                instalasi, pengadaan, dan perawatan sistem pendingin untuk hunian dan komersial di seluruh Indonesia.
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
                                    { value: '100%', label: 'Komitmen HSSE', sub: 'Safety First' },
                                    { value: '24/7', label: 'Maintenance', sub: 'Reactive Support' },
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
                                kualitas dan keselamatan kerja tertinggi.
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
                                    Menjadi perusahaan kontraktor HVAC & Refrigerasi terdepan dan terpercaya di Indonesia,
                                    yang dikenal atas kualitas kerja, inovasi teknologi, dan komitmen terhadap kepuasan pelanggan.
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
                                        'Memberikan solusi HVAC & Refrigerasi berkualitas tinggi dengan teknologi terkini',
                                        'Mengutamakan keselamatan kerja (HSSE) dalam setiap pelaksanaan proyek',
                                        'Membangun hubungan jangka panjang berbasis kepercayaan dengan klien',
                                        'Mengembangkan SDM yang kompeten dan profesional di bidang HVAC',
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
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">DA</span>
                                    </div>
                                </div>
                                <div>
                                    <svg className="w-8 h-8 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                        "Sejak 2014, CV. Muara Karya berdiri di atas fondasi integritas, keahlian, dan dedikasi penuh terhadap
                                        kepuasan klien. Kami percaya bahwa setiap proyek adalah amanah, dan setiap solusi yang kami berikan
                                        harus memberikan nilai nyata bagi kehidupan dan bisnis klien kami. Bersama tim profesional yang
                                        berkomitmen, kami terus bertumbuh menjadi mitra terbaik dalam solusi HVAC & Refrigerasi."
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
                                Dari instalasi hingga perawatan berkala — kami menangani kebutuhan sistem HVAC Anda dari awal hingga akhir.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Residential & Commercial */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all group">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                    <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Residential & Commercial</h3>
                                <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                                    Layanan lengkap HVAC untuk hunian dan gedung komersial, dari skala kecil hingga proyek besar.
                                </p>
                                <ul className="space-y-2.5">
                                    {[
                                        'Instalasi AC & sistem pendingin',
                                        'Pengadaan unit & komponen HVAC',
                                        'Perbaikan & troubleshooting sistem',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Specialized Services */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-cyan-200 transition-all group">
                                <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                                    <svg className="w-7 h-7 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Services</h3>
                                <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                                    Layanan khusus untuk sistem ventilasi dan distribusi udara yang membutuhkan keahlian teknis tinggi.
                                </p>
                                <ul className="space-y-2.5">
                                    {[
                                        'Instalasi & fabrikasi ducting',
                                        'Sistem HVAC industrial & komersial',
                                        'Air ventilation & sirkulasi udara',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Preventive & Reactive Maintenance */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-green-200 transition-all group md:col-span-2 lg:col-span-1">
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                                    <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Preventive & Reactive Maintenance</h3>
                                <p className="text-gray-500 mb-5 leading-relaxed text-sm">
                                    Program pemeliharaan terstruktur untuk menjaga performa optimal sistem HVAC dan meminimalkan downtime.
                                </p>
                                <ul className="space-y-2.5">
                                    {[
                                        'Jadwal perawatan berkala (PM)',
                                        'Respons cepat kerusakan darurat',
                                        'Laporan kondisi & rekomendasi teknis',
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-slate-200">

                            {/* Left — person image panel */}
                            <div className="relative bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 min-h-[520px] flex flex-col justify-end overflow-hidden">
                                {/* Decorative blobs */}
                                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                                {/* Dot grid */}
                                <div className="absolute inset-0"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
                                        backgroundSize: '28px 28px',
                                    }}
                                />

                                {/* Person silhouette */}
                                <div className="relative flex justify-center items-end flex-1 pt-12 px-8">
                                    <svg viewBox="0 0 260 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-52 lg:w-64 drop-shadow-2xl">
                                        {/* Hard hat */}
                                        <ellipse cx="130" cy="72" rx="52" ry="14" fill="#1d4ed8" opacity="0.9"/>
                                        <path d="M80 72 Q78 50 130 44 Q182 50 180 72Z" fill="#1d4ed8" opacity="0.9"/>
                                        {/* Head */}
                                        <ellipse cx="130" cy="88" rx="30" ry="34" fill="#fbbf24" opacity="0.85"/>
                                        {/* Face details */}
                                        <ellipse cx="120" cy="85" rx="4" ry="5" fill="#92400e" opacity="0.5"/>
                                        <ellipse cx="140" cy="85" rx="4" ry="5" fill="#92400e" opacity="0.5"/>
                                        <path d="M118 100 Q130 110 142 100" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
                                        {/* Vest / Body */}
                                        <path d="M95 120 L75 240 L185 240 L165 120 Q148 112 130 110 Q112 112 95 120Z" fill="#1e40af" opacity="0.9"/>
                                        {/* High-vis stripes */}
                                        <rect x="78" y="170" width="104" height="12" rx="2" fill="#fbbf24" opacity="0.75"/>
                                        <rect x="78" y="195" width="104" height="12" rx="2" fill="#fbbf24" opacity="0.75"/>
                                        {/* Left arm */}
                                        <path d="M95 125 L58 210 L74 218 L108 138Z" fill="#1e3a8a" opacity="0.9"/>
                                        {/* Right arm */}
                                        <path d="M165 125 L202 210 L186 218 L152 138Z" fill="#1e3a8a" opacity="0.9"/>
                                        {/* Wrench in hand */}
                                        <rect x="188" y="205" width="8" height="28" rx="4" fill="#94a3b8" opacity="0.9" transform="rotate(-20 192 219)"/>
                                        <ellipse cx="191" cy="207" rx="7" ry="5" fill="#64748b" opacity="0.9" transform="rotate(-20 191 207)"/>
                                        {/* Pants */}
                                        <path d="M75 240 L85 320 L125 320 L130 270 L135 320 L175 320 L185 240Z" fill="#1e293b" opacity="0.95"/>
                                        {/* Boots */}
                                        <rect x="82" y="312" width="46" height="18" rx="6" fill="#0f172a" opacity="1"/>
                                        <rect x="132" y="312" width="46" height="18" rx="6" fill="#0f172a" opacity="1"/>
                                    </svg>
                                </div>

                                {/* Bottom overlay card */}
                                <div className="relative bg-white/10 backdrop-blur-sm border-t border-white/10 px-8 py-6">
                                    <p className="text-white font-semibold text-lg leading-snug">
                                        Ada pertanyaan tentang proyek Anda?
                                    </p>
                                    <p className="text-slate-300 text-sm mt-1">
                                        Tim kami siap membantu — konsultasi awal gratis.
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
                                                    {item.q}
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
                                                    <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ── Footer ── */}
                <footer className="bg-slate-900 py-10">
                    <div className="max-w-7xl mx-auto px-4 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">MK</span>
                                </div>
                                <span className="text-white font-semibold text-sm">CV. Muara Karya</span>
                            </div>
                            <p className="text-slate-500 text-sm text-center">
                                &copy; {new Date().getFullYear()} CV. Muara Karya. Kontraktor HVAC & Refrigerasi sejak 2014.
                            </p>
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}
