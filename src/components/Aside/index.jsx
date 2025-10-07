import { useState } from 'react';
import { productsCategories } from '../../constants'

import style from './Aside.module.scss'

function Aside ({ products, setFilteredProducts }) {
  // TODO: додати більше для фільтру, зробити так, щоб фільтр був динамічним
  // (зробити так, щоб категорії додавалися динамічно з констант)
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const searchProduct = () => {
    const filteredProducts = products.filter(({ type }) =>
      selectedTypes.includes(type)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <aside className={style.sideBar}>
      <h1>Categories</h1>
      {/* TODO: осмислити, чи потрібно все це рендерити в секції ul? */}
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
      <div>
        <h3>Filter by Type</h3>
        {productsCategories[1].categorie.map((c) => (
          <label key={c}>
            <input
              type="checkbox"
              value={c}
              checked={selectedTypes.includes(c)}
              onChange={() => handleTypeChange(c)}
            />
            {c}
          </label>
        ))}
      </div>
      <button onClick={searchProduct}>Search</button>
    </aside>
  )
}

export default Aside
