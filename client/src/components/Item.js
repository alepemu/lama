import { useEffect, useState } from 'react';
import { loadItem, updItem } from '../services/ApiItem';
import { Checkbox } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonItemEdit from './popups/ButtonItemEdit';
import dayjs from 'dayjs';
import './Item.css';

function Item({ itemId, deleteItem }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    loadItem(itemId)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function dateItem(date) {
    return dayjs(date).format('DD/MM/YYYY HH:mm a');
  }

  function updateItem(itemData) {
    console.log('item-start', itemData);
    updItem(itemData)
      .then((response) => setItem(response))
      .catch((error) => console.log(error));
  }

  return (
    <div className="Item">
      <div className={`el-title ${item.checked ? 'el-checked' : 'el-not-checked'}`}>
        <Checkbox
          checked={item.checked ? true : false}
          onChange={() => updateItem({ ...item, checked: !item.checked })}
          size="small"
          color="default"
        />
        <ClearIcon className="el-remove" onClick={() => deleteItem(item._id)} />
        <ButtonItemEdit updateItem={updateItem} item={item} />
        <h4>{item.title}</h4>
      </div>
      <div className={`el-details ${item.checked ? 'el-checked' : 'el-not-checked'}`}>
        <p>
          <strong>{item.frequency ? `every ${item.frequency}` : ''}</strong>
        </p>
        <p>
          <strong>{item.start_date ? dateItem(item.start_date) : ''}</strong>
        </p>
      </div>
    </div>
  );
}

export default Item;
