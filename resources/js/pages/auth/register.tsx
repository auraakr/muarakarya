import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <>
            <Head title="Register" />

            {/* Header / Brand Area */}
            <div className="flex flex-col space-y-2 text-center mb-4">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                    Create an Account
                </h1>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                    Fill in your details below to register a new account.
                </p>
                <div className="text-center text-xs text-muted-foreground/80">
                    Already have an account?{' '}
                    <TextLink href={login()} tabIndex={6} className="font-medium text-foreground underline-offset-4 hover:underline">
                        Sign in
                    </TextLink>
                </div>
            </div>

            {/* Form Container */}
            <div className="w-full rounded-2xl border border-border/50 bg-card/40 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-[4px]">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-5"
                >
                    {({ processing, errors }) => (
                        <div className="grid gap-5">
                            {/* Name */}
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-xs font-medium tracking-wide text-foreground">
                                    Full name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Your full name"
                                    className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/40 transition-all duration-200"
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-xs font-medium tracking-wide text-foreground">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/40 transition-all duration-200"
                                />
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-xs font-medium tracking-wide text-foreground">
                                    Password
                                </Label>
                                <PasswordInput
                                    id="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="••••••••"
                                    passwordrules={passwordRules}
                                    className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/30 transition-all duration-200"
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Confirm Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation" className="text-xs font-medium tracking-wide text-foreground">
                                    Confirm password
                                </Label>
                                <PasswordInput
                                    id="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="••••••••"
                                    passwordrules={passwordRules}
                                    className="h-10 border-border/60 bg-background/50 focus-visible:ring-1 focus-visible:ring-primary/50 placeholder:text-muted-foreground/30 transition-all duration-200"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="mt-2 h-10 w-full font-medium text-primary-foreground bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-100 dark:to-neutral-200 hover:opacity-90 shadow-md transition-all duration-200 active:scale-[0.98]"
                                tabIndex={5}
                                data-test="register-user-button"
                            >
                                {processing && <Spinner className="mr-2 h-4 w-4 animate-spin text-current" />}
                                Create account
                            </Button>
                        </div>
                    )}
                </Form>
            </div>
        </>
    );
}

Register.layout = {
    title: '',
    description: '',
};
