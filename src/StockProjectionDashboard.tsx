import React from 'react';

const StockProjectionDashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-24 relative">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center p-4 justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
                        <h1 className="text-lg font-bold leading-tight tracking-tight">CS Transportation LLC Stock</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-slate-600">notifications</span>
                        </button>
                        <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-slate-600">account_circle</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Controls */}
            <div className="px-4 py-3 flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
                    <div className="flex gap-2">
                        <div className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 text-sm font-medium">
                            3 Months
                        </div>
                        <div className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-sm font-medium">
                            6 Months
                        </div>
                        <div className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-sm font-medium">
                            12 Months
                        </div>
                    </div>
                    <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="material-symbols-outlined text-[20px]">tune</span>
                    </button>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Demand Multiplier (What-If)</span>
                        <span className="text-sm font-bold text-primary">1.2x</span>
                    </div>
                    <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="2" min="0.5" step="0.1" type="range" defaultValue="1.2" />
                </div>
            </div>

            <main className="px-4 space-y-6">
                {/* Stock Projection Graph Section */}
                <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                    <div className="flex flex-col gap-1 mb-4">
                        <h2 className="text-base font-bold">Stock Projection</h2>
                        <p className="text-xs text-slate-500">Confidence Interval: 95% • Target SKU: GK-902</p>
                    </div>
                    <div className="relative h-48 w-full mt-4">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                            <path d="M0,100 Q50,90 100,110 T200,80 T300,90 T400,60 L400,120 T300,140 T200,130 T100,140 T0,130 Z" fill="rgba(19, 91, 236, 0.05)"></path>
                            <line stroke="#ef4444" strokeDasharray="4,4" strokeWidth="1.5" x1="0" x2="400" y1="120" y2="120"></line>
                            <path d="M0,100 L40,95 L80,105 L120,85" fill="none" stroke="#135bec" strokeLinecap="round" strokeWidth="3"></path>
                            <path d="M120,85 L160,110 L200,90 L240,105 L280,75 L320,85 L360,60 L400,50" fill="none" stroke="#f97316" strokeDasharray="6,4" strokeLinecap="round" strokeWidth="2.5"></path>
                            <circle cx="120" cy="85" fill="#135bec" r="4"></circle>
                        </svg>
                        <div className="flex flex-wrap gap-4 mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span className="text-[10px] font-medium text-slate-600 uppercase">Actual</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-0.5 bg-orange-500 border-t-2 border-dashed border-orange-500"></span>
                                <span className="text-[10px] font-medium text-slate-600 uppercase">Projected</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-0.5 bg-red-500"></span>
                                <span className="text-[10px] font-medium text-slate-600 uppercase">Reorder Pt</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Critical Level Section */}
                <section>
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base font-bold">Critical Level (30 Days)</h2>
                        <a className="text-primary text-xs font-semibold" href="#">View All</a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar py-1">
                        {/* Card 1 */}
                        <div className="flex flex-col shrink-0 w-[240px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Gasket Kit Pro</p>
                                    <p className="text-[10px] text-slate-500 font-medium">SKU: GK-902</p>
                                </div>
                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Critical</span>
                            </div>
                            <div className="space-y-1.5 mb-4">
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Vendor:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Apex Industrials</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Lead Time:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">14 Days</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Est. Arrival:</span>
                                    <span className="font-semibold text-primary">May 12 (4d)</span>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Generate PO
                            </button>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col shrink-0 w-[240px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Hydraulic Oil XL</p>
                                    <p className="text-[10px] text-slate-500 font-medium">SKU: HO-331</p>
                                </div>
                                <span className="bg-orange-100 text-orange-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Warning</span>
                            </div>
                            <div className="space-y-1.5 mb-4">
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Vendor:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Fluid Dynamics Ltd</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Lead Time:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">7 Days</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Est. Arrival:</span>
                                    <span className="font-semibold text-primary">May 20 (12d)</span>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Generate PO
                            </button>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col shrink-0 w-[240px] rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Ceramic Brake Pads</p>
                                    <p className="text-[10px] text-slate-500 font-medium">SKU: BP-105</p>
                                </div>
                                <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Critical</span>
                            </div>
                            <div className="space-y-1.5 mb-4">
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Vendor:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">Global Auto Supply</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Lead Time:</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300">21 Days</span>
                                </div>
                                <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-500">Est. Arrival:</span>
                                    <span className="font-semibold text-primary">May 10 (2d)</span>
                                </div>
                            </div>
                            <button className="w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Generate PO
                            </button>
                        </div>
                    </div>
                </section>

                {/* Inventory Health & Demand Drivers */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-sm font-bold">Inventory Health</h3>
                            <span className="text-[10px] font-semibold text-slate-400 uppercase">Live Metrics</span>
                        </div>
                        <div className="space-y-5">
                            {/* Metric 1 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">Main Thruster Seal</p>
                                    <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Stock Accuracy</p>
                                </div>
                                <div className="flex items-end gap-[1px] h-6 w-32">
                                    <div className="bg-primary w-1 h-[92%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[80%] rounded-t-sm"></div>
                                    <div className="bg-primary w-1 h-[95%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[60%] rounded-t-sm"></div>
                                    <div className="bg-primary w-1 h-[92%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[85%] rounded-t-sm"></div>
                                    <div className="bg-primary w-1 h-[90%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[75%] rounded-t-sm"></div>
                                    <div className="bg-primary w-1 h-[92%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[88%] rounded-t-sm"></div>
                                    <div className="bg-primary w-1 h-[94%] rounded-t-sm"></div>
                                    <div className="bg-primary/20 w-1 h-[70%] rounded-t-sm"></div>
                                </div>
                                <span className="text-xs font-bold text-slate-900 dark:text-white w-8 text-right">92%</span>
                            </div>
                            {/* Metric 2 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">Control Unit B-12</p>
                                    <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Forecast Precision</p>
                                </div>
                                <div className="flex items-end gap-[1px] h-6 w-32">
                                    <div className="bg-green-500 w-1 h-[78%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[50%] rounded-t-sm"></div>
                                    <div className="bg-green-500 w-1 h-[78%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[65%] rounded-t-sm"></div>
                                    <div className="bg-green-500 w-1 h-[72%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[40%] rounded-t-sm"></div>
                                    <div className="bg-green-500 w-1 h-[78%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[55%] rounded-t-sm"></div>
                                    <div className="bg-green-500 w-1 h-[80%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[45%] rounded-t-sm"></div>
                                    <div className="bg-green-500 w-1 h-[78%] rounded-t-sm"></div>
                                    <div className="bg-green-500/20 w-1 h-[60%] rounded-t-sm"></div>
                                </div>
                                <span className="text-xs font-bold text-slate-900 dark:text-white w-8 text-right">78%</span>
                            </div>
                            {/* Metric 3 */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate">Bearing Assembly 44</p>
                                    <p className="text-[9px] text-slate-500 uppercase tracking-tighter">Usage Stability</p>
                                </div>
                                <div className="flex items-end gap-[1px] h-6 w-32">
                                    <div className="bg-orange-500 w-1 h-[64%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[30%] rounded-t-sm"></div>
                                    <div className="bg-orange-500 w-1 h-[64%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[45%] rounded-t-sm"></div>
                                    <div className="bg-orange-500 w-1 h-[64%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[55%] rounded-t-sm"></div>
                                    <div className="bg-orange-500 w-1 h-[64%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[25%] rounded-t-sm"></div>
                                    <div className="bg-orange-500 w-1 h-[60%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[40%] rounded-t-sm"></div>
                                    <div className="bg-orange-500 w-1 h-[64%] rounded-t-sm"></div>
                                    <div className="bg-orange-500/20 w-1 h-[50%] rounded-t-sm"></div>
                                </div>
                                <span className="text-xs font-bold text-slate-900 dark:text-white w-8 text-right">64%</span>
                            </div>
                        </div>
                    </div>
                    {/* Demand Driver Insights */}
                    <div className="col-span-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm">
                        <h3 className="text-sm font-bold mb-4">Demand Driver Insights</h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[11px] font-medium">
                                    <span className="text-slate-600">Historical Sales</span>
                                    <span className="text-slate-900 dark:text-white">+45%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[45%] rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[11px] font-medium">
                                    <span className="text-slate-600">Planned Maintenance</span>
                                    <span className="text-slate-900 dark:text-white">+32%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[32%] rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[11px] font-medium">
                                    <span className="text-slate-600">Seasonal Trends</span>
                                    <span className="text-slate-900 dark:text-white">+12%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[12%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
                <span className="material-symbols-outlined text-2xl">edit_note</span>
            </button>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-2 z-40">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <div className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-[10px] font-medium">Overview</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">inventory_2</span>
                        <span className="text-[10px] font-medium">Catalog</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="text-[10px] font-medium">Orders</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-slate-400">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-[10px] font-medium">Settings</span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default StockProjectionDashboard;
