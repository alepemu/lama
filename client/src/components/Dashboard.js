import { useEffect, useState } from 'react';
import { loadUser } from '../services/ApiUser';
import Category from './Category';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState({});
  const [userCat, setUserCat] = useState([]);
  let currentUserId = '6480a98535fbc7221e4f2eb2';

  useEffect(() => {
    loadUser(currentUserId)
      .then((response) => {
        setUser(response);
        setUserCat(response.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  let catList = userCat.map((id) => <Category key={id} catId={id} />);

  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back {user.name}</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">{catList}</div>
      <button className="btn-new-cat">Add New Category</button>
    </div>
  );
}

export default Dashboard;
