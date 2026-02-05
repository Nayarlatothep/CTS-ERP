import React from 'react';

const CostAnalysisDashboard = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-24 font-display">
            <header className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CS Transportation LLC</h1>
                        <p className="text-lg font-bold leading-tight">Cost Analysis</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Feb 5, 2026</p>
                        <p className="text-xs font-medium">5:13 PM CST</p>
                    </div>
                </div>
            </header>

            <main className="p-4 space-y-4">
                {/* Summary Cards */}
                <div className="flex overflow-x-auto space-x-4 pb-2 -mx-4 px-4 snap-x">
                    <div className="min-w-[280px] bg-card-blue text-white p-5 rounded-2xl shadow-lg relative overflow-hidden snap-center">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-blue-100 text-sm font-medium">Total Operating Costs</p>
                                <p className="text-blue-200 text-xs">Transportation Matrix</p>
                            </div>
                            <span className="material-icons-outlined bg-white/20 p-2 rounded-full">local_shipping</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold">$1,53K</span>
                        </div>
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm transition-colors border border-white/10">
                            Cost Per KM/Mile
                        </button>
                    </div>
                    <div className="min-w-[280px] bg-card-orange text-white p-5 rounded-2xl shadow-lg relative overflow-hidden snap-center">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-orange-100 text-sm font-medium">Fuel Expenses</p>
                                <p className="text-orange-200 text-xs">Monthly Consumption</p>
                            </div>
                            <span className="material-icons-outlined bg-white/20 p-2 rounded-full">local_gas_station</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold">$2,59K</span>
                        </div>
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm transition-colors border border-white/10">
                            Cost Per KM/Mile
                        </button>
                    </div>
                    <div className="min-w-[280px] bg-card-green text-white p-5 rounded-2xl shadow-lg relative overflow-hidden snap-center">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-green-100 text-sm font-medium">Maintenance &amp; Repair</p>
                                <p className="text-green-200 text-xs">Service Schedule</p>
                            </div>
                            <span className="material-icons-outlined bg-white/20 p-2 rounded-full">build</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold">$2,99K</span>
                        </div>
                        <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm transition-colors border border-white/10">
                            Cost Per KM/Mile
                        </button>
                    </div>
                </div>

                {/* Insights Header */}
                <div className="flex justify-between items-center py-2">
                    <h2 className="font-bold text-slate-800 dark:text-slate-200">Insights &amp; Metrics</h2>
                    <button className="flex items-center gap-2 text-primary font-semibold text-sm bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                        <span className="material-icons-outlined text-sm">filter_list</span>
                        Filters
                    </button>
                </div>

                {/* Cost Breakdown Chart */}
                <section className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="font-bold text-base">Cost Breakdown</h3>
                            <p className="text-xs text-slate-500">Last 12 Months Data</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-1 text-slate-400"><span className="material-icons-outlined">more_horiz</span></button>
                        </div>
                    </div>
                    <div className="flex items-end justify-between h-40 gap-2 mb-4">
                        <div className="w-full bg-blue-100 dark:bg-blue-900/40 rounded-t-sm chart-bar" style={{ height: '60%' }}></div>
                        <div className="w-full bg-blue-500 dark:bg-blue-600 rounded-t-sm chart-bar" style={{ height: '85%' }}></div>
                        <div className="w-full bg-blue-300 dark:bg-blue-400 rounded-t-sm chart-bar" style={{ height: '45%' }}></div>
                        <div className="w-full bg-blue-600 dark:bg-blue-700 rounded-t-sm chart-bar" style={{ height: '100%' }}></div>
                        <div className="w-full bg-blue-400 dark:bg-blue-500 rounded-t-sm chart-bar" style={{ height: '70%' }}></div>
                        <div className="w-full bg-blue-200 dark:bg-blue-800/60 rounded-t-sm chart-bar" style={{ height: '40%' }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                        <span>Fuel</span>
                        <span>Labor</span>
                        <span>Parts</span>
                        <span>Tires</span>
                        <span>Fees</span>
                        <span>Misc</span>
                    </div>
                </section>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <section className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold text-sm mb-4">Fuel Efficiency Trend</h3>
                        <div className="h-32 flex items-center justify-center border-b border-slate-100 dark:border-slate-800 mb-2 relative">
                            <svg className="w-full h-full" viewBox="0 0 100 40">
                                <path d="M0 30 Q 10 10, 20 25 T 40 15 T 60 25 T 80 5 T 100 20" fill="none" stroke="#3b82f6" strokeWidth="1.5"></path>
                                <circle cx="20" cy="25" fill="#3b82f6" r="1.5"></circle>
                                <circle cx="80" cy="5" fill="#3b82f6" r="1.5"></circle>
                            </svg>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                            <span>Sep</span>
                            <span>Nov</span>
                        </div>
                    </section>
                    <section className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="font-bold text-sm mb-4">High-Cost Drivers</h3>
                        <div className="flex justify-around items-center">
                            <div className="relative w-20 h-20">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-slate-100 dark:text-slate-800" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-blue-500" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" strokeDasharray="201" strokeDashoffset="60" strokeWidth="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">70%</div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-[10px] text-slate-500">Main Route</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                                    <span className="text-[10px] text-slate-500">Secondary</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Vehicle Table */}
                <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="font-bold text-sm">Vehicle Performance</h3>
                        <span className="text-[10px] font-semibold text-primary uppercase">View All</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
                                <tr>
                                    <th className="px-5 py-3 font-semibold">Vehicle ID</th>
                                    <th className="px-5 py-3 font-semibold text-right">Cost/KM</th>
                                    <th className="px-5 py-3 font-semibold text-center">Trend</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td className="px-5 py-4 font-medium">V-10292</td>
                                    <td className="px-5 py-4 text-right">$0.82</td>
                                    <td className="px-5 py-4">
                                        <div className="flex justify-center">
                                            <svg className="w-12 h-4 text-green-500" viewBox="0 0 50 10"><polyline fill="none" points="0,10 10,5 20,8 30,2 40,5 50,0" stroke="currentColor" strokeWidth="2"></polyline></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-4 font-medium">V-94821</td>
                                    <td className="px-5 py-4 text-right">$1.15</td>
                                    <td className="px-5 py-4">
                                        <div className="flex justify-center">
                                            <svg className="w-12 h-4 text-red-500" viewBox="0 0 50 10"><polyline fill="none" points="0,0 10,5 20,2 30,8 40,5 50,10" stroke="currentColor" strokeWidth="2"></polyline></svg>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-4 font-medium">V-33290</td>
                                    <td className="px-5 py-4 text-right">$0.94</td>
                                    <td className="px-5 py-4">
                                        <div className="flex justify-center">
                                            <svg className="w-12 h-4 text-blue-500" viewBox="0 0 50 10"><polyline fill="none" points="0,5 10,5 20,5 30,5 40,5 50,5" stroke="currentColor" strokeWidth="2"></polyline></svg>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                    <span className="material-icons-outlined">file_download</span>
                    Export Report (CSV/PDF)
                </button>
            </main>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6 flex flex-col items-end group">
                <div className="bg-white dark:bg-slate-800 text-xs px-3 py-1.5 rounded-lg shadow-xl mb-2 font-bold border border-slate-100 dark:border-slate-700">
                    New Expense Entry
                </div>
                <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 border-4 border-white dark:border-slate-900">
                    <span className="material-icons-outlined" style={{ fontSize: '32px' }}>add</span>
                </button>
            </div>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 flex justify-around items-center h-16 px-6 pb-2 z-40">
                <button className="flex flex-col items-center gap-1 text-primary">
                    <span className="material-icons-outlined">dashboard</span>
                    <span className="text-[10px] font-bold">Dashboard</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                    <span className="material-icons-outlined">analytics</span>
                    <span className="text-[10px] font-bold">Analytics</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
                    <span className="material-icons-outlined">settings</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
            </nav>
        </div>
    );
};

export default CostAnalysisDashboard;
