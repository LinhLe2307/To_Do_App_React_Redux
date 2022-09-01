import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Math.random(),
                ...action.payload
            }
            state.push(newTodo)
        },

        removeTodo: (state, action) => {
            const removeTodoId = action.payload;
            state = state.filter(todo => removeTodoId !== todo.id) // we clone a new array
            return state // have to return the new array
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer