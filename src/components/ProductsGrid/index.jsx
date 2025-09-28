import { useEffect, useState } from 'react'
import getProducts from '../../api/getProducts'

function ProductsGrid () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getProducts()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  return (
    <div>
      <h2>Products Grid</h2>
      <ul>
        {loading && <p>Loading...</p>}
        {error && <p>Something is wrong {error}</p>}
        {products.map(p => {
          return <li key={p.id}>{p.name} Brand is: {p.brand}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductsGrid
