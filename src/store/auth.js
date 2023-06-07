import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Thunk Action
export const login = createAsyncThunk('auth/login', async ({ data }) => {
    const response = await axios.post('https://reqres.in/api/login', data)
    if (response) localStorage.setItem('token', response.data.token)
    return response;
})

const initialState = {
    loading: false,
    data: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            console.log('action----', action)
            state.loading = false
            state.data = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer    