import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (!robots) {
    return <h1>Loading...</h1>; // or any other fallback UI
  }

  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      ))}
    </div>
  );
}

export default CardList;
