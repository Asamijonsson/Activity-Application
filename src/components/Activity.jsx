import { useState } from "react";

const Activity = ({ activities, showActivity, setShowActivity }) => {
  const [participants, setParticipants] = useState(true);
  const [value, setValue] = useState(true);
  const getByParticipants = () => {
    let participants = document.querySelector("#participants").value;
    fetch(`http://www.boredapi.com/api/activity?participants=${participants}`)
      .then((response) => response.json())
      .then((json) => setParticipants(json));
  };

  let selectValue = (event) => {
    if (event.target.value === "Random") {
      setValue(true);
    } else {
      setValue(false);
    }
  };
  console.log(value);
  return (
    <div>
      <h3>Choose participants</h3>
      <select name="participants" id="participants" onChange={selectValue}>
        <option value="Random"> </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
      </select>
      <button
        onClick={() => {
          setShowActivity(!showActivity);
          getByParticipants();
        }}
      >
        show
      </button>

      {value ? (
        <div className="activity">
          <h2>Activity: {activities.activity}</h2>
          <h2>Type: {activities.type}</h2>
          <h2>Participants: {activities.participants}</h2>
        </div>
      ) : (
        <div className="activity">
          <h2>Activity: {participants.activity}</h2>
          <h2>Type: {participants.type}</h2>
          <h2>Participants: {participants.participants}</h2>
        </div>
      )}
    </div>
  );
};
export default Activity;
