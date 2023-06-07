import './Dashboard.css';
import Category from './Category';
import { useState } from 'react';
import Mocks from '../mocks/mock-categories-big.json';

function Dashboard() {
  const [categories, setCategories] = useState(Mocks);

  const catList = Mocks.map((category) => <Category key={'tbc'} cat={category} />);

  return (
    <div className="Dashboard">
      <h2 id="welcome-msg">Welcome back \username\</h2>
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">
        {catList}
      </div>
                <button className="btn-new-cat">Add New Category</button>
    </div>
  );
}

export default Dashboard;
