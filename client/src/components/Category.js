import { useEffect, useState } from 'react';
import { loadCat } from '../services/ApiCategory';
import Element from './Element';
import './Category.css';

function Category({ catId }) {
  const [category, setCategory] = useState({});
  const [catItems, setCatItems] = useState([]);

  useEffect(() => {
    loadCat(catId)
      .then((response) => {
        setCategory(response);
        setCatItems(response.items);
      })
      .catch((error) => console.log(error));
  }, []);

  let itemList = catItems.map((id) => <Element key={id} itemId={id} />);

  return (
    <div className="Category">
      <div className="cat-header">
        <h2 className="cat-title">{category.name}</h2>
        <button className="cat-color">C</button>
      </div>
      <div className="cat-content">
        {itemList}
        <div className="cat-content-buttons">
          <button className="btn-new">+ New Item</button>
          <button className="btn-edit">Edit card</button>
        </div>
      </div>
    </div>
  );
}

export default Category;
