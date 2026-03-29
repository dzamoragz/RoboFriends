import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className="flex flex-wrap justify-center pa4" style={{ gap: '1rem' }}>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;