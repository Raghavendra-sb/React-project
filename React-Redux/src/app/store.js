import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice.js'
export const store = configureStore({
    reducer: {
      todo: todoReducer//super important in connecting your Redux logic to your app
    }//"Hey, I want to store some state under the name todo, and I want that state to be managed by the todoReducer."
  });
  //todo: is the key under which all your todo-related state (like todos) will be stored in the Redux store.

  // todo is the slice name in your Redux store configuration.