import { useEffect, useState } from 'react';
import { loadItem } from '../services/ApiItem';

import './Element.css';

function Element({ itemId }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    loadItem(itemId)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Element">
      <div className="el-title">
        <input className="el-checked" type="checkbox"></input>
        <button className="el-edit"></button>
        <h4>{item.title}</h4>
      </div>

      <div className="el-details">
        <p>
          every <strong>{item.frequency}</strong>
        </p>
        <p>
          next reminder <strong>{item.start_date}</strong>
        </p>
      </div>
    </div>
  );
}

export default Element;
