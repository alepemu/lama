import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useState, useEffect } from 'react';
import './ButtonItemEdit.css';
import BuildIcon from '@mui/icons-material/Build';
import dayjs from 'dayjs';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function ButtonItemEdit({ updateItem, item }) {
  const [itemTitle, setItemTitle] = useState(item.title);
  const [itemStartDate, setItemStartDate] = useState(item.start_date);
  const [itemFrequency, setItemFrequency] = useState(item.frequency);

  const [showFreqMenu, setShowFreqMenu] = useState(false);

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
    console.log('button', content);
    updateItem(content);
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <BuildIcon className="item-edit-btn" variant="contained" {...bindTrigger(popupState)} />
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
                {/* <label>Title</label> */}
                <input
                  type="text"
                  value={itemTitle}
                  onChange={(e) => setItemTitle(e.target.value)}
                ></input>
                {/* <label>Date</label> */}
                <input
                  type="datetime-local"
                  value={itemStartDate}
                  onChange={(e) => setItemStartDate(e.target.value)}
                ></input>

                <FormControl>
                  <RadioGroup
                    defaultValue="no-freq"
                    onChange={() => setShowFreqMenu(!showFreqMenu)}
                  >
                    <FormControlLabel
                      value="no-freq"
                      control={<Radio color="default" size="small" />}
                      label="Does not repeat"
                    />
                    <FormControlLabel
                      value="freq"
                      control={<Radio color="default" size="small" />}
                      label="Repeats every..."
                    />
                  </RadioGroup>
                </FormControl>

                {showFreqMenu && (
                  <div className="item-freq-window">
                    <input type="number"></input>
                    <select id="freq-select">
                      <option value="day">day(s)</option>
                      <option value="week">week(s)</option>
                      <option value="month">month(s)</option>
                    </select>
                  </div>
                )}
                <input type="submit" value="Update"></input>
              </form>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonItemEdit;
