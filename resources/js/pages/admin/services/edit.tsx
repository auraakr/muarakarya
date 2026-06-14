import { Head, Link, useForm } from '@inertiajs/react';
import ServiceForm from './service-form';

interface Service {
    id: number;
    title: string;
    description: string;
    items: string[];
    color: string;
    sort_order: number;
    is_active: boolean;
}

export default function ServiceEdit({ service }: { service: Service }) {
    const form = useForm({
        title: service.title,
        description: service.description,
        items: service.items.length > 0 ? service.items : [''],
        color: service.color,
        sort_order: service.sort_order,
        is_active: service.is_active,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.put(`/admin/services/${service.id}`);
    }

    return (
        <>
            <Head title="Edit Layanan" />
            <div className="max-w-2xl space-y-6">
                <div className="flex items-center gap-3">
                    <Link href="/admin/services" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </Link>
                    <h1 className="text-xl font-bold text-foreground">Edit Layanan</h1>
                </div>

                <ServiceForm
                    form={form}
                    onSubmit={handleSubmit}
                    submitLabel="Perbarui Layanan"
                    cancelHref="/admin/services"
                />
            </div>
        </>
    );
}

ServiceEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Layanan', href: '/admin/services' },
        { title: 'Edit', href: '#' },
    ],
};
