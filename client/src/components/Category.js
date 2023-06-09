import { useEffect, useState } from 'react';
import { loadCat, updateCat } from '../services/ApiCategory';
import { newItem, delItem } from '../services/ApiItem';
import ButtonCatEdit from './popups/ButtonCatEdit';
import ButtonCatColor from './popups/ButtonCatColor';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import Item from './Item';
import './Category.css';

function Category({ catId, deleteCategory }) {
  const [category, setCategory] = useState({});
  const [catItemsList, setCatItemsList] = useState([]);
  const [newItemTitle, setNewItemTitle] = useState('');

  useEffect(() => {
    loadCat(catId)
      .then((response) => {
        setCategory(response);
        setCatItemsList(response.items);
      })
      .catch((error) => console.log(error));
  }, []);

  function createItem(e) {
    e.preventDefault();
    if (newItemTitle === '') {
      alert('Give a name!');
      return;
    }
    const content = {
      catId: category._id,
      title: newItemTitle,
    };
    newItem(content)
      .then((item) => {
        setCatItemsList([...catItemsList, item._id]);
      })
      .catch((error) => console.log(error));
    setNewItemTitle('');
  }

  function deleteItem(id) {
    const itemId = id;
    const catId = category._id;
    const content = { catId, itemId };
    delItem(content)
      .then(
        setCatItemsList((catItems) => {
          return catItems.filter((item) => item !== itemId);
        })
      )
      .catch((error) => console.log(error));
  }

  function updateCategory(_id, name, color) {
    const content = { _id, name, color };
    updateCat(content)
      .then((response) => setCategory(response))
      .catch((error) => console.log(error));
  }

  let itemList = catItemsList.map((itemId) => (
    <Item key={itemId} itemId={itemId} deleteItem={deleteItem} />
  ));

  return (
    <div className={`Category ${category.color}`}>
      <div className="cat-header">
        <h2>{category.name}</h2>
        <div className="cat-buttons">
          <ButtonCatEdit
            updateCategory={updateCategory}
            deleteCategory={deleteCategory}
            cat={category}
          />
          <ButtonCatColor updateCategory={updateCategory} cat={category} />
        </div>
      </div>
      <div className="cat-content">
        {itemList}
        <div className="cat-content-footer">
          <form className="new-item-form" onSubmit={createItem}>
            <ArrowDropDownCircleOutlinedIcon className="btn-new-item" onClick={createItem} />
            <input
              type="text"
              id="input-new-item"
              name="new-item-name"
              value={newItemTitle}
              onChange={(e) => setNewItemTitle(e.target.value)}
              placeholder="New item"
              autoComplete="off"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Category;
