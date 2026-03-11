import { useState } from 'react';

export default function FAQAccordion({ items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="rounded-2xl bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                        <h4 className="text-lg font-bold text-primary dark:text-white pr-8">
                            {item.question}
                        </h4>
                        <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                            }`}>
                            expand_more
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
