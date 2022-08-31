import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            {id: 1, content: "Hello"}
        ]
    },
    reducers: {

    }
})

export const {} = todoSlice.actions
export default todoSlice.reducer