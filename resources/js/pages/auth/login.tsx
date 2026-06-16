import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Log in" />

            {/* Header / Brand Area ala GitHub + Laravel Logo */}
            <div className="flex flex-col space-y-2 text-center mb-4">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                    Sign in to Account
                </h1>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                    Welcome back! Enter your credentials to access the secure dashboard.
                </p>
                <div className="text-center text-xs text-muted-foreground/80">
                    New around here?{' '}
                    <TextLink href={register()} tabIndex={5} className="font-medium text-foreground underline-offset-4 hover:underline">
                        Create an account
                    </TextLink>
                </div>
            </div>

            {/* Form Container dengan styling minimalis-futuristik */}
            <div className="w-full rounded-2xl border border-border/50 bg-card/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-[4px]">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-5"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                {/* Email Field */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-xs font-medium tracking-wide text-foreground">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="name@example.com"
                                        className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/40 transition-all duration-200"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* Password Field */}
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-xs font-medium tracking-wide text-foreground">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/30 transition-all duration-200"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* Remember Me */}
                                <div className="flex items-center space-x-2 px-0.5">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        tabIndex={3}
                                        className="border-border/70 data-[state=checked]:bg-foreground data-[state=checked]:text-background transition-all"
                                    />
                                    <Label htmlFor="remember" className="text-xs text-foreground font-normal select-none cursor-pointer">
                                        Keep me signed in
                                    </Label>
                                </div>

                                {/* Futuristic Primary Submit Button */}
                                <Button
                                    type="submit"
                                    className="mt-2 h-10 w-full font-medium text-primary-foreground bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 hover:opacity-90 shadow-md transition-all duration-200 active:scale-[0.98]"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner className="mr-2 h-4 w-4 animate-spin text-current" />}
                                    Sign In
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </div>

            {status && (
                <div className="mt-4 p-3 rounded-lg border border-green-500/20 bg-green-500/10 text-center text-xs font-medium text-green-600 dark:text-green-400">
                    {status}
                </div>
            )}
        </>
    );
}

// SOLUSI: Mengosongkan title & description agar teks bawaan layout bungkusannya tidak menimpa / double
Login.layout = {
    title: '',
    description: '',
};