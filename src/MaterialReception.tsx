import React, { useState } from 'react';

interface MaterialReceptionProps {
    productsList: any[];
    employeesList: any[];
    onSubmit: (data: any) => Promise<void>;
    onCancel: () => void;
    isLoading: boolean;
}

const MaterialReception: React.FC<MaterialReceptionProps> = ({
    productsList,
    employeesList,
    onSubmit,
    onCancel,
    isLoading
}) => {
    const [formData, setFormData] = useState({
        product: '',
        invoice: '',
        user: '',
        quantity: '',
        unit: ''
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
        onSubmit(formData);
    };

    return (
        <div className="bg-white dark:bg-gray-900 rounded-[12px] shadow-sm border border-gray-100 dark:border-gray-800 p-6 max-w-md mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Material Reception</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Complete the details below to log incoming materials.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Product</label>
                    <div className="relative flex items-center">
                        <select
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="custom-select w-full h-12 px-4 pr-10 rounded-[12px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            required
                        >
                            <option value="" disabled>Select product</option>
                            {productsList.map(item => (
                                <option key={item.id} value={item.Product}>{item.Product}</option>
                            ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3 pointer-events-none text-gray-400">expand_more</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Invoice Number</label>
                    <input
                        type="text"
                        name="invoice"
                        value={formData.invoice}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-[12px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="e.g. INV-2023-001"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">User</label>
                    <div className="relative flex items-center">
                        <select
                            name="user"
                            value={formData.user}
                            onChange={handleChange}
                            className="custom-select w-full h-12 px-4 pr-10 rounded-[12px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            required
                        >
                            <option value="" disabled>Select user</option>
                            {employeesList.map(emp => (
                                <option key={emp.id} value={emp.employee_name}>{emp.employee_name}</option>
                            ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3 pointer-events-none text-gray-400">expand_more</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-[12px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="00.00"
                            step="0.01"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Unit</label>
                        <input
                            type="text"
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                            className="w-full h-12 px-4 rounded-[12px] border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="e.g. Tons, m³"
                            required
                        />
                    </div>
                </div>

                <div className="pt-4 space-y-3">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-14 bg-primary text-white font-bold rounded-[12px] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-md shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Submitting...' : 'Submit Reception'}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full h-14 bg-transparent text-gray-500 dark:text-gray-400 font-medium rounded-[12px] hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-transparent"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MaterialReception;
