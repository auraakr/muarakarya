import { Link, router, usePage } from '@inertiajs/react';
import { BookOpen, Briefcase, ChevronRight, FolderGit2, HelpCircle, LayoutGrid, LogOut, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';

import AppLogo from '@/components/app-logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

type NavEntry = NavItem & { items?: NavItem[] };

const mainNavItems: NavEntry[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
    { title: 'FAQ',       href: '/admin/faqs',     icon: HelpCircle },
    { title: 'Layanan',   href: '/admin/services', icon: Wrench },
    { title: 'Karir',     href: '/admin/careers',  icon: Briefcase },
];

const generalNavItems: NavEntry[] = [
    { title: 'Repository',    href: 'https://github.com/laravel/react-starter-kit', icon: FolderGit2 },
    { title: 'Documentation', href: 'https://laravel.com/docs/starter-kits#react',  icon: BookOpen },
];

interface AuthUser {
    name: string;
    email: string;
    avatar?: string;
}

function toUrl(href: NavItem['href']): string {
    if (typeof href === 'string') return href;
    if (href && typeof href === 'object' && 'url' in href) return String((href as { url: string }).url);
    return String(href);
}

function NavLink({ href, className, children }: { href: NavItem['href']; className?: string; children: ReactNode }) {
    const url = toUrl(href);
    if (/^https?:\/\//.test(url)) {
        return <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
    }
    return <Link href={href} prefetch className={className}>{children}</Link>;
}

// Active: brand blue background + white text. Hover: sidebar-accent.
const activeItemClass =
    'rounded-xl ' +
    'data-[active=true]:bg-[#135b97] data-[active=true]:text-white ' +
    'data-[active=true]:hover:bg-[#135b97] data-[active=true]:hover:text-white ' +
    'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground';

function NavGroup({ label, items }: { label: string; items: NavEntry[] }) {
    const page = usePage();

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-[11px] font-semibold tracking-wide text-sidebar-foreground/50 uppercase">
                {label}
            </SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const isActive = page.url.startsWith(toUrl(item.href));

                    if (item.items?.length) {
                        return (
                            <Collapsible key={item.title} defaultOpen={isActive} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton isActive={isActive} tooltip={item.title} className={activeItemClass}>
                                            {item.icon && <item.icon className="size-4" />}
                                            <span>{item.title}</span>
                                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items.map((sub) => (
                                                <SidebarMenuSubItem key={sub.title}>
                                                    <SidebarMenuSubButton asChild>
                                                        <NavLink href={sub.href}><span>{sub.title}</span></NavLink>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    }

                    return (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={isActive} tooltip={item.title} className={activeItemClass}>
                                <NavLink href={item.href} className="flex items-center gap-2">
                                    {item.icon && <item.icon className="size-4" />}
                                    <span>{item.title}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}

export function AppSidebar() {
    const { auth } = usePage<{ auth: { user?: AuthUser } }>().props;
    const user = auth?.user;
    const initials = user?.name
        ? user.name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
        : 'U';

    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r border-sidebar-border">
            <SidebarHeader className="pb-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="hover:bg-transparent">
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="gap-1 px-2">
                <NavGroup label="Menu"    items={mainNavItems} />
                <NavGroup label="General" items={generalNavItems} />
            </SidebarContent>

            <SidebarFooter className="gap-2 px-2 pb-3">
                {/* Profile card — expanded sidebar */}
                <div className="rounded-xl bg-[#0f2d4a] p-4 text-white group-data-[collapsible=icon]:hidden">
                    <p className="text-[11px] font-medium text-white/60">Head Office</p>
                    <p className="mt-1 text-sm font-semibold">{user?.name ?? 'Guest User'}</p>
                    <p className="text-xs text-white/60">Administrator</p>
                    <div className="mt-3 flex gap-2">
                        <Button
                            asChild
                            size="sm"
                            className="flex-1 justify-between bg-white/10 text-white hover:bg-white/20 border-0"
                        >
                            <Link href="/settings/profile">
                                Lihat Profil
                                <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => router.post('/logout')}
                            className="bg-white/10 text-white hover:bg-red-500/80 border-0 px-2.5"
                            title="Logout"
                        >
                            <LogOut className="size-4" />
                        </Button>
                    </div>
                </div>

                {/* Avatar-only — collapsed sidebar */}
                <SidebarMenu className="hidden group-data-[collapsible=icon]:block">
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild tooltip={user?.name ?? 'Profile'}>
                            <Link href="/settings/profile">
                                <Avatar className="size-7 rounded-lg">
                                    <AvatarImage src={user?.avatar} alt={user?.name} />
                                    <AvatarFallback className="rounded-lg bg-[#0f2d4a] text-white">{initials}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            onClick={() => router.post('/logout')}
                            tooltip="Logout"
                            className="text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                            <LogOut className="size-4" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
