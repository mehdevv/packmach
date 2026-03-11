import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

export default function SignupPage() {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        navigate('/pricing'); // direct to pricing after signup
    };

    return (
        <div className="flex min-h-screen w-full bg-white dark:bg-primary">

            {/* Left Panel - Features/Brand (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">
                {/* Decorative background blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <Link to="/" className="flex items-center gap-2 text-accent-teal w-fit hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined text-3xl font-bold">package_2</span>
                        <span className="text-white text-2xl font-bold tracking-tight">PackMach</span>
                    </Link>
                </div>

                <div className="relative z-10 max-w-lg mb-20 animate-in fade-in slide-in-from-left-8 duration-700">
                    <h2 className="text-4xl font-bold text-white leading-tight mb-10">
                        Start exporting with confidence today.
                    </h2>

                    <ul className="flex flex-col gap-6 text-slate-300">
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                            </div>
                            <span className="text-lg">Generate unlimited automated designs</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                            </div>
                            <span className="text-lg">Access compliance rules for 150+ countries</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                            </div>
                            <span className="text-lg">Download print-ready CMYK files</span>
                        </li>
                    </ul>
                </div>

                <div className="relative z-10 text-slate-500 text-sm flex justify-between">
                    <span>© {new Date().getFullYear()} PackMach AI</span>
                    <a href="#" className="hover:text-white transition-colors">Privacy & Terms</a>
                </div>
            </div>

            {/* Right Panel - Signup Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 py-12">
                {/* Mobile Logo */}
                <div className="lg:hidden flex items-center justify-center gap-2 text-accent-teal mb-12">
                    <span className="material-symbols-outlined text-4xl font-bold">package_2</span>
                    <span className="text-primary dark:text-white text-3xl font-bold tracking-tight">PackMach</span>
                </div>

                <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-right-8 duration-700">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-primary dark:text-white mb-2">Create an account</h1>
                        <p className="text-slate-500">Sign up to start generating packaging instantly.</p>
                    </div>

                    <form onSubmit={handleSignup} className="flex flex-col gap-5">
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="e.g. Jane Doe"
                            label="Full Name"
                            icon="person"
                            required
                        />

                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your work email"
                            label="Email"
                            icon="mail"
                            required
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                label="Password"
                                required
                            />
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                label="Confirm Password"
                                required
                            />
                        </div>

                        <Button type="submit" variant="primary" fullWidth className="mt-4 h-14">
                            Create Account
                        </Button>

                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">Or get started with</span>
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                        </div>

                        <Button type="button" variant="outline" fullWidth className="h-14 font-medium flex gap-3">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                            Sign up with Google
                        </Button>

                        <p className="text-center text-slate-500 mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="text-primary dark:text-white font-bold hover:text-accent-teal transition-colors underline decoration-2 underline-offset-4 decoration-accent-teal/30 hover:decoration-accent-teal">
                                Log in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
