import { productsCategories } from '../../constants'

import style from './Aside.module.scss'

function Aside () {
  const searchProduct = () => {
    console.log('click');
  }
  return (
    <aside className={style.sideBar}>
      <h1>Categories</h1>
      <ul>
        {productsCategories.map((item, index) => {
          return (
            <>
              <h3>{item.name}:</h3>
              <h4 key={index}>
                {item.categorie.map((c, index) => {
                  return <li key={index}>{c}</li>
                })}
              </h4>
            </>
          )
        })}
      </ul>
      <button onClick={searchProduct}>Categori of Fender Stratocaster</button>
    </aside>
  )
}

export default Aside
