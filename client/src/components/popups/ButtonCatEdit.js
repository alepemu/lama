import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './ButtonCatEdit.css';
import { useState } from 'react';

function ButtonCatEdit({ updateCategory, deleteCategory, cat }) {
  const [newName, setNewName] = useState(cat.name);

  function updateName(e) {
    e.preventDefault();
    updateCategory(cat._id, newName, cat._color);
    setNewName('');
  }

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
              <form onSubmit={updateName}>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                ></input>
                <input type="submit"></input>
              </form>
              <button onClick={() => deleteCategory(cat._id)}>Delete category</button>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatEdit;