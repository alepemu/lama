import { useEffect, useState } from 'react';
import { loadUser } from '../services/ApiUser';
import { newCat } from '../services/ApiCategory';
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
    console.log('Dashboard rendered', userCat);
  }, []);

  let catList = userCat.map((catId) => (
    <Category key={catId} catId={catId} setUserCat={setUserCat} />
  ));

  function newCategory() {
    const currentUser = user._id;
    const content = { userId: currentUser, content: { name: 'newCatFromWeb1', color: 'default' } };
    newCat(content)
      .then((cat) => setUserCat([...userCat, cat]))
      .catch((error) => console.log(error));
  }

  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back {user.name}</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">{catList}</div>
      <button className="btn-new-cat" onClick={newCategory}>
        Add New Category
      </button>
    </div>
  );
}

export default Dashboard;
