import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "../redux/GlobalState"




const store = configureStore({
    reducer:{
        todosstore : AppReducer
    }
})

export default store