import Button from './Button';

export default function PricingCard({
    name,
    price,
    description,
    features,
    isPopular = false,
    buttonText = 'Get Started'
}) {
    return (
        <div className={`relative p-10 rounded-2xl flex flex-col gap-8 flex-1 ${isPopular
                ? 'bg-primary dark:bg-accent-teal/5 border-2 border-accent-teal overflow-hidden'
                : 'bg-white dark:bg-primary/40 border border-slate-200 dark:border-slate-800'
            }`}>
            {isPopular && (
                <div className="absolute top-0 right-0 bg-accent-teal px-4 py-1 text-primary text-xs font-bold uppercase tracking-widest rounded-bl-lg">
                    Most Popular
                </div>
            )}

            <div className="flex flex-col gap-2">
                <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-primary dark:text-white'}`}>
                    {name}
                </h3>
                <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-primary dark:text-white'}`}>
                        {price}
                    </span>
                    <span className="text-slate-400">/mo</span>
                </div>
                <p className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {description}
                </p>
            </div>

            <ul className="flex flex-col gap-4">
                {features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 ${isPopular
                            ? 'text-slate-100'
                            : feature.included ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400'
                        }`}>
                        <span className={`material-symbols-outlined text-xl ${feature.included
                                ? 'text-accent-teal'
                                : 'text-slate-300'
                            }`}>
                            {feature.included ? 'check' : 'close'}
                        </span>
                        {feature.text}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-8">
                <Button
                    variant={isPopular ? 'primary' : 'outline'}
                    fullWidth
                    className={isPopular ? '' : 'border-2'}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
