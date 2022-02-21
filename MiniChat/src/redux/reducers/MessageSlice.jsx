import {createSlice} from '@reduxjs/toolkit'


const state = {
    message:[]
}



export const MessageSlice = createSlice({
    name:"Message", 
    initialState:state,
    reducers:{
        addMessage:(state, action)=>{
            state.message.push(action.payload)
        }
    }
})



export const {addMessage} = MessageSlice.actions
