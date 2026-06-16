<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        Faq::truncate();

        $faqs = [
            [
                'question'   => 'Apa saja layanan utama CV. Muara Karya?',
                'answer'     => 'CV. Muara Karya menyediakan layanan instalasi, perawatan, dan perbaikan sistem AC residential & commercial, refrigerasi industri (cold storage, blast freezer, chiller), serta engineering HVAC untuk proyek gedung perkantoran, mall, rumah sakit, dan fasilitas industri.',
                'sort_order' => 1,
                'is_active'  => true,
            ],
            [
                'question'   => 'Apakah CV. Muara Karya melayani area di luar Bandung?',
                'answer'     => 'Ya, selain Bandung sebagai kantor pusat kami, kami juga melayani area Jabotabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan wilayah Jawa Barat lainnya. Untuk proyek di luar area tersebut, silakan hubungi kami untuk diskusi lebih lanjut.',
                'sort_order' => 2,
                'is_active'  => true,
            ],
            [
                'question'   => 'Bagaimana cara mengajukan permintaan penawaran atau konsultasi?',
                'answer'     => 'Anda dapat menghubungi kami melalui WhatsApp di nomor +62 877-7844-0548 atau email ke Muara.karya@gmail.com. Tim kami akan merespons dalam 1×24 jam di hari kerja untuk menjadwalkan survei dan menyiapkan penawaran yang sesuai dengan kebutuhan Anda.',
                'sort_order' => 3,
                'is_active'  => true,
            ],
            [
                'question'   => 'Apakah tersedia paket kontrak perawatan berkala?',
                'answer'     => 'Ya, kami menyediakan paket Preventive Maintenance Contract (PMC) untuk AC dan sistem refrigerasi. Paket ini mencakup kunjungan servis rutin, pengecekan performa, pembersihan filter & evaporator, serta laporan kondisi peralatan. Hubungi kami untuk mendapatkan penawaran paket yang sesuai.',
                'sort_order' => 4,
                'is_active'  => true,
            ],
            [
                'question'   => 'Berapa lama garansi pekerjaan instalasi?',
                'answer'     => 'Kami memberikan garansi pekerjaan instalasi selama 3 bulan untuk jasa pemasangan dan 1 tahun untuk unit AC baru (mengikuti garansi pabrikan). Garansi mencakup kerusakan yang disebabkan oleh kesalahan instalasi, bukan akibat penggunaan yang tidak sesuai atau bencana alam.',
                'sort_order' => 5,
                'is_active'  => true,
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::create($faq);
        }
    }
}
