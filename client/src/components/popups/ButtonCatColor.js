import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './ButtonCatColor.css';
import ColorLensIcon from '@mui/icons-material/ColorLens';

function ButtonCatColor({ updateCategory, cat }) {
  function changeColor(col) {
    updateCategory(cat._id, cat.name, col);
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <ColorLensIcon className="cat-color-btn" variant="contained" {...bindTrigger(popupState)} />
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
              <button className="cp-r" onClick={() => changeColor('cat-red')}>
                R
              </button>
              <button className="cp-g" onClick={() => changeColor('cat-green')}>
                G
              </button>
              <button className="cp-b" onClick={() => changeColor('cat-blue')}>
                B
              </button>
              <button className="cp-y" onClick={() => changeColor('cat-yellow')}>
                Y
              </button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatColor;
