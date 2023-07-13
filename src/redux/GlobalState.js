import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:[]
} 

const AppReducer = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodos:(state, action)=>{
            state.todos.push(action.payload)
        },
        setCheck:(state, action)=>{
            state.todos.map((todo)=>{
                if(action.payload === todo.id){
                    todo.check ? (todo.check = false ): (todo.check = true)
                }
            })
        },
        removeTodos:(state, action)=>{
            const index = state.todos.findIndex(todosfind=> todosfind.id === action.id)
                state.todos.splice(index, 1)
            
            
        }
    }
})



export default AppReducer.reducer
export const {addTodos, setCheck, removeTodos} = AppReducer.actions