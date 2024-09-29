import React, { useState } from 'react';

const DogForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, breed });
    setName('');
    setBreed('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </div>
      <button type="submit">Add Dog</button>
    </form>
  );
};

export default DogForm;