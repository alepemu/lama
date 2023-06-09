import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './ButtonCatColor.css';
import { useState } from 'react';

function ButtonCatColor({updateCategory, cat}) {
  // const [newColor, setNewColor] = useState(cat.color);

  function changeColor(col) {
    // console.log(col)
    // console.log(cat);
    // console.log(cat._id);
    // console.log(cat.name);
    updateCategory(cat._id, cat.name, col);
  } 


  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className="cat-color-btn" variant="contained" {...bindTrigger(popupState)}>
            Color
          </button>
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
            <div className="color-picker-window">
              <button class="cp-r" onClick={() => changeColor('cat-red')}>R</button>
              <button class="cp-g" onClick={() => changeColor('cat-green')}>G</button>
              <button class="cp-b" onClick={() => changeColor('cat-blue')}>B</button>
              <button class="cp-y" onClick={() => changeColor('cat-yellow')}>Y</button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatColor;
