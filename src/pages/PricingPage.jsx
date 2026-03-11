import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';

export default function PricingPage() {
    const faqs = [
        {
            question: "What happens if a target country's regulations change?",
            answer: "Our AI engine is connected to real-time global trade databases. If a country updates their labeling requirements (e.g., changes to recycling logos), the compliance hub will flag your saved packages for review."
        },
        {
            question: "Can I use PackMach designs for physical print production?",
            answer: "Yes, the Premium plan provides high-resolution, print-ready PDF/AI files that include die-lines and CMYK color profiles, ready to send directly to your manufacturer."
        },
        {
            question: "Do you offer enterprise plans for large agencies?",
            answer: "Yes. For teams requiring multiple seats, API access to our compliance engine, and white-label generation, we offer custom Enterprise solutions. Please contact our sales team."
        }
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-primary/50">
            <Navbar />

            <main className="flex-1 w-full flex flex-col items-center px-6 lg:px-20 py-16 lg:py-24">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <div className="bg-accent-teal/10 text-accent-teal text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 relative hover:scale-105 transition-transform cursor-pointer overflow-hidden">
                        PRICING
                        <div className="absolute inset-0 bg-accent-teal/20 blur-xl"></div>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight">
                        Scale your exports <br /> without scaling compliance costs.
                    </h1>
                    <p className="text-slate-500 text-lg">
                        Choose the plan that fits your business needs. Upgrade anytime as you enter new markets.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
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

                {/* FAQ Section */}
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <div className="flex items-center gap-3 text-slate-400 font-bold text-xs uppercase tracking-widest mb-8 w-full justify-center">
                        <span className="h-px bg-slate-200 dark:bg-slate-700 flex-1 max-w-[100px]" />
                        FREQUENTLY ASKED QUESTIONS
                        <span className="h-px bg-slate-200 dark:bg-slate-700 flex-1 max-w-[100px]" />
                    </div>

                    <div className="w-full">
                        <FAQAccordion items={faqs} />
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
