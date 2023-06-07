import './Category.css';
import Element from './Element';
import Mocks from '../mocks/mock-items-household.json'


function Category() {

 const listElements = Mocks.map(element => <Element item={element}/>)


  return (
    <div className="Category">
      <div className="cat-header">
        <h2 className="cat-title">Category Title</h2>
        <div className="cat-buttons">
          <button className="cat-edit">E</button>
          <button className="cat-color-picker">C</button>
        </div>
      </div>
      <div className="cat-content">
        {/* <Element />
        <Element />
        <Element />
        <Element /> */}
        {listElements}

          <button className="btn-new-item">+ Add new item</button>

      </div>
    </div>
  );
}

export default Category;
