import { useEffect, useState } from 'react'
import getProducts from '../../api/getProducts'
import style from './Product.module.scss'

function ProductsGrid ({ products, filteredProducts, setProducts }) {
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
    <div className={style.productsGrid}>
      <h2>Products Grid</h2>
      <ul className={style.productList}>
        {loading && <p>Loading...</p>}
        {error && <p>Something is wrong {error}</p>}
        {filteredProducts.length === 0 ? 
        (products.map(p => {
          return (
            <li key={p.id} className={style.productCard}>
              {p.name} Brand is: {p.brand}
            </li>
          )
        }))
        :
        (filteredProducts.map(p => {
          return (
            <li key={p.id} className={style.productCard}>
              {p.name} Brand is: {p.brand}
            </li>
          )
        }))
      }
      </ul>
    </div>
  )
}

export default ProductsGrid
