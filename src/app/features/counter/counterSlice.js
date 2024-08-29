import {createSlice} from '@reduxjs/toolkit';

const counter = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByCount:(state, action)=>{
            state.count+=action.payload;
        },
        decrementByCount:(state, action)=>{
            state.count-=action.payload;
        }
    }
});

export default counter.reducer;

export const useCount = (state)=>state.count;

export const {increment, incrementByCount, decrement, decrementByCount} = counter.actions;