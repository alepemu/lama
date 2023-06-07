import './Category.css';
import Element from './Element';

function Category({ cat }) {
  const itemList = cat.items.map((element) => <Element key={'tbc'} item={element} />);

  return (
    <div className="Category">
      <div className="cat-header">
        <h2 className="cat-title">{cat.name}</h2>
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
