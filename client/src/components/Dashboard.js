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
        setUserCat(response.categories)
        // console.log('client', response);
      })
      // .then(setUserCat(user.categories))
      // .then((catList = userCat.map((id) => <Category catId={id} />)))
      // .then(console.log(userCat))
      .catch((error) => console.log(error));
  }, []);

  // let list = [1, 2, 3, 4];
  // let list = userCat.map((id) => <Category catId={id} />);
  // console.log(userCat);
   let catList = userCat.map((id) => <Category key={id} catId={id} />)
  //  console.log('catlist', catList);



  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back \username\</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">{catList}</div>
      <button className="btn-new-cat">Add New Category</button>
    </div>
  );
}

export default Dashboard;
