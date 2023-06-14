import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import './ButtonCatEdit.css';

function ButtonCatEdit({ updateCategory, deleteCategory, cat }) {
  const [newName, setNewName] = useState(cat.name);

  useEffect(() => {
    setNewName(cat.name);
  }, [cat]);

  function updateName(e) {
    e.preventDefault();
    updateCategory(cat._id, newName, cat._color);
    setNewName('');
  }

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <SettingsIcon className="cat-edit-btn" variant="contained" {...bindTrigger(popupState)} />
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
            <div className="name-edit-window">
              <form onSubmit={updateName}>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                ></input>
                <input type="submit" value="Update title"></input>
              </form>
              <DeleteIcon className="cat-del-btn" onClick={() => deleteCategory(cat._id)} />
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatEdit;
