import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from '../../components/StepIndicator';
import Button from '../../components/Button';

export default function Step3StylePreferences() {
    const navigate = useNavigate();
    const [styleMode, setStyleMode] = useState('minimalist');
    const [colorPalette, setColorPalette] = useState('vibrant');

    const styles = [
        { id: 'minimalist', icon: 'view_carousel', label: 'Minimalist', desc: 'Clean lines and whitespace' },
        { id: 'premium', icon: 'diamond', label: 'Premium', desc: 'Elegant and luxury focused' },
        { id: 'traditional', icon: 'history_edu', label: 'Traditional', desc: 'Classic and time-tested' },
        { id: 'modern', icon: 'bolt', label: 'Modern', desc: 'Bold and contemporary' },
    ];

    const palettes = [
        { id: 'earth', label: 'Earth Tones', colors: ['bg-[#713f12]', 'bg-[#14532d]', 'bg-[#78350f]', 'bg-[#fef3c7]'] },
        { id: 'vibrant', label: 'Vibrant', colors: ['bg-[#ec4899]', 'bg-[#06b6d4]', 'bg-[#f59e0b]', 'bg-[#8b5cf6]'] },
        { id: 'monochrome', label: 'Monochrome', colors: ['bg-[#0f172a]', 'bg-[#334155]', 'bg-[#94a3b8]', 'bg-[#f8fafc]'] },
    ];

    const handleNext = () => navigate('/dashboard/step4');
    const handleBack = () => navigate('/dashboard/step2');

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Style Preferences</h1>
            </div>

            <StepIndicator currentStep={3} totalSteps={4} />

            <div className="flex flex-col gap-10">

                {/* Style Selection */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary dark:text-white mb-2">
                        <span className="material-symbols-outlined text-accent-teal">category</span>
                        <h3 className="text-xl font-bold">Packaging Style</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        {styles.map((s) => (
                            <div
                                key={s.id}
                                onClick={() => setStyleMode(s.id)}
                                className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${styleMode === s.id
                                        ? 'border-accent-teal bg-accent-teal/5'
                                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-primary hover:border-slate-300 dark:hover:border-slate-700'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${styleMode === s.id ? 'bg-accent-teal text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                        }`}>
                                        <span className="material-symbols-outlined">{s.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary dark:text-white text-lg">{s.label}</h4>
                                        <p className="text-sm text-slate-500">{s.desc}</p>
                                    </div>
                                </div>
                                {styleMode === s.id && (
                                    <span className="material-symbols-outlined text-accent-teal font-variation-fill text-2xl">check_circle</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Color Palette */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary dark:text-white mb-2">
                        <span className="material-symbols-outlined text-accent-teal">palette</span>
                        <h3 className="text-xl font-bold">Color Palette</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {palettes.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => setColorPalette(p.id)}
                                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${colorPalette === p.id
                                        ? 'border-accent-teal bg-white dark:bg-primary shadow-md'
                                        : 'border-transparent bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                                    }`}
                            >
                                <div className="w-full aspect-square rounded-xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 content-center items-center justify-items-center bg-white p-1">
                                    {p.colors.map((colorClass, i) => (
                                        <div key={i} className={`w-full h-full rounded-md ${colorClass}`} />
                                    ))}
                                </div>
                                <span className="font-bold text-sm text-primary dark:text-white text-center w-full truncate">{p.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Label Language Dropdown */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-primary dark:text-white mb-1">
                        <span className="material-symbols-outlined text-accent-teal">translate</span>
                        <h3 className="text-xl font-bold">Label Language</h3>
                    </div>
                    <div className="relative">
                        <select className="appearance-none w-full h-14 bg-white dark:bg-primary border border-slate-200 dark:border-slate-700 rounded-xl px-4 text-slate-900 dark:text-white outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/20 cursor-pointer font-medium">
                            <option value="fr">French (Auto-suggested)</option>
                            <option value="en">English</option>
                            <option value="de">German</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                    <p className="text-xs text-slate-500 italic">Suggested based on your brand headquarters in Lyon.</p>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col md:flex-row justify-between gap-4 mt-8 bg-background-light dark:bg-primary/50 -mx-4 px-4 py-6 md:mx-0 md:px-0 md:bg-transparent md:py-0 border-t border-slate-200 dark:border-slate-800 md:border-t-0">
                    <Button variant="outline" onClick={handleBack} className="order-2 md:order-1 px-8">
                        Back
                    </Button>
                    <Button variant="primary" onClick={handleNext} className="order-1 md:order-2 px-10 gap-2 shadow-accent-teal/30 shadow-xl animate-pulse">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        Generate Packaging
                    </Button>
                </div>

            </div>
        </div>
    );
}
