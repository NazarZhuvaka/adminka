import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductsGrid from '../../components/ProductsGrid'

function HomePage () {
  return (
    <div>
      <Header />
      <main>
        <Aside/>
        <ProductsGrid/>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
