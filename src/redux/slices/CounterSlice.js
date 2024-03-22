import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialvalue: 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.initialvalue += 1;
        },
        decrement: (state) => {
            state.initialvalue -= 1;
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment, decrement} = CounterSlice.actions;

// counterslice ko export kr diya
export default CounterSlice.reducer;