import React, { useState } from 'react';

interface WarehouseLocationProps {
    onCancel?: () => void;
}

const WarehouseLocation: React.FC<WarehouseLocationProps> = ({ onCancel }) => {
    const [formData, setFormData] = useState({
        warehouse: '',
        location: '',
        capacity: '',
        materialType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement database save logic
        console.log('Form data:', formData);
        alert(`Warehouse/Location Created!\nWarehouse: ${formData.warehouse}\nLocation: ${formData.location}`);
        // Reset form
        setFormData({
            warehouse: '',
            location: '',
            capacity: '',
            materialType: ''
        });
    };

    const handleCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Form Header */}
            <div className="mb-8">
                <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Warehouse & Location Creation</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Configure a new storage asset for the CS Transportation network.</p>
            </div>

            {/* Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Warehouse Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Warehouse</label>
                        <div className="relative">
                            <input
                                name="warehouse"
                                value={formData.warehouse}
                                onChange={handleChange}
                                className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                placeholder="e.g., North Hub A1"
                                type="text"
                                required
                            />
                        </div>
                    </div>

                    {/* Location Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Location</label>
                        <div className="relative">
                            <input
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                placeholder="e.g., Aisle 4, Shelf B"
                                type="text"
                                required
                            />
                        </div>
                    </div>

                    {/* Capacity Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Maximum Storage Capacity</label>
                        <div className="relative">
                            <input
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                className="w-full h-12 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                placeholder="0.00"
                                type="number"
                                step="0.01"
                                required
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <span className="text-slate-400 text-sm font-medium">m³</span>
                            </div>
                        </div>
                    </div>

                    {/* Material Type Dropdown */}
                    <div className="flex flex-col gap-2">
                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Material Type</label>
                        <div className="relative">
                            <select
                                name="materialType"
                                value={formData.materialType}
                                onChange={handleChange}
                                className="w-full h-12 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 cursor-pointer"
                                required
                            >
                                <option value="" disabled>Select type...</option>
                                <option value="perishable">Perishable Goods</option>
                                <option value="hazardous">Hazardous Materials</option>
                                <option value="electronics">Electronics</option>
                                <option value="dry">Dry Storage</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col gap-3">
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-md active:scale-[0.98]"
                        >
                            Create Warehouse/Location
                        </button>
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="w-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold py-3 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>

            {/* System Message / Info */}
            <div className="mt-8 flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl">info</span>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    Created assets will be immediately available in the inventory management module for tracking and dispatching.
                </p>
            </div>
        </div>
    );
};

export default WarehouseLocation;
