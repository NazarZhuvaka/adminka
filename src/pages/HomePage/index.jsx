import Aside from '../../components/Aside'
import ProductsGrid from '../../components/ProductsGrid'
import style from './HomePage.module.scss'

function HomePage () {
  return (
    <div className={style.wrapper}>
      <main className={style.main}>
        <Aside/>
        <ProductsGrid/>
      </main>
    </div>
  )
}

export default HomePage
