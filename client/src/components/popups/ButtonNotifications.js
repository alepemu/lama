import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import { Checkbox } from '@mui/material';
import { useState } from 'react';
import { sendEmail } from '../../services/ApiEmail';
import './ButtonNotifications.css';

function ButtonNotifications({ user }) {
  const [emailWhenDue, setEmailWhenDue] = useState(false);
  const [emailWhenFreq, setEmailWhenFreq] = useState(false);
  const [emailFreq, setEmailFreq] = useState('1');

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <div>
          <div id="dashboard-adjustments" {...bindTrigger(popupState)}>
            <NotificationsIcon />
            <h4>Notifications </h4>
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className="notifications-window">
              <div className="notif-line">
                <Checkbox
                  checked={emailWhenDue ? true : false}
                  onChange={() => setEmailWhenDue(!emailWhenDue)}
                  size="small"
                  color="default"
                />
                <p>Send email when an item is due</p>
              </div>
              <hr />
              <p id="all-notes-p">Send email with all my notes...</p>
              <div className="notif-line">
                <Checkbox
                  checked={emailWhenFreq ? true : false}
                  onChange={() => setEmailWhenFreq(!emailWhenFreq)}
                  size="small"
                  color="default"
                />
                <p>every</p>
                <input type="number" value={emailFreq} 
                onChange={(e) => setEmailFreq(e.target.value)}
                id="notif-freq-n"></input>
                <p>week(s) //</p>
                <div
                  id="notif-now-btn"
                  onClick={() => {
                    sendEmail(user._id);
                    alert(`An email was sent to ${user.email}`);
                  }}
                >
                  <p>now</p>
                  <SendIcon />
                </div>
              </div>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default ButtonNotifications;
