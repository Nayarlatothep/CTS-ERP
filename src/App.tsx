import { useState } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  const [product, setProduct] = useState('')
  const [loading, setLoading] = useState(false)

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
        .insert([{ Product: product }])

      if (error) throw error

      alert(`Product "${product}" registered in database!`)
      setProduct('')
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
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Registering...' : 'Register Product'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
