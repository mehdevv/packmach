export default function StepIndicator({ currentStep, totalSteps = 4, className = '' }) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className={`w-full flex flex-col gap-2 ${className}`}>
            <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-slate-500">
                <span>Step {currentStep} of {totalSteps}</span>
                <span className="text-accent-teal">{percentage}% Complete</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                    className="h-full bg-accent-teal rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}
