<?php

namespace Database\Seeders;

use App\Models\Career;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    public function run(): void
    {
        Career::truncate();

        Career::create([
            'title'      => 'Teknisi HVAC & Refrigerasi',
            'department' => 'Engineering',
            'type'       => 'Full-time',
            'location'   => 'Bandung, Jawa Barat',
            'deadline'   => '31 Jul 2026',
            'summary'    => 'Bertanggung jawab atas instalasi, perawatan preventif, dan perbaikan sistem AC, chiller, serta refrigerasi di site klien.',
            'responsibilities' => [
                'Melakukan instalasi dan komisioning sistem HVAC/refrigerasi',
                'Melaksanakan preventive maintenance sesuai jadwal yang ditetapkan',
                'Mendiagnosa dan menangani kerusakan sistem secara reaktif',
                'Membuat laporan teknis dan dokumentasi hasil pekerjaan',
                'Menjaga standar K3 dan prosedur HSSE di setiap pekerjaan',
            ],
            'requirements' => [
                'Min. SMK Teknik Pendingin / Refrigerasi atau D3 Teknik Mesin / Elektro',
                'Pengalaman min. 1 tahun sebagai teknisi AC / HVAC',
                'Memahami sistem refrigerasi, ducting, dan kelistrikan dasar',
                'Memiliki SIM A / C (diutamakan)',
                'Bersedia ditempatkan di lokasi proyek (area Jawa Barat & Jabotabek)',
            ],
            'benefits' => [
                'BPJS Kesehatan & Ketenagakerjaan',
                'Tunjangan transport & makan',
                'Lembur dibayar',
                'Pelatihan & sertifikasi teknis',
            ],
            'sort_order' => 1,
            'is_active'  => true,
        ]);

        Career::create([
            'title'      => 'Sales & Business Development',
            'department' => 'Sales',
            'type'       => 'Full-time',
            'location'   => 'Bandung, Jawa Barat',
            'deadline'   => '31 Agu 2026',
            'summary'    => 'Mengembangkan bisnis perusahaan dengan mencari klien baru, membangun relasi strategis, dan menutup kontrak proyek HVAC.',
            'responsibilities' => [
                'Mencari dan mengembangkan prospek klien baru (B2B)',
                'Melakukan presentasi dan proposal layanan kepada calon klien',
                'Membangun dan menjaga hubungan jangka panjang dengan klien existing',
                'Berkoordinasi dengan tim teknis untuk penyusunan penawaran harga',
                'Memenuhi target penjualan bulanan dan kuartalan',
            ],
            'requirements' => [
                'D3 / S1 semua jurusan, diutamakan Teknik atau Manajemen Bisnis',
                'Pengalaman min. 1 tahun di bidang sales B2B',
                'Memiliki jaringan relasi di industri properti, industri, atau fasilitas',
                'Komunikatif, persuasif, dan sangat berorientasi pada target',
                'Memiliki SIM A dan bersedia mobile di area Jawa Barat & Jabotabek',
            ],
            'benefits' => [
                'BPJS Kesehatan & Ketenagakerjaan',
                'Komisi penjualan kompetitif',
                'Tunjangan kendaraan & komunikasi',
                'Incentive trip tahunan',
            ],
            'sort_order' => 2,
            'is_active'  => true,
        ]);
    }
}
