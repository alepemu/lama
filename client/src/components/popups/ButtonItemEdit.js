import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useState } from 'react';
import './ButtonItemEdit.css';
import BuildIcon from '@mui/icons-material/Build';

function ButtonItemEdit({ updateItem, item }) {
  //   const [itemChange, setItemChange] = useState({
  //     _id: item._id,
  //     title: item.title,
  //     start_date: item.start_date,
  //     frequency: item.frequency,
  //     checked: item.checked,
  //   });
  // WHY IS THE BELOW NOT WORKING!!!!!!!!!!!!!!!!
  //   const [itemName, setItemName] = useState(item.title);
  const [itemTitle, setItemTitle] = useState('');
  const [itemStartDate, setItemStartDate] = useState('');
  const [itemFrequency, setItemFrequency] = useState('');

  function updateContent(e) {
    e.preventDefault();
    const content = {
      _id: item._id,
      title: itemTitle,
      start_date: itemStartDate,
      frequency: itemFrequency,
      checked: item.checked,
    };
    console.log('button', content);
    updateItem(content);
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          {/* <button
            className="item-edit-btn"
            variant="contained"
            {...bindTrigger(popupState)}
          ></button> */}

          <BuildIcon 
            className="item-edit-btn"
            variant="contained"
            {...bindTrigger(popupState)}/>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <div className="item-edit-window">
              <form onSubmit={updateContent}>
                <input
                  type="text"
                  value={itemTitle}
                  onChange={(e) => setItemTitle(e.target.value)}
                ></input>
                <input
                  type="datetime-local"
                  value={itemStartDate}
                  onChange={(e) => setItemStartDate(e.target.value)}
                ></input>
                <input
                  type="number"
                  value={itemFrequency}
                  onChange={(e) => setItemFrequency(e.target.value)}
                ></input>
                <input type="submit"></input>
              </form>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonItemEdit;
