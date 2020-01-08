import { MEALS } from '../../data/dummy-data';
// a dummy data array

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
}

const mealReducer = (state = initialState, action) => {
  return state;

}

export default mealReducer