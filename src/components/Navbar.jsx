import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4 bg-white/80 dark:bg-primary/80 backdrop-blur-md sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2 text-accent-teal hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-3xl font-bold">package_2</span>
                <h2 className="text-primary dark:text-white text-2xl font-bold tracking-tight">PackMach</h2>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-center gap-8">
                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-accent-teal transition-colors" href="#">Features</a>
                <Link to="/pricing" className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-accent-teal transition-colors">Pricing</Link>
                <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-accent-teal transition-colors" href="#">Countries</a>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center gap-4">
                <Link to="/login" className="text-slate-700 dark:text-slate-200 text-sm font-bold hover:text-accent-teal transition-colors">Login</Link>
                <Link to="/signup">
                    <Button variant="primary" size="sm">Start Free</Button>
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-primary dark:text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span className="material-symbols-outlined text-3xl">
                    {isMenuOpen ? 'close' : 'menu'}
                </span>
            </button>

            {/* Mobile Nav Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-primary border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 md:hidden shadow-xl animate-in slide-in-from-top-4">
                    <a className="text-lg font-bold text-primary dark:text-white" href="#" onClick={() => setIsMenuOpen(false)}>Features</a>
                    <Link to="/pricing" className="text-lg font-bold text-primary dark:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                    <a className="text-lg font-bold text-primary dark:text-white" href="#" onClick={() => setIsMenuOpen(false)}>Countries</a>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-primary dark:text-white">Login</Link>
                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="primary" fullWidth>Start Free</Button>
                    </Link>
                </div>
            )}
        </header>
    );
}
