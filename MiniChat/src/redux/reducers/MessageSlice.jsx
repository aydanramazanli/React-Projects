import {createSlice} from '@reduxjs/toolkit'


const state = {
    messages:[]
}



export const MessageSlice = createSlice({
    name:"Message", 
    initialState:state,
    reducers:{
        addMessage:(state, action)=>{
            state.messages.push(action.payload)
        },
        messageReading:(state, action)=>{
            state.messages.filter((m)=> !m.read).forEach((m) => m.read = true)
        }
    }
})



export const {addMessage, messageReading} = MessageSlice.actions
