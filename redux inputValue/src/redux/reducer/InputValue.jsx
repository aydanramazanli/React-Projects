import { createSlice } from "@reduxjs/toolkit";

const state={
    name:"aydan"
}

const InputValue = createSlice({
    name:"InputValue", 
    initialState:state,
    reducers:{
        setName:(state,action)=>{
            state.name = action.payload
        }
    }
})

export const {setName} = InputValue.actions

export default InputValue.reducer