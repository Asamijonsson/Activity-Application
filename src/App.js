import { useState, useEffect } from "react";
import "./App.css";
import Activity from "./components/Activity";
function App() {
  const [showActivity, setShowActivity] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((json) => setActivities(json));
  }, [showActivity]);

  return (
    <div className="App">
      <h1>Activity Application</h1>

      <Activity
        activities={activities}
        showActivity={showActivity}
        setShowActivity={setShowActivity}
      />
    </div>
  );
}

export default App;
