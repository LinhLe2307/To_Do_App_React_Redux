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
        editTodo: (state, action) => {
            const newTodo = action.payload;
            const todoIndex = state.findIndex(todo => todo.id === newTodo.id)
            if (todoIndex >= 0) {
                // state = state.splice(todoIndex, 1, action.payload)
                state[todoIndex] = newTodo
                
            }
        },
        removeTodo: (state, action) => {
            const removeTodoId = action.payload;
            state = state.filter(todo => removeTodoId !== todo.id) // we clone a new array
            return state // have to return the new array
        },
        searchTodo: (state, action) => {
            const todoTask = action.payload;
            state = state.filter(todo => todo.taskName.indexOf(todoTask) !== -1);
            return state
        }
    }
})

export const {addTodo, editTodo, removeTodo, searchTodo} = todoSlice.actions
export default todoSlice.reducer