import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

export default function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard'); // simulate login
    };

    return (
        <div className="flex min-h-screen w-full bg-white dark:bg-primary">

            {/* Left Panel - Testimonial/Brand (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <Link to="/" className="flex items-center gap-2 text-accent-teal w-fit hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-3xl font-bold">package_2</span>
                        <span className="text-white text-2xl font-bold tracking-tight">PackMach</span>
                    </Link>
                </div>

                <div className="relative z-10 max-w-lg mb-20 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="material-symbols-outlined text-accent-teal text-6xl opacity-50 mb-6 block">format_quote</span>
                    <h2 className="text-3xl font-bold text-white leading-tight mb-8">
                        "PackMach cut our market entry time from 6 months down to 2 weeks. The automated compliance checks are a lifesaver for our export team."
                    </h2>
                    <div className="flex items-center gap-4">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah" className="w-12 h-12 rounded-full bg-slate-800" />
                        <div>
                            <p className="text-white font-bold">Sarah Jenkins</p>
                            <p className="text-slate-400 text-sm">VP of Global Expansion, HealthFoods Co.</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-slate-500 text-sm flex justify-between">
                    <span>© {new Date().getFullYear()} PackMach AI</span>
                    <a href="#" className="hover:text-white transition-colors">Privacy & Terms</a>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24">
                {/* Mobile Logo */}
                <div className="lg:hidden flex items-center justify-center gap-2 text-accent-teal mb-12">
                    <span className="material-symbols-outlined text-4xl font-bold">package_2</span>
                    <span className="text-primary dark:text-white text-3xl font-bold tracking-tight">PackMach</span>
                </div>

                <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-700">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Welcome back</h1>
                        <p className="text-slate-500">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            label="Email"
                            icon="mail"
                            required
                        />

                        <div className="flex flex-col gap-1.5">
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                label="Password"
                                icon="lock"
                                required
                            />
                            <div className="flex justify-end mt-1">
                                <a href="#" className="text-sm font-bold text-accent-teal hover:underline pr-1">Forgot password?</a>
                            </div>
                        </div>

                        <Button type="submit" variant="primary" fullWidth className="mt-2 h-14">
                            Log In
                        </Button>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Or sign in with</span>
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                        </div>

                        <Button type="button" variant="outline" fullWidth className="h-14 font-medium flex gap-3">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </Button>

                        <p className="text-center text-slate-500 mt-6">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-primary dark:text-white font-bold hover:text-accent-teal transition-colors underline decoration-2 underline-offset-4 decoration-accent-teal/30 hover:decoration-accent-teal">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
