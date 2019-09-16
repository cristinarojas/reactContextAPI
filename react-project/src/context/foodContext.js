// Dependencies
import React, { useState, createContext } from 'react';

// Exporting FoodContext
export const FoodContext = createContext();

// Exporting FoodProvider
export const FoodProvider = (props) => {
  const [food, setFood] = useState([
    {
      name: 'Tacos'
    },
    {
      name: 'Tamales'
    },
    {
      name: 'Pozole'
    }
  ]);

  // This will render all the child components
  // that will be wrapper between this.
  return (
    <FoodContext.Provider
      value={[food, setFood]}
    >
      {props.children}
    </FoodContext.Provider>
  );
}
