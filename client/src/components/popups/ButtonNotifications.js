import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { sendEmail } from "../../services/ApiEmail";
import { updateUser } from "../../services/ApiUser";
import "./ButtonNotifications.css";

function ButtonNotifications({ user, setUser }) {
  const [emailWhenDue, setEmailWhenDue] = useState(false);
  const [emailWhenFreq, setEmailWhenFreq] = useState(false);
  const [emailFreq, setEmailFreq] = useState(0);

  useEffect(() => {
    setEmailWhenDue(user.notif_due);
    setEmailWhenFreq(user.notif_opt);
    setEmailFreq(user.notif_freq);
  }, [user]);

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
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className="notifications-window">
              <div className="notif-line">
                <Checkbox
                  checked={emailWhenDue ? true : false}
                  onChange={() => {
                    setEmailWhenDue(!emailWhenDue);
                    setUser({ ...user, notif_due: !emailWhenDue });
                    updateUser({ ...user, notif_due: !emailWhenDue });
                  }}
                  size="small"
                  color="default"
                />
                <p>Send email when an item is due</p>
              </div>
              <hr />
              <p id="all-notes-p">Send email with all my notes...</p>
              <div id="block-screen"></div>
              <div className="notif-line">
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
