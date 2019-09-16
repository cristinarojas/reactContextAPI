// Dependencies
import React, { useContext } from 'react';

// usign Context
import { FoodContext } from '../context/foodContext';

const FoodFavorite = () => {
  console.log('Enter FoodFavorite Component***!!!');

  // Using data
  const [food, setFood] = useContext(FoodContext);

  return (
    <>
      <h3>My Favorite Food Component</h3>
      <ul>
        {
          food.map((food, i) => (
            <li>
              {food.name}
            </li>
          ))
        }
      </ul>
    </>
  );
}


export default FoodFavorite;
