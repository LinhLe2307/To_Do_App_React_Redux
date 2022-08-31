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
        }
    }
})

export const {addTodo} = todoSlice.actions
export default todoSlice.reducer