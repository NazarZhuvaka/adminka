import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductsGrid from '../../components/ProductsGrid'
import style from './HomePage.module.scss'

function HomePage () {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Aside/>
        <ProductsGrid/>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
