import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {//State is the data your app uses.
        //It's like the "memory" of your app — stored in one central place (Redux store).
        // An action is a plain JavaScript object that tells Redux what happened.

        // It’s like saying:

        // "Hey Redux, something changed — please update the state!" u wiill get type and payload


        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => ( todo.id !== action.payload ))
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer;