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
        description: '',
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
            description: '',
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
        <div className="w-full max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6">
                <h1 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">Location Management</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Configure storage locations for the CS Transportation network.</p>
            </div>

            {/* Two Column Layout: Form + Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Form */}
                <div className="space-y-4">
                    {/* Form Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Create New Location</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Warehouse Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Warehouse</label>
                                <input
                                    name="warehouse"
                                    value={formData.warehouse}
                                    onChange={handleChange}
                                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="e.g., North Hub A1"
                                    type="text"
                                    required
                                />
                            </div>

                            {/* Location Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Location</label>
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="e.g., Aisle 4, Shelf B"
                                    type="text"
                                    required
                                />
                            </div>

                            {/* Description Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Description</label>
                                <input
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
                                    placeholder="Optional description..."
                                    type="text"
                                />
                            </div>

                            {/* Capacity Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Maximum Storage Capacity</label>
                                <div className="relative">
                                    <input
                                        name="capacity"
                                        value={formData.capacity}
                                        onChange={handleChange}
                                        className="w-full h-11 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400"
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
                                        className="w-full h-11 appearance-none bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>Select type...</option>
                                        <option value="perishable">Perishable Goods</option>
                                        <option value="hazardous">Hazardous Materials</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="dry">Dry Storage</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                                        <span className="material-symbols-outlined text-lg">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="pt-2 flex flex-col gap-3">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Creating...' : 'Create Warehouse/Location'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="w-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold py-2.5 rounded-lg transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Info Message */}
                    <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <span className="material-symbols-outlined text-primary text-lg">info</span>
                        <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                            Created assets will be immediately available in the inventory management module for tracking and dispatching.
                        </p>
                    </div>
                </div>

                {/* Right Column: Table */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold mb-4">Registered Warehouses & Locations</h2>

                    {warehouseList.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="text-slate-400 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">No warehouses registered yet</p>
                            <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Create your first warehouse using the form</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto -mx-2">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                        <th className="text-left py-3 px-3 text-slate-700 dark:text-slate-300 font-semibold text-xs">ID</th>
                                        <th className="text-left py-3 px-3 text-slate-700 dark:text-slate-300 font-semibold text-xs">Warehouse</th>
                                        <th className="text-left py-3 px-3 text-slate-700 dark:text-slate-300 font-semibold text-xs">Location</th>
                                        <th className="text-left py-3 px-3 text-slate-700 dark:text-slate-300 font-semibold text-xs">Capacity</th>
                                        <th className="text-left py-3 px-3 text-slate-700 dark:text-slate-300 font-semibold text-xs">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {warehouseList.map((item) => (
                                        <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="py-3 px-3 text-slate-900 dark:text-white text-xs">{item.id}</td>
                                            <td className="py-3 px-3 text-slate-900 dark:text-white text-sm font-medium">{item.warehouse}</td>
                                            <td className="py-3 px-3 text-slate-600 dark:text-slate-400 text-xs">{item.location}</td>
                                            <td className="py-3 px-3 text-slate-900 dark:text-white text-xs">{parseFloat(item.capacity).toFixed(2)} m³</td>
                                            <td className="py-3 px-3">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                    {item.material_type}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WarehouseLocation;
