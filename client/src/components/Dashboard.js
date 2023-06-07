import './Dashboard.css';
import Category from './Category';

function Dashboard() {
  return (
    <div className="Dashboard">
      <div id="dashboard-adjustments">
        <h3>Notification Settings</h3>
      </div>
      <div id="dashboard-pool">
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}

export default Dashboard;
