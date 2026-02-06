import React, { useState } from 'react';

interface WarehouseLocationProps {
    warehouseList: any[];
    isLoading: boolean;
    onSubmit: (data: any) => Promise<void>;
    onCancel?: () => void;
}

const WarehouseLocation: React.FC<WarehouseLocationProps> = ({
    warehouseList,
    isLoading,
    onSubmit,
    onCancel
}) => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
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
        <div className="w-full max-w-6xl mx-auto">
            {/* Form Header */}
            <div className="mb-8">
                <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Warehouse & Location Creation</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Configure a new storage asset for the CS Transportation network.</p>
            </div>

            {/* Form Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6 mb-8">
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
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating...' : 'Create Warehouse/Location'}
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
            <div className="mb-8 flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl">info</span>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    Created assets will be immediately available in the inventory management module for tracking and dispatching.
                </p>
            </div>

            {/* Warehouses Table */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                <h2 className="text-slate-900 dark:text-white text-xl font-bold mb-4">Registered Warehouses & Locations</h2>

                {warehouseList.length === 0 ? (
                    <p className="text-slate-500 dark:text-slate-400 text-center py-8">No warehouses registered yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-700">
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">ID</th>
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">Warehouse</th>
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">Location</th>
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">Capacity (m³)</th>
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">Material Type</th>
                                    <th className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold text-sm">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {warehouseList.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="py-3 px-4 text-slate-900 dark:text-white text-sm">{item.id}</td>
                                        <td className="py-3 px-4 text-slate-900 dark:text-white text-sm font-medium">{item.warehouse}</td>
                                        <td className="py-3 px-4 text-slate-900 dark:text-white text-sm">{item.location}</td>
                                        <td className="py-3 px-4 text-slate-900 dark:text-white text-sm">{parseFloat(item.capacity).toFixed(2)}</td>
                                        <td className="py-3 px-4 text-slate-900 dark:text-white text-sm">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {item.material_type}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4 text-slate-500 dark:text-slate-400 text-sm">
                                            {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WarehouseLocation;

