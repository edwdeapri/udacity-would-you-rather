import React, { Component } from "react";

const NewPoll = props => {
  const { handleNewPoll, answerOne, answerTwo } = props;
  return (
    <div>
      <form>
        <textarea
          placeholder="First Answer"
          value={answerOne}
          name="answerOne"
          onChange={handleNewPoll}
          rows="2"
          style={{ resize: "none" }}
        />
        <textarea
          placeholder="Second Answer"
          value={answerTwo}
          name="answerTwo"
          onChange={handleNewPoll}
          rows="2"
          style={{ resize: "none" }}
        />
      </form>
    </div>
  );
};

export default NewPoll;
