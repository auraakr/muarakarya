import { Head, Link, useForm } from '@inertiajs/react';
import ServiceForm from './service-form';

export default function ServiceCreate() {
    const form = useForm({
        title: '',
        description: '',
        items: [''],
        color: 'blue',
        sort_order: 0,
        is_active: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.post('/admin/services');
    }

    return (
        <>
            <Head title="Tambah Layanan" />
            <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-3">
                    <Link href="/admin/services" className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-gray-900">Tambah Layanan</h1>
                </div>

                <ServiceForm
                    form={form}
                    onSubmit={handleSubmit}
                    submitLabel="Simpan Layanan"
                    cancelHref="/admin/services"
                />
            </div>
        </>
    );
}

ServiceCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Layanan', href: '/admin/services' },
        { title: 'Tambah', href: '/admin/services/create' },
    ],
};
