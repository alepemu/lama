import './Category.css';
import Element from './Element';

function Category({catId}) {
  // const itemList = cat.items.map((element) => <Element key={'tbc'} item={element} />);
const itemList = []

  return (
    <div className="Category">
      <div className="cat-header">
        <h2 className="cat-title">{catId}</h2>
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
