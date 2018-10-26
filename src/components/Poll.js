import React from 'react';

import PollPreview from './PollPreview';
import Error from './Error';

const Poll = props => {
  const { id } = props.match.params;
  const { answeredIds, unansweredIds } = props;
  return (
    <div>
      {answeredIds.includes(id) ? (
        <PollPreview id={id} answered={true} />
      ) : unansweredIds.includes(id) ? (
        <PollPreview id={id} answered={false} />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Poll;
