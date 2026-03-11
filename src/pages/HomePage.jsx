import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import PricingCard from '../components/PricingCard';

export default function HomePage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative px-6 lg:px-20 py-16 lg:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                    {/* Hero Content */}
                    <div className="flex-1 flex flex-col gap-8 text-left z-10 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h1 className="text-primary dark:text-white text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            Generate <span className="teal-gradient-text">Export-Ready</span> Packaging in Minutes
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed">
                            AI-powered compliance and design for global exporters. Ensure your packaging meets international standards automatically without the legal headache.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/signup">
                                <Button variant="primary" size="lg" className="shadow-accent-teal/20 hover:scale-105">
                                    Generate Free Packaging
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg">
                                See How It Works
                            </Button>
                        </div>
                    </div>

                    {/* Hero Visual Mockup */}
                    <div className="flex-1 relative w-full flex justify-center lg:justify-end animate-in fade-in zoom-in duration-700 delay-200">
                        <div className="relative w-full max-w-[500px] aspect-square bg-gradient-to-tr from-accent-teal/20 to-accent-orange/10 rounded-xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800">

                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1280&auto=format&fit=crop')" }}
                            />

                            {/* Compliance Floating Badge */}
                            <div className="absolute top-6 left-6 bg-white/90 dark:bg-primary/90 backdrop-blur p-4 rounded-lg shadow-xl flex items-center gap-3 border border-accent-teal/30">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-accent-teal">verified</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Compliance Status</p>
                                    <p className="text-sm font-bold text-primary dark:text-white">EU Standards Met</p>
                                </div>
                            </div>

                            {/* Requirements Floating Card */}
                            <div className="absolute bottom-6 right-6 bg-white dark:bg-primary p-5 rounded-lg shadow-2xl w-64 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-2 mb-3">
                                    <img src="https://flagcdn.com/w40/fr.png" alt="France" className="h-4 w-6 rounded-sm object-cover" />
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Target: France</span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-accent-teal text-base">check_circle</span> French Translation Added
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-accent-teal text-base">check_circle</span> Nutri-Score Included
                                    </li>
                                    <li className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                                        <span className="material-symbols-outlined text-accent-teal text-base">check_circle</span> Eco-Emballages Logo
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Flags Marquee */}
            <div className="w-full bg-slate-100 dark:bg-slate-900 py-6 overflow-hidden border-y border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-12 whitespace-nowrap overflow-x-auto no-scrollbar px-6 w-max mx-auto md:w-full md:mx-0 justify-center">
                    {/* Just hardcode a few for now since marquee css isn't set up yet, to match visual */}
                    {['France:fr', 'Germany:de', 'USA:us', 'Saudi Arabia:sa', 'UAE:ae', 'UK:gb', 'Canada:ca'].map(country => {
                        const [name, code] = country.split(':');
                        return (
                            <div key={code} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-default opacity-60 hover:opacity-100">
                                <img src={`https://flagcdn.com/w40/${code}.png`} alt={name} className="w-6 h-4 rounded-sm object-cover" />
                                <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* How It Works Section */}
            <section className="px-6 lg:px-20 py-20 bg-slate-50 dark:bg-primary/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">How It Works</h2>
                        <div className="w-20 h-1 bg-accent-teal mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal font-bold text-xl border border-accent-teal/20">
                                01
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-primary dark:text-white">
                                    <span className="material-symbols-outlined">edit_note</span>
                                    <h3 className="text-xl font-bold">Describe Product</h3>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Input your product name, ingredients, dimensions, and unique selling points into our AI engine.</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center text-accent-orange font-bold text-xl border border-accent-orange/20">
                                02
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-primary dark:text-white">
                                    <span className="material-symbols-outlined">public</span>
                                    <h3 className="text-xl font-bold">Choose Country</h3>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Select one or multiple target markets. Our AI instantly loads local regulations and language requirements.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal font-bold text-xl border border-accent-teal/20">
                                03
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-primary dark:text-white">
                                    <span className="material-symbols-outlined">inventory_2</span>
                                    <h3 className="text-xl font-bold">Get Packaging</h3>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Download your print-ready files in high resolution with all required symbols and legal notices in place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="px-6 lg:px-20 py-20 bg-white dark:bg-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-primary dark:text-white">Product Categories</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-2">Tailored solutions for every industry sector.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            { icon: 'restaurant', label: 'Food & Beverage' },
                            { icon: 'face_5', label: 'Cosmetics & Beauty' },
                            { icon: 'medication', label: 'Pharmaceuticals' },
                            { icon: 'checkroom', label: 'Textile & Clothing' },
                            { icon: 'devices', label: 'Electronics' },
                            { icon: 'auto_awesome', label: 'Artisanal Products' },
                        ].map((cat) => (
                            <div key={cat.label} className="group p-6 text-center rounded-2xl bg-background-light dark:bg-slate-900 border border-transparent hover:border-accent-teal transition-all flex flex-col items-center gap-4 cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-white dark:bg-primary flex items-center justify-center text-accent-teal shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                                </div>
                                <h4 className="text-sm font-bold text-primary dark:text-white">{cat.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Teaser */}
            <section className="px-6 lg:px-20 py-24 bg-background-light dark:bg-primary/60 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Simple, Transparent Pricing</h2>
                        <p className="text-slate-500">Everything you need to export globally.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <PricingCard
                            name="Free"
                            price="$0"
                            description="Perfect for exploring our AI capabilities."
                            features={[
                                { text: '1 Product Design / mo', included: true },
                                { text: '1 Target Country', included: true },
                                { text: 'Commercial Export License', included: false },
                            ]}
                            buttonText="Start Free"
                        />
                        <PricingCard
                            name="Premium"
                            price="$49"
                            description="Scalable solution for active exporters."
                            isPopular={true}
                            features={[
                                { text: 'Unlimited Designs', included: true },
                                { text: '150+ Countries', included: true },
                                { text: 'Export-Ready HD Files', included: true },
                                { text: 'Legal Compliance Guarantee', included: true },
                            ]}
                            buttonText="Go Premium"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
