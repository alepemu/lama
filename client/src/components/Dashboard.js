import { useEffect, useState } from 'react';
import { loadUser } from '../services/ApiUser';
import { newCat } from '../services/ApiCategory';
import Category from './Category';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState({});
  const [userCat, setUserCat] = useState([]);
  const [newCatTitle, setNewCat] = useState('');

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

  function newCategory(e) {
    e.preventDefault();
    if (newCatTitle === '') {
      alert('Give a name!');
      return;
    }
    const content = { userId: user._id, content: { name: newCatTitle, color: 'default' } };
    newCat(content)
      .then((cat) => {
        setUserCat([...userCat, cat._id]);
      })
      .catch((error) => console.log(error));
    setNewCat('');
  }

  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back {user.name}</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">{catList}</div>
      <form onSubmit={newCategory}>
        <label htmlFor="input-new-cat">New Category</label>
        <input
          type="text"
          id="input-new-cat"
          name="new-cat-name"
          value={newCatTitle}
          onChange={(e) => setNewCat(e.target.value)}
          placeholder="Enter a new category name"
        ></input>
        <button className="btn-new-cat">Add New Category</button>
      </form>
    </div>
  );
}

export default Dashboard;
