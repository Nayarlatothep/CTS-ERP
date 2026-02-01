import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('issued-products')

  // Issued Products Form States
  const [product, setProduct] = useState('')
  const [materialType, setMaterialType] = useState('Raw Material')
  const [productsList, setProductsList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  // Material Reception Form States
  const [receptionProduct, setReceptionProduct] = useState('')
  const [receptionUser, setReceptionUser] = useState('') // This will now be an ID or name from the list
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

  const fetchEmployees = async () => {
    if (!supabase) return
    const client = supabase
    try {
      const { data, error } = await client
        .from('Employees')
        .select('*')
        .order('employee_name', { ascending: true })

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
  }, [])

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

        // Update local state instead of re-fetching for better UX
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
      // Using 'Products' as the table name and 'Product' as the column
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

      // Refresh list after successful addition
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

    // Simulation unchanged as per current flow
    setTimeout(() => {
      alert(`Material Reception Registered!\nProduct: ${receptionProduct}\nInvoice: ${receptionInvoice}\nQuantity: ${receptionQuantity} ${receptionUnit}\nUser: ${receptionUser}`)
      setReceptionProduct('')
      setReceptionUser('')
      setReceptionQuantity('')
      setReceptionUnit('')
      setReceptionInvoice('')
      setReceptionLoading(false)
    }, 1000)
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">Inventory ERP</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button
              className={`nav-link-btn ${activeTab === 'issued-products' ? 'active' : ''}`}
              onClick={() => setActiveTab('issued-products')}
            >
              Issued Products Entry
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link-btn ${activeTab === 'material-reception' ? 'active' : ''}`}
              onClick={() => setActiveTab('material-reception')}
            >
              Material Reception
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link-btn ${activeTab === 'employees' ? 'active' : ''}`}
              onClick={() => setActiveTab('employees')}
            >
              Employees
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link-btn" disabled>Available Inventory</button>
          </li>
          <li className="nav-item">
            <button className="nav-link-btn" disabled>Reports</button>
          </li>
          <li className="nav-item">
            <button className="nav-link-btn" disabled>Settings</button>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">
            {activeTab === 'issued-products' ? 'Issued Products Entry' :
              activeTab === 'material-reception' ? 'Material Reception' : 'Employees Management'}
          </h1>
        </header>

        {activeTab === 'issued-products' && (
          <section className="entry-section">
            <div className="card">
              <h2 className="section-subtitle">Register New Product</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="product" className="form-label">Product:</label>
                  <input
                    type="text"
                    id="product"
                    className="form-input"
                    placeholder="Enter product name..."
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="materialType" className="form-label">Material Type:</label>
                  <select
                    id="materialType"
                    className="form-input"
                    value={materialType}
                    onChange={(e) => setMaterialType(e.target.value)}
                    required
                  >
                    <option value="Raw Material">Raw Material</option>
                    <option value="Wip">Wip</option>
                    <option value="Finished Goods">Finished Goods</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Registering...' : 'Register Product'}
                </button>
              </form>
            </div>

            <div className="card table-card">
              <h2 className="section-subtitle">Registered Products List</h2>
              {fetching ? (
                <p className="loading-text">Loading products...</p>
              ) : productsList.length === 0 ? (
                <p className="empty-text">No products registered yet.</p>
              ) : (
                <div className="table-responsive">
                  <table className="product-table">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Material Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productsList.map((item) => (
                        <tr key={item.id}>
                          <td>{item.Product}</td>
                          <td>
                            <span className={`badge badge-${item.material_type?.toLowerCase().replace(' ', '-')}`}>
                              {item.material_type}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn-delete"
                              onClick={() => handleDelete(item.id)}
                              title="Delete row"
                            >
                              Delete row
                            </button>
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

        {activeTab === 'material-reception' && (
          <section className="entry-section">
            <div className="card">
              <h2 className="section-subtitle">Material Reception</h2>
              <form onSubmit={handleReceptionSubmit}>
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
                        <th>Employee Name</th>
                        <th>Registration Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeesList.map((emp) => (
                        <tr key={emp.id}>
                          <td>{emp.employee_name}</td>
                          <td>{new Date(emp.created_at).toLocaleDateString()}</td>
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
