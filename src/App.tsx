import React, { useState, useEffect } from 'react'
// Deployment Update: 2026-02-05 14:30
import './App.css'
import { supabase } from './supabaseClient'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts'
import {
  TrendingUp, TrendingDown, DollarSign, Package, User, Calendar,
  Filter, Plus, ChevronDown, ChevronRight, Search, X, Truck, BarChart2,
  PieChart as PieChartIcon, Activity, ArrowUpRight, ArrowDownRight,
  Inbox, Upload, Settings, FileText, RefreshCw, Map, Users, ClipboardList
} from 'lucide-react'

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
)

const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
)

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18h9V10l-3-3h-6" /><circle cx="7" cy="18" r="2" /><circle cx="20" cy="18" r="2" /></svg>
)

const XIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
)

const MenuIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
)

const financialData = [
  { name: 'Jan', income: 45000, expenses: 32000, profit: 13000 },
  { name: 'Feb', income: 52000, expenses: 34000, profit: 18000 },
  { name: 'Mar', income: 48000, expenses: 31000, profit: 17000 },
  { name: 'Apr', income: 61000, expenses: 42000, profit: 19000 },
  { name: 'May', income: 55000, expenses: 38000, profit: 17000 },
  { name: 'Jun', income: 67000, expenses: 45000, profit: 22000 },
  { name: 'Jul', income: 72000, expenses: 48000, profit: 24000 },
];

const categoryData = [
  { name: 'Metals', cost: 42000, target: 45000 },
  { name: 'Polymers', cost: 28000, target: 30000 },
  { name: 'Electronics', cost: 35000, target: 32000 },
  { name: 'Chemicals', cost: 15000, target: 20000 },
  { name: 'Packaging', cost: 8000, target: 10000 },
];

const recentTransactions = [
  { id: 1, item: 'Copper Wire', type: 'Income', amount: 25000, status: 'positive', date: '2026-02-05' },
  { id: 2, item: 'Plastic Mines', type: 'Expense', amount: -6500, status: 'negative', date: '2026-02-04' },
  { id: 3, item: 'Steel Sheets', type: 'Expense', amount: -12000, status: 'negative', date: '2026-02-04' },
  { id: 4, item: 'Aluminum Rods', type: 'Income', amount: 18000, status: 'positive', date: '2026-02-03' },
];

const expensesDistribution = [
  { name: 'Raw Materials', value: 45 },
  { name: 'Logistics', value: 25 },
  { name: 'Labor', value: 20 },
  { name: 'Overhead', value: 10 },
];

const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

const MaterialFlowDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Filter Bar */}
      <div className="dashboard-filter-bar glass-panel">
        <div className="filter-item search-box">
          <Search size={18} className="filter-icon" />
          <input type="text" placeholder="Search OP, Creador..." className="dashboard-input" />
        </div>
        <div className="filter-item date-box">
          <Calendar size={18} className="filter-icon" />
          <input type="date" className="dashboard-input" />
          <span className="date-separator">-</span>
          <input type="date" className="dashboard-input" />
        </div>
        <div className="filter-item select-box">
          <Filter size={18} className="filter-icon" />
          <select className="dashboard-select">
            <option>All Categories</option>
          </select>
        </div>
        <div className="filter-item user-box">
          <User size={18} className="filter-icon" />
          <select className="dashboard-select">
            <option>All Users</option>
          </select>
        </div>
        <button className="reset-filter-btn">
          <X size={18} />
        </button>
      </div>

      {/* KPI Summary Cards */}
      <div className="kpi-grid">
        <div className="kpi-card glass-panel bg-blue">
          <div className="kpi-icon-wrapped">
            <ArrowUpRight size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">TOTAL INCOME</span>
            <div className="kpi-value-row">
              <span className="kpi-value">$150,000</span>
              <span className="kpi-currency">USD</span>
            </div>
            <div className="kpi-badge">MGTW</div>
          </div>
        </div>

        <div className="kpi-card glass-panel bg-red">
          <div className="kpi-icon-wrapped">
            <ArrowDownRight size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">TOTAL EXPENSES</span>
            <div className="kpi-value-row">
              <span className="kpi-value">$85,000</span>
            </div>
            <div className="kpi-badge">ERSTW</div>
          </div>
        </div>

        <div className="kpi-card glass-panel bg-green">
          <div className="kpi-icon-wrapped">
            <DollarSign size={24} />
          </div>
          <div className="kpi-content">
            <span className="kpi-label">PROFIT</span>
            <div className="kpi-value-row">
              <span className="kpi-value">$65,000</span>
            </div>
            <div className="kpi-badge">M6TW</div>
          </div>
        </div>

        <div className="kpi-card glass-panel bg-white asset-dial">
          <div className="dial-container">
            <div className="dial-value">85%</div>
            <div className="dial-label">ASSET</div>
          </div>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="analytics-grid">
        <div className="main-charts-column">
          <div className="chart-card glass-panel">
            <div className="chart-header">
              <h3 className="chart-title">MONTHLY FINANCIAL FLOW</h3>
              <div className="chart-actions">
                <button className="chart-btn active">Monthly</button>
                <button className="chart-btn">Weekly</button>
              </div>
            </div>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                  <Legend />
                  <Line type="linear" dataKey="income" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="linear" dataKey="expenses" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card glass-panel" style={{ marginTop: '24px' }}>
            <h3 className="chart-title">MATERIAL COSTS BY CATEGORY</h3>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} />
                  <Legend />
                  <Bar dataKey="cost" fill="#3b82f6" radius={[6, 6, 0, 0]} label={{ position: 'top', fill: '#64748b', fontSize: 10 }} />
                  <Bar dataKey="target" fill="#f87171" radius={[6, 6, 0, 0]} label={{ position: 'top', fill: '#64748b', fontSize: 10 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="side-charts-column">
          <div className="glass-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div className="side-section-top">
              <h3 className="chart-title">RECENT TRANSACTIONS</h3>
              <div className="transaction-list">
                {recentTransactions.map(tx => (
                  <div key={tx.id} className="transaction-item">
                    <div className="tx-info">
                      <span className="tx-name">{tx.item}</span>
                      <span className="tx-date">{tx.date}</span>
                    </div>
                    <div>
                      <span className={`tx-amount ${tx.status}`}>
                        {tx.amount > 0 ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="view-all-btn">View All Transactions</button>
            </div>

            <div className="side-section-bottom">
              <h3 className="chart-title">EXPENSES DISTRIBUTION</h3>
              <div style={{ width: '100%', height: 220 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={expensesDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={0}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {expensesDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button className="dashboard-fab">
        <Plus size={24} />
      </button>
    </div>
  );
};

function App() {
  // Navigation State
  // Navigation State
  const [activeTab, setActiveTab] = useState('dashboard-flow')
  const [expandedModule, setExpandedModule] = useState<string | null>('dashboards')

  const toggleModule = (moduleName: string) => {
    setExpandedModule(expandedModule === moduleName ? null : moduleName)
  }

  // Issued Products Form States
  const [product, setProduct] = useState('')
  const [materialType, setMaterialType] = useState('Raw Material')
  const [productsList, setProductsList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  // Redesign States
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
  const [stagedItems, setStagedItems] = useState<any[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isOver, setIsOver] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [receptionList, setReceptionList] = useState<any[]>([])

  // Material Reception Form States
  // ... (rest of states)
  const [receptionProduct, setReceptionProduct] = useState('')
  const [receptionUser, setReceptionUser] = useState('')
  const [receptionQuantity, setReceptionQuantity] = useState('')
  const [receptionUnit, setReceptionUnit] = useState('')
  const [receptionInvoice, setReceptionInvoice] = useState('')
  const [receptionLoading, setReceptionLoading] = useState(false)

  // Employees Form States
  const [employeeName, setEmployeeName] = useState('')
  const [employeesList, setEmployeesList] = useState<any[]>([])
  const [fetchingEmployees, setFetchingEmployees] = useState(true)
  const [addingEmployee, setAddingEmployee] = useState(false)

  const fetchProducts = async () => {
    if (!supabase) return
    const client = supabase
    try {
      const { data, error } = await client
        .from('Products')
        .select('*')
        .order('id', { ascending: false })

      if (error) throw error
      setProductsList(data || [])
    } catch (error: any) {
      console.error('Error fetching products:', error.message)
    } finally {
      setFetching(false)
    }
  }

  const fetchReceptionData = async () => {
    if (!supabase) return
    try {
      const { data, error } = await supabase
        .from('Reception')
        .select('*')
      if (error) throw error
      setReceptionList(data || [])
    } catch (error: any) {
      console.error('Error fetching reception data:', error.message)
    }
  }

  const fetchEmployees = async () => {
    if (!supabase) return
    const client = supabase
    try {
      const { data, error } = await client
        .from('Employees')
        .select('*')
        .order('employee_id', { ascending: true })

      if (error) throw error
      setEmployeesList(data || [])
    } catch (error: any) {
      console.error('Error fetching employees:', error.message)
    } finally {
      setFetchingEmployees(false)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchEmployees()
    fetchReceptionData()
  }, [])

  // Drag & Drop Handlers
  const handleDragStart = (e: React.DragEvent, item: any) => {
    e.dataTransfer.setData('productId', item.id.toString())
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.add('dragging')
    }
  }

  const handleDragEnd = (e: React.DragEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.classList.remove('dragging')
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsOver(true)
  }

  const handleDragLeave = () => {
    setIsOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsOver(false)
    const id = e.dataTransfer.getData('productId')
    const item = filteredProducts.find(p => p.id.toString() === id)

    if (item && !stagedItems.find(si => si.id === item.id)) {
      const input = window.prompt(`Enter quantity for ${item.Product} (Available: ${item.calculatedQty || 0})`)
      if (input === null) return // Cancelled

      const qty = parseInt(input)
      if (isNaN(qty) || qty <= 0) {
        alert("Please enter a valid positive number.")
        return
      }

      if (qty > (item.calculatedQty || 0)) {
        alert(`Insufficient stock! Maximum available: ${item.calculatedQty || 0}`)
        return
      }

      setStagedItems([...stagedItems, { ...item, dispatchQty: qty }])
    }
  }

  const removeFromStaged = (id: number) => {
    setStagedItems(stagedItems.filter(item => item.id !== id))
  }

  const openProductDetails = (item: any) => {
    setSelectedProduct(item)
    setIsDrawerOpen(true)
  }

  const filteredProducts = productsList.filter(p => {
    const matchesSearch = p.Product.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'All' || p.material_type === filterType
    return matchesSearch && matchesFilter
  }).map(p => {
    const qty = receptionList
      .filter(r => r.product === p.Product)
      .reduce((sum, r) => sum + (Number(r.quantity) || 0), 0)
    return { ...p, calculatedQty: qty }
  })



  // ... (rest of search/submit handlers)
  const handleDelete = async (id: number) => {
    if (!supabase) return
    const client = supabase
    const confirmed = window.confirm("This entry will be deleted from the table, are you sure you want to proceed?")

    if (confirmed) {
      try {
        const { error, count } = await client
          .from('Products')
          .delete({ count: 'exact' })
          .eq('id', id)

        if (error) throw error

        if (count === 0) {
          alert("No records were deleted. This usually means a Database Policy (RLS) is blocking the delete operation or the ID wasn't found.")
          return
        }

        setProductsList(prev => prev.filter(item => item.id !== id))
      } catch (error: any) {
        console.error('Error deleting product:', error.message, error)
        alert(`Error: ${error.message}`)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!product.trim()) return

    setLoading(true)

    if (!supabase) {
      alert('Error: Database connection is missing. Please check Vercel environment variables.')
      setLoading(false)
      return
    }

    const client = supabase

    try {
      const { error } = await client
        .from('Products')
        .insert([{
          Product: product,
          material_type: materialType
        }])

      if (error) throw error

      alert(`Product "${product}" (${materialType}) registered in database!`)
      setProduct('')
      setMaterialType('Raw Material')
      fetchProducts()
    } catch (error: any) {
      console.error('Error saving to Supabase:', error.message)
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleAddEmployee = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!employeeName.trim()) return

    setAddingEmployee(true)

    if (!supabase) {
      alert('Database connection is missing.')
      setAddingEmployee(false)
      return
    }

    try {
      const { error } = await supabase
        .from('Employees')
        .insert([{ employee_name: employeeName }])

      if (error) throw error

      alert(`Employee "${employeeName}" registered!`)
      setEmployeeName('')
      fetchEmployees() // Refresh the list and dropdowns
    } catch (error: any) {
      console.error('Error saving employee:', error.message)
      alert(`Error: ${error.message}`)
    } finally {
      setAddingEmployee(false)
    }
  }

  const handleReceptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!receptionProduct || !receptionUser) {
      alert('Please select both a product and a user')
      return
    }

    setReceptionLoading(true)

    if (!supabase) {
      alert('Error: Database connection is missing.')
      setReceptionLoading(false)
      return
    }

    try {
      // Find the ID of the selected product
      const selectedProd = productsList.find(p => p.Product === receptionProduct)
      if (!selectedProd) throw new Error('Selected product not found in database')

      const { error } = await supabase
        .from('Reception')
        .insert([{
          product: receptionProduct,
          invoice: receptionInvoice,
          user: receptionUser,
          quantity: parseFloat(receptionQuantity),
          unit: receptionUnit,
          id: selectedProd.id // Mapping the product ID to the 'id' column
        }])

      if (error) throw error

      alert(`Material Reception Registered Successfully!\nProduct: ${receptionProduct}\nInvoice: ${receptionInvoice}`)

      // Reset form
      setReceptionProduct('')
      setReceptionUser('')
      setReceptionQuantity('')
      setReceptionUnit('')
      setReceptionInvoice('')
    } catch (error: any) {
      console.error('Error saving reception:', error.message)
      alert(`Error: ${error.message}`)
    } finally {
      setReceptionLoading(false)
    }
  }

  return (
    <div className="app-container">
      <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <div className="logo">CS Transportation LLC</div>
          <div className="logo-subtitle">Inventory PRO v 1.2 [STABLE]</div>
        </div>
        <ul className="nav-menu">
          {/* Module 1: Ingresos */}
          <li className="nav-item">
            <button
              className={`nav-link-btn ${expandedModule === 'ingresos' ? 'active' : ''}`}
              onClick={() => toggleModule('ingresos')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <Inbox size={20} />
                <span>Ingresos</span>
              </div>
              {expandedModule === 'ingresos' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {expandedModule === 'ingresos' && (
              <ul className="sub-menu">
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Órdenes de Compra</button></li>
                <li className="sub-nav-item">
                  <button
                    className={`sub-nav-link ${activeTab === 'material-reception' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('material-reception'); setIsMenuOpen(false); }}
                  >
                    Recepción de Mercancía
                  </button>
                </li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Devoluciones</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Ingresos Extraordinarios</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Registro de Lotes</button></li>
              </ul>
            )}
          </li>

          {/* Module 2: Egresos */}
          <li className="nav-item">
            <button
              className={`nav-link-btn ${expandedModule === 'egresos' ? 'active' : ''}`}
              onClick={() => toggleModule('egresos')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <Upload size={20} />
                <span>Egresos</span>
              </div>
              {expandedModule === 'egresos' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {expandedModule === 'egresos' && (
              <ul className="sub-menu">
                <li className="sub-nav-item">
                  <button
                    className={`sub-nav-link ${activeTab === 'issued-products' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('issued-products'); setIsMenuOpen(false); }}
                  >
                    Emisión de Productos
                  </button>
                </li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Requisiciones Internas</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Transferencia</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Merma y Desperdicio</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Despacho Logístico</button></li>
              </ul>
            )}
          </li>

          {/* Module 3: Dashboards */}
          <li className="nav-item">
            <button
              className={`nav-link-btn ${expandedModule === 'dashboards' ? 'active' : ''}`}
              onClick={() => toggleModule('dashboards')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <BarChart2 size={20} />
                <span>Dashboards</span>
              </div>
              {expandedModule === 'dashboards' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {expandedModule === 'dashboards' && (
              <ul className="sub-menu">
                <li className="sub-nav-item">
                  <button
                    className={`sub-nav-link ${activeTab === 'dashboard-flow' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('dashboard-flow'); setIsMenuOpen(false); }}
                  >
                    Panel Financiero
                  </button>
                </li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Análisis de Costos</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Rotación de Inventario</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Dashboard Proveedores</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Proyección de Stock</button></li>
              </ul>
            )}
          </li>

          {/* Module 4: Configuración */}
          <li className="nav-item">
            <button
              className={`nav-link-btn ${expandedModule === 'config' ? 'active' : ''}`}
              onClick={() => toggleModule('config')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                <Settings size={20} />
                <span>Configuración</span>
              </div>
              {expandedModule === 'config' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {expandedModule === 'config' && (
              <ul className="sub-menu">
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Catálogo de Materiales</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Gestión de Proveedores</button></li>
                <li className="sub-nav-item"><button className="sub-nav-link" disabled>Ubicaciones (Layout)</button></li>
                <li className="sub-nav-item">
                  <button
                    className={`sub-nav-link ${activeTab === 'employees' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('employees'); setIsMenuOpen(false); }}
                  >
                    Usuarios y Permisos
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">
            {activeTab === 'dashboard-flow' ? 'Dashboard: Material Flow & Costs' :
              activeTab === 'issued-products' ? 'Material Dispatch' :
                activeTab === 'material-reception' ? 'Material Reception' : 'Employees Management'}
          </h1>
          {activeTab === 'issued-products' && (
            <div className="status-metrics">
              <span className="badge badge-finished-goods">{productsList.length} Total Inventory</span>
            </div>
          )}
        </header>

        {activeTab === 'dashboard-flow' && <MaterialFlowDashboard />}

        {activeTab === 'issued-products' && (
          <div className="entry-section">
            {/* Control Bar: Search & Filters */}
            <div className="controls-bar glass-panel">
              <div className="search-container">
                <div className="search-icon"><SearchIcon /></div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by product name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="filters-group">
                {['All', 'Raw Material', 'Wip', 'Finished Goods'].map(type => (
                  <button
                    key={type}
                    className={`filter-btn ${filterType === type ? 'active' : ''}`}
                    onClick={() => setFilterType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="workflow-grid">
              {/* Left Side: Product Grid */}
              <div className="inventory-section">
                <h2 className="section-subtitle">Staging Inventory</h2>
                {fetching ? (
                  <p className="loading-text">Loading products...</p>
                ) : filteredProducts.length === 0 ? (
                  <p className="empty-text">No products found matching filters.</p>
                ) : (
                  <div className="product-grid">
                    {filteredProducts.map((item) => (
                      <div
                        key={item.id}
                        className={`product-card ${item.material_type?.toLowerCase().replace(' ', '-')}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                        onDragEnd={handleDragEnd}
                        onClick={() => openProductDetails(item)}
                      >
                        <div className="card-icon-wrapper">
                          <PackageIcon />
                        </div>
                        <h3 className="product-card-name">{item.Product}</h3>
                        <p className="product-card-type">{item.material_type}</p>
                        <div className="card-data-row">
                          <span className="card-data-label">Qty:</span>
                          <span className="card-data-value">{item.calculatedQty || 0}</span>
                        </div>
                        <div className="card-data-row">
                          <span className="card-data-label">Location:</span>
                          <span className="card-data-value">---</span>
                        </div>
                        <div className="stock-indicator">
                          <div className={`stock-dot ${(item.calculatedQty || 0) === 0 ? 'out' : ''}`}></div>
                          <span style={{ fontSize: '0.75rem', color: (item.calculatedQty || 0) === 0 ? '#ef4444' : 'var(--text-muted)' }}>
                            {(item.calculatedQty || 0) === 0 ? 'Out of Stock' : 'In Stock'}
                          </span>
                        </div>
                        {/* Horizontal Status Bar */}
                        <div className="horizontal-progress-container">
                          <div
                            className={`horizontal-progress-bar ${(item.calculatedQty || 0) >= 8 ? 'high' :
                              (item.calculatedQty || 0) >= 4 ? 'medium' : 'low'
                              }`}
                            style={{ width: `${Math.min(((item.calculatedQty || 0) / 10) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Registration Form (re-integrated as a card) */}
                <div className="glass-panel" style={{ marginTop: '2.5rem' }}>
                  <h2 className="section-subtitle">Quick Register</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Product Name</label>
                      <input type="text" className="form-input" value={product} onChange={(e) => setProduct(e.target.value)} required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Type</label>
                      <select className="form-input" value={materialType} onChange={(e) => setMaterialType(e.target.value)} required>
                        <option value="Raw Material">Raw Material</option>
                        <option value="Wip">Wip</option>
                        <option value="Finished Goods">Finished Goods</option>
                      </select>
                    </div>
                    <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: 0 }}>+</button>
                  </form>
                </div>
              </div>

              {/* Right Side: Dispatch Queue */}
              <div className="dispatch-zone">
                <div className="staged-items-container">
                  <h3 className="staged-counter-header">
                    Items staged for issue:
                    <span className="staged-counter-badge">{stagedItems.length}</span>
                  </h3>

                  <div
                    className={`drop-zone ${isOver ? 'over' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {stagedItems.length === 0 ? (
                      <>
                        <div className="drop-zone-empty-icon"><TruckIcon /></div>
                        <p className="drop-zone-text">Drag products here to stage for dispatch</p>
                      </>
                    ) : (
                      <div className="staged-items-list">
                        {stagedItems.map(item => (
                          <div key={item.id} className="staged-item">
                            <div>
                              <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{item.Product}</div>
                              <div style={{ fontSize: '0.7rem' }}>{item.material_type} - Qty: {item.dispatchQty}</div>
                            </div>
                            <button onClick={() => removeFromStaged(item.id)} className="btn-delete" style={{ padding: '0.2rem 0.5rem' }}>
                              <XIcon />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Action Button */}
            {stagedItems.length > 0 && (
              <button
                className="fab-confirm"
                onClick={() => {
                  alert('Dispatch Confirmed for ' + stagedItems.length + ' items!');
                  setStagedItems([]);
                }}
              >
                <TruckIcon />
                Confirm Output
              </button>
            )}

            {/* Product Details Drawer */}
            {isDrawerOpen && (
              <>
                <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></div>
                <div className={`drawer ${!isDrawerOpen ? 'closed' : ''}`}>
                  <button
                    onClick={() => setIsDrawerOpen(false)}
                    style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                  >
                    <XIcon />
                  </button>
                  <div style={{ marginTop: '2rem' }}>
                    <div className="card-icon-wrapper" style={{ width: '64px', height: '64px' }}>
                      <PackageIcon />
                    </div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{selectedProduct?.Product}</h2>
                    <span className={`badge badge-${selectedProduct?.material_type?.toLowerCase().replace(' ', '-')}`}>
                      {selectedProduct?.material_type}
                    </span>

                    <div style={{ marginTop: '3rem' }}>
                      <h4 style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Technical Specs</h4>
                      <div className="glass-panel" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                          <span style={{ fontWeight: 600, color: 'var(--emerald-green)' }}>Available</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Warehouse:</span>
                          <span style={{ fontWeight: 600 }}>Sector A-4</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Last Audit:</span>
                          <span style={{ fontWeight: 600 }}>Feb 2026</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                      <button
                        className="btn-primary"
                        style={{ margin: 0 }}
                        onClick={() => {
                          if (!stagedItems.find(si => si.id === selectedProduct.id)) {
                            setStagedItems([...stagedItems, selectedProduct]);
                          }
                          setIsDrawerOpen(false);
                        }}
                      >
                        Add to Queue
                      </button>
                      <button
                        className="btn-delete"
                        style={{ flex: 1 }}
                        onClick={() => handleDelete(selectedProduct.id)}
                      >
                        Delete Record
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'material-reception' && (
          <section className="entry-section">
            <div className="card">
              <h2 className="section-subtitle">Material Reception</h2>
              <form onSubmit={handleReceptionSubmit}>
                {/* ... existing reception form ... */}
                <div className="form-group">
                  <label htmlFor="receptionProduct" className="form-label">Product:</label>
                  <select
                    id="receptionProduct"
                    className="form-input"
                    value={receptionProduct}
                    onChange={(e) => setReceptionProduct(e.target.value)}
                    required
                  >
                    <option value="">-- Select a Product --</option>
                    {productsList.map((item) => (
                      <option key={item.id} value={item.Product}>
                        {item.Product}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="receptionInvoice" className="form-label">Invoice Number:</label>
                  <input
                    type="text"
                    id="receptionInvoice"
                    className="form-input"
                    placeholder="Enter Invoice #"
                    value={receptionInvoice}
                    onChange={(e) => setReceptionInvoice(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="receptionUser" className="form-label">User:</label>
                  <select
                    id="receptionUser"
                    className="form-input"
                    value={receptionUser}
                    onChange={(e) => setReceptionUser(e.target.value)}
                    required
                  >
                    <option value="">-- Select Employee --</option>
                    {employeesList.map((emp) => (
                      <option key={emp.id} value={emp.employee_name}>
                        {emp.employee_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid-2-cols">
                  <div className="form-group">
                    <label htmlFor="receptionQuantity" className="form-label">Quantity:</label>
                    <input
                      type="number"
                      id="receptionQuantity"
                      className="form-input"
                      placeholder="0.00"
                      step="0.01"
                      value={receptionQuantity}
                      onChange={(e) => setReceptionQuantity(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="receptionUnit" className="form-label">Unit:</label>
                    <input
                      type="text"
                      id="receptionUnit"
                      className="form-input"
                      placeholder="e.g. Kg, Pcs, Mts"
                      value={receptionUnit}
                      onChange={(e) => setReceptionUnit(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary" disabled={receptionLoading}>
                  {receptionLoading ? 'Registering...' : 'Register Reception'}
                </button>
              </form>
            </div>
          </section>
        )}

        {activeTab === 'employees' && (
          <section className="entry-section">
            <div className="card">
              <h2 className="section-subtitle">Register New Employee</h2>
              <form onSubmit={handleAddEmployee}>
                <div className="form-group">
                  <label htmlFor="employeeName" className="form-label">Employee Name:</label>
                  <input
                    type="text"
                    id="employeeName"
                    className="form-input"
                    placeholder="Full name..."
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={addingEmployee}>
                  {addingEmployee ? 'Registering...' : 'Register Employee'}
                </button>
              </form>
            </div>

            <div className="card table-card">
              <h2 className="section-subtitle">Employees List</h2>
              {fetchingEmployees ? (
                <p className="loading-text">Loading employees...</p>
              ) : employeesList.length === 0 ? (
                <p className="empty-text">No employees registered yet.</p>
              ) : (
                <div className="table-responsive">
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Hire Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeesList.map((emp: any) => (
                        <tr key={emp.id}>
                          <td>{emp.employee_id || 'N/A'}</td>
                          <td>{emp.employee_name}</td>
                          <td>
                            {emp.hiredate
                              ? new Date(emp.hiredate).toLocaleDateString()
                              : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
