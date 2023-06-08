import { useEffect, useState } from 'react';
import { loadCat, delCat } from '../services/ApiCategory';
import Element from './Element';
import './Category.css';

function Category({ catId, setUserCat }) {
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

  let itemList = catItems.map((itemId) => <Element key={itemId} itemId={itemId} />);

  function deleteCategory() {
    const catId = category._id;
    const userId = '6480a98535fbc7221e4f2eb2';
    const content = { userId, catId };
    delCat(content)
      .then((cat) => console.log('removed cat', cat.name))
      // .then(setUserCat((userCat) => userCat.filter((cat) => cat._id !== catId)))
      // .then((cat) => setUserCat((userCat) => { console.log('userCat before filter', userCat);
      // userCat.filter((cat) => cat._id !== catId)}))
      // .then(console.log('UserCat filtered'))
      .catch((error) => console.log(error));
  }

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
          <button className="btn-edit" onClick={deleteCategory}>
            Remove card
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
