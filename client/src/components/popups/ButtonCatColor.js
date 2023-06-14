import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import './ButtonCatColor.css';

function ButtonCatColor({ updateCategory, cat }) {
  function changeColor(col) {
    updateCategory(cat._id, cat.name, col);
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <ColorLensIcon
            className="cat-color-btn"
            variant="contained"
            {...bindTrigger(popupState)}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
          >
            <div className="color-picker-window">
              <button className="cp-def" onClick={() => changeColor('cat-def')}></button>
              <button className="cp-grey" onClick={() => changeColor('cat-grey')}></button>
              <button className="cp-r" onClick={() => changeColor('cat-red')}></button>
              <button className="cp-o" onClick={() => changeColor('cat-orange')}></button>
              <button className="cp-y" onClick={() => changeColor('cat-yellow')}></button>
              <button className="cp-g" onClick={() => changeColor('cat-green')}></button>
              <button className="cp-c" onClick={() => changeColor('cat-cyan')}></button>
              <button className="cp-b" onClick={() => changeColor('cat-blue')}></button>
              <button className="cp-p" onClick={() => changeColor('cat-purple')}></button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatColor;
