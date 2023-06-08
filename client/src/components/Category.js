import { useEffect, useState } from 'react';
import { loadCat } from '../services/ApiCategory';
import { newItem, delItem } from '../services/ApiItem';
import Element from './Element';
import './Category.css';

function Category({ catId, deleteCategory }) {
  const [category, setCategory] = useState({});
  const [catItems, setCatItems] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');

  useEffect(() => {
    loadCat(catId)
      .then((response) => {
        setCategory(response);
        setCatItems(response.items);
      })
      .catch((error) => console.log(error));
  }, []);

  let itemList = catItems.map((itemId) => <Element key={itemId} itemId={itemId} />);

  function createItem(e) {
    e.preventDefault();
    if (newItemTitle === '') {
      alert('Give a name!');
      return;
    }
    const content = {
      catId: category._id,
      content: { title: newItemTitle, frequency: 123456, start_date: 987654321, checked: false },
    };
    newItem(content)
      .then((item) => {
        setCatItems([...catItems, item._id]);
      })
      .catch((error) => console.log(error));
    setNewItemTitle('');
  }


  // function deleteCategory(id) {
  //   const catId = id;
  //   const userId = user._id;
  //   const content = { userId, catId };
  //   delCat(content)
  //     .then(
  //       setUserCatList((userCatList) => {
  //         return userCatList.filter((cat) => cat !== catId);
  //       })
  //     )
  //     .catch((error) => console.log(error));
  // }

  return (
    <div className="Category">
      <div className="cat-header">
        <h2 className="cat-title">{category.name}</h2>
        {/* <button className="cat-color">C</button> */}
        <button className="cat-remove" onClick={() => deleteCategory(category._id)}>
          Delete
        </button>
      </div>
      <div className="cat-content">
        {itemList}
        <div className="cat-content-buttons">
          <form onSubmit={createItem}>
            <input
              type="text"
              id="input-new-item"
              name="new-item-name"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="New item"
            ></input>
            <button className="btn-new">+ New Item</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Category;
