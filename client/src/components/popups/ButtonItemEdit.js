import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useState, useEffect } from 'react';
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
    const [itemData, setItemData] = useState({});
  // const [itemTitle, setItemTitle] = useState('');
  // const [itemStartDate, setItemStartDate] = useState('');
  // const [itemFrequency, setItemFrequency] = useState('');

  useEffect(() => {
    console.log('is this runnign too much');
    // setItemTitle(item.title);
    // setItemStartDate(item.start_date);
    // setItemFrequency(item.frequency);
    setItemData(item)
  }, [item]);


  function updateContent(e) {
    e.preventDefault();
    const content = {
      _id: itemData._id,
      title: itemData.title,
      start_date: itemData.start_date,
      frequency: itemData.frequency,
      checked: itemData.checked,
    };
    console.log('button', content);
    updateItem(content);
  }

  return (
    <PopupState variant="popover">
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
                  value={itemData.title}
                  onChange={(e) => setItemData({title: e.target.value})}
                ></input>
                <input
                  type="datetime-local"
                  value={itemData.start_date}
                  // onChange={(e) => setItemData({start_date: e.target.value})}
                ></input>
                <input
                  type="number"
                  value={itemData.frequency}
                  onChange={(e) => setItemData({frequency: e.target.value})}
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
