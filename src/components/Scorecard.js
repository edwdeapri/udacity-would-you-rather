import React from "react";

const Scorecard = props => {
  const { user } = props;
  return (
    <div>
      <img src={user.avatarURL} alt={`Avatar of ${user}`} />
      <div>
        <h2>{user.name}</h2>
        <p>Asked Questions: {user.questions.length}</p>
        <p>Answered Questions: {Object.keys(user.answers).length}</p>
      </div>
      <div>
        <h2>
          Total Score:{" "}
          {user.questions.length + Object.keys(user.answers).length}
        </h2>
      </div>
    </div>
  );
};

export default Scorecard;
