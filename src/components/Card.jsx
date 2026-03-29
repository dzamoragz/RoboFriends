import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green br3 pa3 ma2 bw2 shadow-5 flex flex-column justify-between" style={{width: '260px', minWidth: '260px', maxWidth: '260px', boxSizing: 'border-box'}}>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;