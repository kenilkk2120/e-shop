import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userSingleData = createAsyncThunk('user/data', async ({ id }) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    return response
})

export const initialState = {
    loading: false,
    data: [],
    error: null
}

export const userSingleDataSlice = createSlice({
    name: 'userSingle',
    initialState,
    extraReducers: {
        [userSingleData.pending]: (state, action) => {
            state.loading = true
        },
        [userSingleData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload.data
        },
        [userSingleData.error]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default userSingleDataSlice.reducer