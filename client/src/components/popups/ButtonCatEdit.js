import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './ButtonCatEdit.css';
import { useEffect, useState } from 'react';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';

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
          <BuildIcon className="cat-edit-btn" variant="contained" {...bindTrigger(popupState)} />
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
              <DeleteIcon className="cat-del-btn" onClick={() => deleteCategory(cat._id)} />
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonCatEdit;
