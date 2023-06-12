import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useState, useEffect } from 'react';
import './ButtonItemEdit.css';
import SettingsIcon from '@mui/icons-material/Settings';

import dayjs from 'dayjs';

function ButtonItemEdit({ updateItem, item }) {
  const [itemTitle, setItemTitle] = useState(item.title);
  const [itemStartDate, setItemStartDate] = useState(item.start_date);
  const [itemFrequency, setItemFrequency] = useState(item.frequency);

  useEffect(() => {
    setItemTitle(item.title);
    setItemStartDate(item.start_date ? dayjs(item.start_date).format('YYYY-MM-DDTHH:MM') : '');
    setItemFrequency(item.frequency || 0);
  }, [item]);

  function updateContent(e) {
    e.preventDefault();
    const content = {
      _id: item._id,
      title: itemTitle,
      start_date: itemStartDate,
      frequency: itemFrequency,
      checked: item.checked,
    };
    updateItem(content);
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <SettingsIcon
            className="item-edit-btn"
            variant="contained"
            {...bindTrigger(popupState)}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
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
                <input type="submit" value="Update item"></input>
              </form>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonItemEdit;
