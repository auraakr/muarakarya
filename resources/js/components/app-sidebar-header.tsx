import { Link, usePage } from '@inertiajs/react';
import { Bell, Mail, Search } from 'lucide-react';

import { Breadcrumbs } from '@/components/breadcrumbs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

interface AuthUser {
    name: string;
    email: string;
    avatar?: string;
}

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const { auth } = usePage<{ auth: { user?: AuthUser } }>().props;
    const user = auth?.user;
    const initials = user?.name
        ? user.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')
              .toUpperCase()
        : 'U';

    return (
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <SidebarTrigger className="-ml-1" />

            {breadcrumbs.length > 0 && (
                <div className="hidden items-center gap-3 lg:flex">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <span className="h-5 w-px bg-border" />
                </div>
            )}

            <div className="relative max-w-md flex-1">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Cari..."
                    className="h-9 rounded-full border-border bg-muted/40 pl-9 pr-12 focus-visible:ring-[#135b97]/30"
                />
                <kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    ⌘F
                </kbd>
            </div>

            <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:bg-muted">
                    <Mail className="size-[18px]" />
                </Button>
                <Button variant="ghost" size="icon" className="relative rounded-full text-muted-foreground hover:bg-muted">
                    <Bell className="size-[18px]" />
                    <span className="absolute top-2 right-2 size-1.5 rounded-full bg-[#135b97]" />
                </Button>

                <span className="hidden h-8 w-px bg-border sm:block" />

                <Link href="/settings/profile" className="hidden items-center gap-2 sm:flex">
                    <Avatar className="size-9">
                        <AvatarImage src={user?.avatar} alt={user?.name} />
                        <AvatarFallback className="bg-[#0f2d4a] text-white">{initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-left text-sm leading-tight">
                        <p className="font-medium text-foreground">{user?.name ?? 'Guest'}</p>
                        <p className="text-xs text-muted-foreground">{user?.email ?? ''}</p>
                    </div>
                </Link>
            </div>
        </header>
    );
}
