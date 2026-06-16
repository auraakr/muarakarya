import { Head, Link, useForm } from '@inertiajs/react';
import CareerForm from './career-form';

interface Career {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    deadline: string;
    summary: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    sort_order: number;
    is_active: boolean;
}

export default function CareerEdit({ career }: { career: Career }) {
    const form = useForm({
        title:            career.title,
        department:       career.department,
        type:             career.type,
        location:         career.location,
        deadline:         career.deadline,
        summary:          career.summary,
        responsibilities: career.responsibilities.length > 0 ? career.responsibilities : [''],
        requirements:     career.requirements.length > 0 ? career.requirements : [''],
        benefits:         career.benefits.length > 0 ? career.benefits : [''],
        sort_order:       career.sort_order,
        is_active:        career.is_active,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        form.put(`/admin/careers/${career.id}`);
    }

    return (
        <>
            <Head title="Edit Lowongan" />
            <div className="p-6">
                <div className="max-w-2xl space-y-6">

                    <div className="flex items-center gap-3">
                        <Link href="/admin/careers" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Edit Lowongan</h1>
                            <p className="text-sm text-muted-foreground">Perbarui informasi lowongan kerja.</p>
                        </div>
                    </div>

                    <CareerForm
                        form={form}
                        onSubmit={handleSubmit}
                        submitLabel="Perbarui Lowongan"
                        cancelHref="/admin/careers"
                    />

                </div>
            </div>
        </>
    );
}

CareerEdit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'Karir', href: '/admin/careers' },
        { title: 'Edit', href: '#' },
    ],
};
