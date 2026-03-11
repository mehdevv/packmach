import GenerationCard from '../../components/GenerationCard';
import Input from '../../components/Input';

export default function GenerationHistory() {
    const generations = [
        {
            id: 1,
            imageSrc: "https://images.unsplash.com/photo-1608408843596-fdd1d8583486?q=80&w=400&auto=format&fit=crop",
            title: "Eco-Friendly Box",
            category: "Sustainable",
            country: "USA",
            flagSrc: "https://flagcdn.com/w40/us.png",
            styleLabel: "Minimalist",
            date: "OCT 24, 2023"
        },
        {
            id: 2,
            imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
            title: "Luxury Serum Bottle",
            category: "Premium",
            country: "France",
            flagSrc: "https://flagcdn.com/w40/fr.png",
            styleLabel: "Elegant",
            date: "OCT 22, 2023"
        },
        {
            id: 3,
            imageSrc: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=400&auto=format&fit=crop",
            title: "Artisanal Coffee Bag",
            category: "Craft",
            country: "Brazil",
            flagSrc: "https://flagcdn.com/w40/br.png",
            styleLabel: "Vibrant",
            date: "OCT 20, 2023"
        },
        {
            id: 4,
            imageSrc: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=400&auto=format&fit=crop",
            title: "Fusion Beverage Bottle",
            category: "Modern",
            country: "Japan",
            flagSrc: "https://flagcdn.com/w40/jp.png",
            styleLabel: "Cyber",
            date: "OCT 18, 2023"
        }
    ];

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">History</h1>
                <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-symbols-outlined text-slate-500">more_vert</span>
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                    <div className="w-full md:flex-1">
                        <Input
                            id="search"
                            placeholder="Search generations..."
                            icon="search"
                            className="bg-white dark:bg-primary shadow-sm h-14"
                        />
                    </div>

                    <div className="flex w-full md:w-auto gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar shrink-0">
                        <select className="px-5 py-3.5 bg-primary text-white font-bold rounded-full text-sm outline-none appearance-none pr-10 relative cursor-pointer shadow-lg shadow-primary/20 shrink-0">
                            <option>All Styles</option>
                            <option>Minimalist</option>
                            <option>Premium</option>
                        </select>

                        <select className="px-5 py-3.5 bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 text-primary dark:text-white font-bold rounded-full text-sm outline-none appearance-none pr-10 cursor-pointer shadow-sm shrink-0">
                            <option>Recent</option>
                            <option>Oldest</option>
                        </select>

                        <select className="px-5 py-3.5 bg-white dark:bg-primary border border-slate-200 dark:border-slate-800 text-primary dark:text-white font-bold rounded-full text-sm outline-none appearance-none pr-10 cursor-pointer shadow-sm shrink-0">
                            <option>Packaging</option>
                            <option>Labels</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {generations.map((gen) => (
                        <GenerationCard key={gen.id} {...gen} />
                    ))}
                </div>
            </div>

            {/* FAB for Mobile */}
            <button className="md:hidden fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined font-bold">add</span>
            </button>

        </div>
    );
}
