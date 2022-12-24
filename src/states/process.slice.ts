import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    loadings: {},
    splash: true,
}

const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        load: (state, action) => {
            state.loading = true;
            state.loadings[action.payload.name] = action.payload.value;
        },
        loaded: (state, action) => {
            state.loading = false;
            delete state.loadings[action.payload.name]
        },
        hideSplash:(state)=>{
            state.splash=false
        },
    }
})

export const { load, loaded, hideSplash } = processSlice.actions;
export default processSlice.reducer