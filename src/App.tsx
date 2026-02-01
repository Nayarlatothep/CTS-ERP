import { useState, useEffect } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  const [product, setProduct] = useState('')
  const [materialType, setMaterialType] = useState('Raw Material')
  const [productsList, setProductsList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  const fetchProducts = async () => {
    if (!supabase) return
    try {
      const { data, error } = await supabase
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

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("This entry will be deleted from the table, are you sure you want to proceed?")

    if (confirmed) {
      try {
        const { error } = await supabase
          .from('Products')
          .delete()
          .eq('id', id)

        if (error) throw error

        // Update local state instead of re-fetching for better UX
        setProductsList(prev => prev.filter(item => item.id !== id))
      } catch (error: any) {
        console.error('Error deleting product:', error.message)
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

    try {
      // Using 'Products' as the table name and 'Product' as the column
      const { error } = await supabase
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

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">Inventory ERP</div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link active">Issued Products Entry</a>
          </li>
          {/* Placeholder items */}
          <li className="nav-item">
            <a href="#" className="nav-link">Available Inventory</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Material Reception</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Reports</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Settings</a>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <h1 className="page-title">Issued Products Entry</h1>
        </header>

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
      </main>
    </div>
  )
}

export default App
