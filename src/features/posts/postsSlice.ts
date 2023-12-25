import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Animal = {
  id: string;
  animal: string;
  picture: string;
};

const storedAnimal = localStorage.getItem("animalArr");
const initialState: Animal[] = storedAnimal ? JSON.parse(storedAnimal) : [];

console.log(initialState);

const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsAdd: (state, action: PayloadAction<Animal>) => {
      // const card: Animal = {
      //   id: nanoid(),
      //   animal: action.payload.animal,
      //   age: action.payload.age,
      //   color: action.payload.color,
      // };

      state.push(action.payload);
      console.log("action", action.payload);

      localStorage.setItem("animalArr", JSON.stringify(state));
      console.log("state", state);

      console.log("localstorage", localStorage);
      return state;
      // return {
      //   ...state,
      //   animalArr: [...state.animalArr, card],
      // };
    },

    postsDelete: (state, action: PayloadAction<Animal>) => {
      const updatedArr = state.filter(
        (card: Animal) => card.id !== action.payload
      );
      console.log("updated arr", updatedArr);

      localStorage.setItem("animalArr", JSON.stringify(updatedArr));

      return updatedArr;
    },
    postsEdit: (state, action) => {
      //const { id, animal, picture } = action.payload;


      const cardEdit = state.find((card) => card.id === action.payload.id);
      if (cardEdit) {
        cardEdit.animal = action.payload.animal;
        cardEdit.picture = action.payload.picture;
      }

      localStorage.setItem("animalArr", JSON.stringify(state));
    },
    sortASC: (state) => {
      const sortedAnimals = [...state];
      sortedAnimals.sort((a, b) => a.animal.localeCompare(b.animal));
      console.log("state1", state);
      return sortedAnimals;
    },
    sortDESC: (state) => {
      const sortedAnimals = [...state];
      sortedAnimals.sort((a, b) => b.animal.localeCompare(a.animal));
      console.log("state2", state);
      return sortedAnimals;
    },
  },
});

export const { postsAdd, postsDelete, postsEdit, sortASC, sortDESC } =
  postsSlice.actions;

export default postsSlice.reducer;
