<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\Service;
use Illuminate\Database\Seeder;

class WelcomeContentSeeder extends Seeder
{
    public function run(): void
    {
        Faq::truncate();
        Service::truncate();

        $faqs = [
            ['question' => 'Apa saja area layanan CV. Muara Karya?', 'answer' => 'Kami melayani seluruh wilayah Indonesia, dengan fokus utama di area Jabodetabek dan kota-kota besar lainnya. Tim kami siap hadir ke lokasi proyek Anda sesuai kebutuhan.', 'sort_order' => 1],
            ['question' => 'Apakah CV. Muara Karya menangani proyek komersial berskala besar?', 'answer' => 'Ya, kami berpengalaman menangani proyek dari skala rumah tinggal hingga gedung perkantoran, mall, hotel, dan fasilitas industri. Lebih dari 500 proyek residensial dan komersial telah kami selesaikan sejak 2014.', 'sort_order' => 2],
            ['question' => 'Berapa lama proses instalasi sistem HVAC?', 'answer' => 'Durasi instalasi bergantung pada skala dan kompleksitas sistem. Untuk hunian standar umumnya 1–3 hari, sedangkan proyek komersial besar dapat memakan waktu beberapa minggu. Kami selalu memberikan estimasi waktu yang akurat sebelum proyek dimulai.', 'sort_order' => 3],
            ['question' => 'Apakah tersedia layanan perbaikan darurat 24 jam?', 'answer' => 'Ya, tim Reactive Maintenance kami siaga 24/7 untuk merespons kerusakan darurat. Kami memahami bahwa gangguan sistem HVAC dapat berdampak langsung pada operasional bisnis Anda.', 'sort_order' => 4],
            ['question' => 'Bagaimana cara mendapatkan estimasi biaya proyek?', 'answer' => 'Anda dapat menghubungi kami melalui email atau telepon untuk konsultasi awal. Tim teknis kami akan melakukan survei lokasi secara gratis dan menyiapkan proposal anggaran yang transparan sesuai kebutuhan Anda.', 'sort_order' => 5],
        ];

        foreach ($faqs as $faq) {
            Faq::create([...$faq, 'is_active' => true]);
        }

        $services = [
            [
                'title'       => 'Residential & Commercial',
                'description' => 'Layanan lengkap HVAC untuk hunian dan gedung komersial, dari skala kecil hingga proyek besar.',
                'items'       => ['Instalasi AC & sistem pendingin', 'Pengadaan unit & komponen HVAC', 'Perbaikan & troubleshooting sistem'],
                'color'       => 'blue',
                'sort_order'  => 1,
            ],
            [
                'title'       => 'Specialized Services',
                'description' => 'Layanan khusus untuk sistem ventilasi dan distribusi udara yang membutuhkan keahlian teknis tinggi.',
                'items'       => ['Instalasi & fabrikasi ducting', 'Sistem HVAC industrial & komersial', 'Air ventilation & sirkulasi udara'],
                'color'       => 'cyan',
                'sort_order'  => 2,
            ],
            [
                'title'       => 'Preventive & Reactive Maintenance',
                'description' => 'Program pemeliharaan terstruktur untuk menjaga performa optimal sistem HVAC dan meminimalkan downtime.',
                'items'       => ['Jadwal perawatan berkala (PM)', 'Respons cepat kerusakan darurat', 'Laporan kondisi & rekomendasi teknis'],
                'color'       => 'green',
                'sort_order'  => 3,
            ],
        ];

        foreach ($services as $service) {
            Service::create([...$service, 'is_active' => true]);
        }
    }
}
