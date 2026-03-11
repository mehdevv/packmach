import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

export default function AdminRegulationLibrary() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const regulations = [
        { id: 1, country: "France", code: "fr", name: "Loi AGEC (Anti-Waste Law)", category: "Sustainability", status: "Active", updated: "Oct 24, 2023" },
        { id: 2, country: "European Union", code: "eu", name: "Directive 94/62/EC", category: "Packaging Waste", status: "Active", updated: "Oct 20, 2023" },
        { id: 3, country: "United States", code: "us", name: "FDA Title 21 CFR", category: "Food & Drug", status: "Active", updated: "Sep 15, 2023" },
        { id: 4, country: "Germany", code: "de", name: "VerpackG (Packaging Act)", category: "Compliance", status: "Pending Update", updated: "Aug 02, 2023" },
    ];

    return (
        <div className="flex flex-col gap-8 w-full relative">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Regulation Library</h1>
                <Button variant="primary" className="gap-2" onClick={() => setIsModalOpen(true)}>
                    <span className="material-symbols-outlined">upload_file</span>
                    Upload Regulation
                </Button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-6">

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase tracking-widest leading-loose">
                                <th className="py-4 px-4 font-bold text-left">Regulation Name</th>
                                <th className="py-4 px-4 font-bold text-left">Country / Region</th>
                                <th className="py-4 px-4 font-bold text-left">Category</th>
                                <th className="py-4 px-4 font-bold text-left">Status</th>
                                <th className="py-4 px-4 font-bold text-left">Last Updated</th>
                                <th className="py-4 px-4 w-24"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {regulations.map((reg) => (
                                <tr key={reg.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                                    <td className="py-4 px-4 font-bold text-primary">{reg.name}</td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-2">
                                            <img src={`https://flagcdn.com/w40/${reg.code}.png`} alt={reg.country} className="h-4 w-6 rounded-sm object-cover" />
                                            <span className="text-slate-600 font-medium text-sm">{reg.country}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-md">
                                            {reg.category}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-2 h-2 rounded-full ${reg.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`} />
                                            <span className="text-sm font-medium text-slate-700">{reg.status}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 text-sm text-slate-500">{reg.updated}</td>
                                    <td className="py-4 px-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="text-slate-400 hover:text-accent-teal transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                            </button>
                                            <button className="text-slate-400 hover:text-accent-orange transition-colors" title="Delete">
                                                <span className="material-symbols-outlined text-[20px]">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Upload Regulation PDF">
                <div className="flex flex-col gap-6">
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Upload official government regulation documents. Our AI will automatically parse requirements and ingest them into the compliance rules engine.
                    </p>

                    <div className="w-full rounded-2xl border-2 border-dashed border-slate-200 hover:border-accent-teal transition-colors bg-slate-50 flex flex-col items-center justify-center py-12 cursor-pointer group">
                        <div className="w-16 h-16 rounded-full bg-slate-200 group-hover:bg-accent-teal/10 flex items-center justify-center text-slate-400 group-hover:text-accent-teal mb-4 transition-colors">
                            <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                        </div>
                        <p className="text-primary font-bold mb-1">
                            Select PDF File or Drag & Drop
                        </p>
                        <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                            PDF up to 50MB
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-slate-700">Country / Region</label>
                            <div className="relative">
                                <select className="appearance-none w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/20 cursor-pointer font-medium">
                                    <option>Select Region...</option>
                                    <option>France</option>
                                    <option>European Union</option>
                                    <option>United States</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-sm font-bold text-slate-700">Category</label>
                            <div className="relative">
                                <select className="appearance-none w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/20 cursor-pointer font-medium">
                                    <option>Select Category...</option>
                                    <option>Sustainability</option>
                                    <option>Labeling</option>
                                    <option>Food Safety</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-2">
                        <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button variant="primary" onClick={() => setIsModalOpen(false)} className="gap-2">
                            <span className="material-symbols-outlined">psychology</span>
                            Start AI Ingestion
                        </Button>
                    </div>
                </div>
            </Modal>

        </div>
    );
}
