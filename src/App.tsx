import { useState } from 'react'
import './App.css'

function App() {
  const [product, setProduct] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (product.trim()) {
      alert(`Product "${product}" entered successfully!`)
      setProduct('')
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
              <button type="submit" className="btn-primary">
                Register Product
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
