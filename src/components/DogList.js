import React from 'react';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h2>Dogs</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            {dog.name} - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;