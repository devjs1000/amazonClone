import { configureStore } from "@reduxjs/toolkit";
import accountSlice from './account.slice'
import processSlice from "./process.slice";
const store = configureStore({
    reducer: {
        account: accountSlice,
        process: processSlice
    }
})

const storeState=store.getState()
export type Store=typeof storeState;

export default store