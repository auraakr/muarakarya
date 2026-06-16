import type { AuthLayoutProps } from '@/types';

export default function AuthSplitLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-dvh flex flex-col items-center justify-center bg-background p-6">
            <div className="w-full max-w-sm">
                {children}
            </div>
        </div>
    );
}
