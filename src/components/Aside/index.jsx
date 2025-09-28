import { productsCategories } from '../../constants'

function Aside () {
  return (
    <aside>
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
    </aside>
  )
}

export default Aside
