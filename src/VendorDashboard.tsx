import React from 'react';

const VendorDashboard = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased">
            {/* TopAppBar */}
            <div className="flex items-center bg-white dark:bg-slate-900 p-4 pb-2 justify-between sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
                <div className="text-primary flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <span className="material-symbols-outlined">analytics</span>
                </div>
                <div className="flex-1 px-4">
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">CTS-ERP Intelligence</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Vendor &amp; Spare Parts</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[20px]">account_circle</span>
                    </button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white dark:bg-slate-900 px-4">
                <div className="flex gap-6 overflow-x-auto no-scrollbar">
                    <a className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 pt-4 whitespace-nowrap" href="#">
                        <p className="text-sm font-bold tracking-wide uppercase">Dashboard</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap" href="#">
                        <p className="text-sm font-bold tracking-wide uppercase">Vendors</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap" href="#">
                        <p className="text-sm font-bold tracking-wide uppercase">Prices</p>
                    </a>
                    <a className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 pt-4 whitespace-nowrap" href="#">
                        <p className="text-sm font-bold tracking-wide uppercase">Inventory</p>
                    </a>
                </div>
            </div>

            <main className="p-4 space-y-6">
                {/* Section 1: Logistics Impact Metrics (Circular Gauges Style) */}
                <section>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                            <div className="relative flex items-center justify-center">
                                <svg className="size-20 transform -rotate-90">
                                    <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="6"></circle>
                                    <circle className="text-primary" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeDasharray="213" strokeDashoffset="21" strokeWidth="6"></circle>
                                </svg>
                                <span className="absolute text-sm font-bold">92%</span>
                            </div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mt-2 text-slate-500">Vendor Reliability</p>
                        </div>
                        <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
                            <div className="relative flex items-center justify-center">
                                <svg className="size-20 transform -rotate-90">
                                    <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeWidth="6"></circle>
                                    <circle className="text-success" cx="40" cy="40" fill="transparent" r="34" stroke="currentColor" strokeDasharray="213" strokeDashoffset="55" strokeWidth="6"></circle>
                                </svg>
                                <span className="absolute text-sm font-bold">$4.2k</span>
                            </div>
                            <p className="text-[10px] uppercase tracking-wider font-bold mt-2 text-slate-500">Avg. Savings</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Inventory Criticality Cards */}
                <section className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white text-base font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-danger text-[20px]">warning</span>
                        Low Stock Criticality
                    </h3>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {/* Card 1 */}
                        <div className="min-w-[280px] bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-danger shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Heavy Duty Brake Pads</p>
                                    <p className="text-xs text-slate-500">Stock: 2 units left</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">tire_repair</span>
                            </div>
                            <div className="bg-primary/5 dark:bg-primary/10 rounded p-2 mb-3">
                                <p className="text-[10px] font-bold text-primary uppercase mb-1">AI Suggestion</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs font-medium">Brake-Line Inc.</p>
                                    <p className="text-xs font-bold text-success">$145.00</p>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-2 rounded font-bold text-sm">Order Now</button>
                        </div>
                        {/* Card 2 */}
                        <div className="min-w-[280px] bg-white dark:bg-slate-900 p-4 rounded-lg border-l-4 border-warning shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Fuel Filter - Type B</p>
                                    <p className="text-xs text-slate-500">Stock: 8 units left</p>
                                </div>
                                <span className="material-symbols-outlined text-slate-400">filter_alt</span>
                            </div>
                            <div className="bg-primary/5 dark:bg-primary/10 rounded p-2 mb-3">
                                <p className="text-[10px] font-bold text-primary uppercase mb-1">AI Suggestion</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs font-medium">Global Filters Co.</p>
                                    <p className="text-xs font-bold text-success">$32.50</p>
                                </div>
                            </div>
                            <button className="w-full bg-primary text-white py-2 rounded font-bold text-sm">Order Now</button>
                        </div>
                    </div>
                </section>

                {/* Section 3: Vendor Comparison Matrix */}
                <section className="space-y-3">
                    <h3 className="text-slate-900 dark:text-white text-base font-bold">Vendor Comparison Matrix</h3>
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm overflow-hidden">
                        <div className="p-4 space-y-4">
                            {/* Row 1 */}
                            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-500">tire_repair</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Michelin X Multi</p>
                                            <p className="text-xs text-slate-500">Vendor: Tire Master Ltd</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">$450.00</p>
                                        <div className="flex text-warning">
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px]">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-medium text-slate-500">
                                        <span>Delivery Lead Time</span>
                                        <span>2 Days</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-success rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                            {/* Row 2 */}
                            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-500">oil_barrel</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Shell Rimula R4</p>
                                            <p className="text-xs text-slate-500">Vendor: Petro-Global</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">$120.00</p>
                                        <div className="flex text-warning">
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px] fill-1">star</span>
                                            <span className="material-symbols-outlined text-[14px]">star</span>
                                            <span className="material-symbols-outlined text-[14px]">star</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] font-medium text-slate-500">
                                        <span>Delivery Lead Time</span>
                                        <span>5 Days</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-warning rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-600 dark:text-slate-400">VIEW FULL MATRIX</button>
                    </div>
                </section>

                {/* Section 4: Price Variance Chart (Visual Mockup) */}
                <section className="space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-slate-900 dark:text-white text-base font-bold">Price Variance (6m)</h3>
                        <div className="flex gap-2">
                            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                                <span className="size-2 rounded-full bg-primary"></span> Tires
                            </span>
                            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
                                <span className="size-2 rounded-full bg-success"></span> Fuel
                            </span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm">
                        <div className="h-32 flex items-end justify-between gap-1">
                            {/* Simulated multi-line graph pillars for visual representation */}
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-12 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-8 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">JAN</p>
                            </div>
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-10 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-9 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">FEB</p>
                            </div>
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-14 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-11 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">MAR</p>
                            </div>
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-12 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-10 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">APR</p>
                            </div>
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-13 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-12 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">MAY</p>
                            </div>
                            <div className="flex-1 space-y-1 group">
                                <div className="h-16 bg-primary/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-15 bg-primary rounded-t-sm"></div>
                                </div>
                                <div className="h-12 bg-success/20 rounded-t-sm relative">
                                    <div className="absolute bottom-0 w-full h-9 bg-success rounded-t-sm"></div>
                                </div>
                                <p className="text-[8px] text-center text-slate-400 mt-2">JUN</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="pb-20"></div> {/* Spacer for bottom navigation if any */}
            </main>

            {/* Bottom Navigation Bar (iOS Style) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center z-50">
                <button className="flex flex-col items-center gap-1 text-primary">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="text-[10px] font-bold">Dash</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span className="text-[10px] font-bold">Parts</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">handshake</span>
                    <span className="text-[10px] font-bold">Vendors</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-[10px] font-bold">Admin</span>
                </button>
            </div>
        </div>
    );
};

export default VendorDashboard;
