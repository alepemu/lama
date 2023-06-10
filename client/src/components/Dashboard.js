import { useEffect, useState } from 'react';
import { loadUser } from '../services/ApiUser';
import { loadCat, newCat, delCat, updateCat } from '../services/ApiCategory';
import { delItem } from '../services/ApiItem';
import { sendEmail } from '../services/ApiEmail';
import Category from './Category';
import './Dashboard.css';

function Dashboard({ userIdDb }) {
  const [user, setUser] = useState({});
  const [userCatList, setUserCatList] = useState([]);
  const [newCatTitle, setNewCatTitle] = useState('');

  // let currentUserId = '6480a98535fbc7221e4f2eb2';
  // let currentUserId = currentUser;

  useEffect(() => {
    loadUser(userIdDb)
      .then((response) => {
        setUser(response);
        setUserCatList(response.categories);
      })
      .catch((error) => console.log(error));
    // console.log('Dashboard rendered', userCatList);
  }, []);

  function newCategory(e) {
    e.preventDefault();
    if (newCatTitle === '') {
      alert('Give a name!');
      return;
    }
    const content = { userId: user._id, content: { name: newCatTitle, color: 'cat-def' } };
    newCat(content)
      .then((cat) => {
        setUserCatList([...userCatList, cat._id]);
      })
      .catch((error) => console.log(error));
    setNewCatTitle('');
  }

  function deleteCategory(id) {
    const catId = id;
    const userId = user._id;
    const content = { userId, catId };
    // Delete items in category first
    // Then delete category and update user cat list
    loadCat(id)
      .then((response) => response.items)
      .then((list) => {
        // console.log(list);
        list.forEach((item) => {
          console.log(item);
          const content = { catId, itemId: item };
          delItem(content);
        });
      })
      .then(delCat(content))
      .then(
        setUserCatList((userCatList) => {
          return userCatList.filter((cat) => cat !== catId);
        })
      )
      .catch((error) => console.log(error));
  }

  let catList = userCatList.map((catId) => (
    <Category key={catId} catId={catId} deleteCategory={deleteCategory} />
  ));

  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back {user.name}</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
        <button onClick={() => sendEmail(user._id)}>Send me an email with all these items</button>
      </div>
      <div id="dashboard-pool">{catList}</div>
      <form className="new-cat-form" onSubmit={newCategory}>
        <input
          type="text"
          id="input-new-cat"
          name="new-cat-name"
          value={newCatTitle}
          onChange={(e) => setNewCatTitle(e.target.value)}
          placeholder="New category"
        ></input>
        <button className="btn-new-cat">+</button>
      </form>
    </div>
  );
}

export default Dashboard;
