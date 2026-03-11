import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from '../../components/StepIndicator';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Step1ProductInfo() {
    const navigate = useNavigate();
    const [category, setCategory] = useState('');

    const categories = [
        { id: 'beverage', icon: 'coffee', label: 'Beverage' },
        { id: 'food', icon: 'restaurant_menu', label: 'Food' },
        { id: 'beauty', icon: 'face_5', label: 'Beauty' },
        { id: 'health', icon: 'medical_services', label: 'Health' },
    ];

    const handleNext = (e) => {
        e.preventDefault();
        navigate('/dashboard/step2');
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Product Details</h1>
            </div>

            <StepIndicator currentStep={1} totalSteps={4} />

            <form onSubmit={handleNext} className="bg-white dark:bg-primary rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-sm flex flex-col gap-10">

                {/* Product Name */}
                <Input
                    id="productName"
                    label="Product Name"
                    placeholder="e.g. Organic Matcha Latte Mix"
                    required
                />

                {/* Category Selection */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Category</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((c) => (
                            <div
                                key={c.id}
                                onClick={() => setCategory(c.id)}
                                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${category === c.id
                                        ? 'border-accent-teal bg-accent-teal/10 text-accent-teal'
                                        : 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-500 hover:border-slate-300 dark:hover:border-slate-700'
                                    }`}
                            >
                                <span className={`material-symbols-outlined text-[32px] ${category === c.id ? 'font-variation-fill' : ''}`}>
                                    {c.icon}
                                </span>
                                <span className="font-bold text-sm tracking-wide text-primary dark:text-white">{c.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Description */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Product Description
                    </label>
                    <textarea
                        id="description"
                        rows="4"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/20 bg-white dark:bg-primary px-4 py-3 text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 resize-none"
                        placeholder="Describe your product's vibe, target audience, and key ingredients..."
                        required
                    />
                </div>

                {/* Brand Logo Upload */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        Brand Logo (Optional)
                    </label>
                    <div className="w-full rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-accent-teal transition-colors bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center py-10 cursor-pointer group">
                        <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-accent-teal mb-4 transition-colors">
                            cloud_upload
                        </span>
                        <p className="text-primary dark:text-white font-medium mb-1">
                            Tap to upload or drag & drop
                        </p>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                            PNG, JPG up to 5MB
                        </p>
                    </div>
                </div>

                <div className="pt-4 flex justify-end">
                    <Button type="submit" variant="dark" className="w-full md:w-auto px-10 gap-2">
                        Continue to Step 2
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}
