import { useState } from 'react'
import Aside from '../../components/Aside'
import ProductsGrid from '../../components/ProductsGrid'
import style from './HomePage.module.scss'

function HomePage () {
  // TODO: осмислити, а чи не краще б це перенести у стору
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <Aside products={products} setFilteredProducts={setFilteredProducts} />
        <ProductsGrid products={products} filteredProducts={filteredProducts} setProducts={setProducts} />
      </main>
    </div>
  )
}

export default HomePage
