<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        Service::truncate();

        Service::create([
            'title'       => 'Residential & Commercial AC',
            'description' => 'Instalasi, perawatan, dan perbaikan sistem AC split, cassette, dan central untuk hunian dan gedung komersial.',
            'items'       => [
                'Instalasi AC split & cassette',
                'Perawatan berkala (servis rutin)',
                'Perbaikan & penggantian spare part',
                'Isi ulang freon & leak detection',
            ],
            'color'      => 'blue',
            'sort_order' => 1,
            'is_active'  => true,
        ]);

        Service::create([
            'title'       => 'Industrial Refrigeration',
            'description' => 'Solusi sistem refrigerasi industri skala besar untuk cold storage, blast freezer, dan proses produksi.',
            'items'       => [
                'Cold storage & blast freezer',
                'Chiller & cooling tower',
                'Sistem refrigerasi proses industri',
                'Preventive maintenance kontrak',
            ],
            'color'      => 'cyan',
            'sort_order' => 2,
            'is_active'  => true,
        ]);

        Service::create([
            'title'       => 'HVAC Engineering & MEP',
            'description' => 'Perencanaan, desain, dan instalasi sistem HVAC skala proyek untuk gedung perkantoran, mall, rumah sakit, dan fasilitas industri.',
            'items'       => [
                'Desain & kalkulasi beban pendingin',
                'Instalasi AHU, FCU & ducting',
                'Sistem ventilasi & pressurization',
                'Commissioning & balancing sistem',
            ],
            'color'      => 'green',
            'sort_order' => 3,
            'is_active'  => true,
        ]);
    }
}
