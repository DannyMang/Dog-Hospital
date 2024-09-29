import React, { useState } from 'react';
import DogList from './DogList';
import DogForm from './DogForm';

const App = () => {
  const [dogs, setDogs] = useState([]);

  const handleAddDog = (dog) => {
    setDogs([...dogs, { ...dog, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Dog Hospital</h1>
      <DogForm onSubmit={handleAddDog} />
      <DogList dogs={dogs} />
    </div>
  );
};

export default App;