import { useNavigate } from 'react-router-dom';
import StepIndicator from '../../components/StepIndicator';
import Button from '../../components/Button';

export default function Step4Results() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Results</h1>
            </div>

            <StepIndicator currentStep={4} totalSteps={4} />

            <div className="flex flex-col gap-8">

                <h2 className="text-2xl font-bold text-primary dark:text-white">Generated Packaging Design</h2>

                {/* 3D Mockup Container */}
                <div className="w-full aspect-square md:aspect-video rounded-3xl overflow-hidden relative group bg-slate-900 border border-slate-800 shadow-2xl animate-in zoom-in-95 duration-1000">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] group-hover:scale-110 ease-linear"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1280&auto=format&fit=crop')" }}
                    />
                    {/* Controls overlay */}
                    <div className="absolute bottom-6 right-6 flex gap-2">
                        <button className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-accent-teal hover:text-white transition-colors shadow-lg">
                            <span className="material-symbols-outlined">360</span>
                        </button>
                        <button className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-accent-teal hover:text-white transition-colors shadow-lg">
                            <span className="material-symbols-outlined">zoom_in</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Compliance Report */}
                    <div className="bg-white dark:bg-primary p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-accent-teal font-variation-fill text-3xl">verified</span>
                            <h3 className="text-xl font-bold text-primary dark:text-white">Compliance Report</h3>
                        </div>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent-teal font-variation-fill text-xl shrink-0 mt-0.5">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 font-medium">FDA Labeling Requirements met</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent-teal font-variation-fill text-xl shrink-0 mt-0.5">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 font-medium">Eco-friendly Material Standards verified</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent-teal font-variation-fill text-xl shrink-0 mt-0.5">check_circle</span>
                                <span className="text-slate-600 dark:text-slate-300 font-medium">Barcode Readability Check passed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Design Rationale */}
                    <div className="bg-white dark:bg-primary p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Design Rationale</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The design utilizes a minimalist aesthetic with high-contrast elements to ensure shelf visibility. The use of <span className="text-accent-teal font-bold bg-accent-teal/10 px-2 py-0.5 rounded">#00D4AA</span> as an accent color communicates freshness and modernity, while the primary navy provides a premium, trustworthy base. Typography has been selected for maximum legibility at various distances.
                        </p>
                    </div>

                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button variant="dark" fullWidth className="h-16 text-lg gap-3">
                        <span className="material-symbols-outlined">download</span>
                        Download Assets
                    </Button>
                    <div className="flex gap-4 w-full sm:w-auto">
                        <Button variant="outline" fullWidth className="h-16 gap-2 border-2 bg-slate-50 dark:bg-slate-800 border-transparent">
                            <span className="material-symbols-outlined">refresh</span>
                            Regenerate
                        </Button>
                        <Button variant="outline" fullWidth className="h-16 gap-2 border-2 bg-slate-50 dark:bg-slate-800 border-transparent">
                            <span className="material-symbols-outlined">share</span>
                            Share
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
