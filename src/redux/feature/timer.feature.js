import { createSlice } from "@reduxjs/toolkit"

const initialState={
    timer : 0
}
const timerSlice=createSlice(({
    name : "timerValue",
    initialState:initialState,
    reducers:{
        minute: (state,action)=>{
            state.timer= state.timer.timer + action.payload
        },
        second: (state,action)=>{
            state.timer =state.timer - action.payload
        }
    }
}))
export const {minute,second}=timerSlice.actions;

export default timerSlice.reducer;