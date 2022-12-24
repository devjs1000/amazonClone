import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    user: {
        name: 'anand pandit',
        phone: 1234567890,
        email: 'email@gmail.com',
        address: 'address, street, city - pin, near location'
    }
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        login: (state) => {
            state.isLogged = true;
        },
        logout: (state) => {
            state.isLogged = false
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload }
        }

    }
})

export const { login, logout, updateUser } = accountSlice.actions

export default accountSlice.reducer