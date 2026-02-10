import React, { useState } from 'react';

const ScrapAndWaste = () => {
    const [formData, setFormData] = useState({
        product: '',
        defectType: '',
        quantity: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        if (!formData.product || !formData.defectType || !formData.quantity) {
            alert('Please fill in all fields');
            return;
        }

        const dataToSave = {
            ...formData,
            timestamp: new Date().toISOString(),
            id: crypto.randomUUID()
        };

        const jsonString = JSON.stringify(dataToSave, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = `scrap_entry_${new Date().getTime()}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);

        // Reset form or show success message
        alert('Scrap entry saved to Downloads folder!');
        setFormData({ product: '', defectType: '', quantity: '' });
    };

    return (
        <div className="flex items-center justify-center p-4 min-h-[calc(100vh-100px)]">
            {/* Main Container */}
            <div className="relative w-full max-w-[480px] bg-white dark:bg-[#2d1a1a] rounded-xl shadow-xl overflow-hidden flex flex-col">
                {/* Top App Bar Component */}
                <div className="flex items-center p-4 border-b border-gray-100 dark:border-white/10 justify-between">
                    <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </div>
                    <h2 className="text-[#1b0d0d] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
                        Scrap & Waste Entry
                    </h2>
                </div>
                <div className="px-6 pt-8 pb-4">
                    <h3 className="text-[#1b0d0d] dark:text-white tracking-tight text-2xl font-bold leading-tight text-center">
                        Enter Details
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal text-center mt-2">
                        Please record the waste or loss event for inventory adjustment.
                    </p>
                </div>
                {/* Form Section */}
                <form className="flex flex-col gap-6 px-6 py-4">
                    {/* Product Field */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#1b0d0d] dark:text-white text-sm font-semibold ml-1">
                            Product
                        </label>
                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="form-select-custom flex w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 h-14 px-4 text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        >
                            <option disabled value="">Select product...</option>
                            <option value="p1">Aluminum Coil A-202</option>
                            <option value="p2">Steel Rods 10mm</option>
                            <option value="p3">PVC Pipes Industrial</option>
                            <option value="p4">Copper Wiring Spool</option>
                        </select>
                    </div>
                    {/* Defect Type Field */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#1b0d0d] dark:text-white text-sm font-semibold ml-1">
                            Defect Type
                        </label>
                        <select
                            name="defectType"
                            value={formData.defectType}
                            onChange={handleChange}
                            className="form-select-custom flex w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 h-14 px-4 text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        >
                            <option disabled value="">Select cause...</option>
                            <option value="damaged">Damaged in Transit</option>
                            <option value="expired">Expired Stock</option>
                            <option value="manufacturing">Manufacturing Defect</option>
                            <option value="shipping">Shipping Error</option>
                            <option value="other">Other / Miscellaneous</option>
                        </select>
                    </div>
                    {/* Quantity Field */}
                    <div className="flex flex-col w-full gap-2">
                        <label className="text-[#1b0d0d] dark:text-white text-sm font-semibold ml-1">
                            Quantity
                        </label>
                        <div className="relative">
                            <input
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="flex w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 h-14 px-4 text-base font-normal focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                inputMode="numeric"
                                placeholder="0.00"
                                type="number"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Units</span>
                        </div>
                    </div>
                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 pt-4 pb-8">
                        <button
                            type="button"
                            onClick={handleSave}
                            className="flex h-14 w-full items-center justify-center rounded-lg bg-primary text-white text-base font-bold tracking-wide active:scale-[0.98] transition-all"
                        >
                            Register Scrap
                        </button>
                        <button
                            type="button"
                            className="flex h-14 w-full items-center justify-center rounded-lg bg-transparent border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-base font-semibold active:scale-[0.98] transition-all"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
                {/* Visual Footer / Brand Decor */}
                <div className="h-2 bg-gradient-to-r from-primary to-primary/40 w-full mt-auto"></div>
            </div>
            {/* Company Branding Background Graphic */}
            <div className="fixed -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="fixed -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
    );
};

export default ScrapAndWaste;
