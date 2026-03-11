import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from '../../components/StepIndicator';
import Button from '../../components/Button';

export default function Step2ExportTarget() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('France');

    const countries = [
        { name: 'France', code: 'fr' },
        { name: 'Germany', code: 'de' },
        { name: 'United Kingdom', code: 'gb' },
        { name: 'United States', code: 'us' },
        { name: 'Canada', code: 'ca' },
        { name: 'Japan', code: 'jp' },
    ];

    const handleNext = () => navigate('/dashboard/step3');
    const handleBack = () => navigate('/dashboard/step1');

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Export Target</h1>
            </div>

            <StepIndicator currentStep={2} totalSteps={4} />

            <div className="flex flex-col gap-10">

                {/* Country Selector */}
                <div className="flex flex-col gap-3">
                    <label className="text-2xl font-bold text-primary dark:text-white">Where are you exporting to?</label>

                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full h-16 bg-white dark:bg-primary border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-between px-6 shadow-sm hover:border-accent-teal transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-slate-400">public</span>
                                <div className="flex items-center gap-2">
                                    <img src={`https://flagcdn.com/w40/${countries.find(c => c.name === selectedCountry)?.code}.png`} alt={selectedCountry} className="h-4 w-6 rounded-sm object-cover" />
                                    <span className="text-lg font-medium text-primary dark:text-white">{selectedCountry}</span>
                                </div>
                            </div>
                            <span className={`material-symbols-outlined text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        {isOpen && (
                            <div className="absolute top-18 left-0 right-0 bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-20 overflow-hidden max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-4">
                                {countries.map((country) => (
                                    <button
                                        key={country.code}
                                        onClick={() => {
                                            setSelectedCountry(country.name);
                                            setIsOpen(false);
                                        }}
                                        className="w-full h-14 px-6 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={country.name} className="h-4 w-6 rounded-sm object-cover" />
                                        <span className="font-medium text-primary dark:text-white">{country.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Regulations Found */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-primary dark:text-white">Regulations Found</h3>
                        <span className="px-3 py-1 bg-accent-teal/20 text-accent-teal text-xs font-bold uppercase tracking-widest rounded-full">
                            3 New Alerts
                        </span>
                    </div>

                    <div className="flex flex-col gap-4">

                        <div className="bg-white dark:bg-primary p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined font-variation-fill">label</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary dark:text-white mb-2">Labeling Requirements</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Article L. 541-9-1 requires specific sorting information (Triman logo) on all recyclable products and packaging.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-primary p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined font-variation-fill">eco</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary dark:text-white mb-2">Sustainability (AGEC Law)</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    New restrictions on "compostable" claims. Plastic packaging must be 100% recyclable or contain recycled content by 2025.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-primary p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined">translate</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary dark:text-white mb-2">Language Compliance</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Toubon Law requires all commercial documents and product labels intended for French consumers to be in French.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col md:flex-row justify-between gap-4 mt-8">
                    <Button variant="outline" onClick={handleBack} className="order-2 md:order-1 px-8">
                        Back
                    </Button>
                    <Button variant="primary" onClick={handleNext} className="order-1 md:order-2 px-10 gap-2">
                        Continue to Step 3
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Button>
                </div>

            </div>
        </div>
    );
}
