import { useEffect, useState } from 'react'
import getProducts from '../../api/getProducts'

function ProductsGrid () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts()
      setProducts(data.products)
    }
    loadProducts()
  }, [])
  
  return (
    <div>
      <h2>Products Grid</h2>
      <ul>
        {products.map(p => {
          return <li key={p.id}>{p.name}</li>
        })}
      </ul>
    </div>
  )
}

export default ProductsGrid
