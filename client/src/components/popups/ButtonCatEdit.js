import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './ButtonCatEdit.css';

function ButtonCatEdit({deleteCategory, catId}) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className="cat-edit-btn" variant="contained" {...bindTrigger(popupState)}>
            Edit
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
            <div className="color-edit-window">
              <input type='text'></input>
              <button>Update name</button>
              <button onClick={() => deleteCategory(catId)}>Delete category</button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatEdit;
