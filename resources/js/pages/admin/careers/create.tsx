import { Head, Link, useForm } from '@inertiajs/react';
import CareerForm from './career-form';

export default function CareerCreate() {
    const form = useForm({
        title: '',
        department: '',
        type: 'Full-time',
        location: 'Bandung, Jawa Barat',
        deadline: '',
        summary: '',
        responsibilities: [''],
        requirements: [''],
        benefits: [''],
        sort_order: 0,
        is_active: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post('/admin/careers');
    }

    return (
        <>
            <Head title="Tambah Lowongan" />
            <div className="p-6">
                <div className="max-w-2xl space-y-6">

                    <div className="flex items-center gap-3">
                        <Link href="/admin/careers" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Tambah Lowongan</h1>
                            <p className="text-sm text-muted-foreground">Isi form di bawah untuk menambah lowongan baru.</p>
                        </div>
                    </div>

                    <CareerForm
                        form={form}
                        onSubmit={handleSubmit}
                        submitLabel="Simpan Lowongan"
                        cancelHref="/admin/careers"
                    />

                </div>
            </div>
        </>
    );
}

CareerCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Karir', href: '/admin/careers' },
        { title: 'Tambah', href: '/admin/careers/create' },
    ],
};
