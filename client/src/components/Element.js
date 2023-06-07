import './Element.css';

function Element({item}) {
  return (
    <div className="Element">
      <div className="el-title">
        <input className="el-checked" type="checkbox"></input>
        <button className="el-edit"></button>
        <h4>{item.title}</h4>
      </div>

      <div className="el-details">
        <p>every <strong>{item.frequency}</strong></p>
        <p>next reminder <strong>{item.start_date}</strong></p>
      </div>
    </div>
  );
}

export default Element;
