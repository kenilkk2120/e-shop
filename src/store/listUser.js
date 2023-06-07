import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userdata = createAsyncThunk('list/user', async ({ page, search }) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`)
    return response
})

export const userSingleData = createAsyncThunk('list/single-user', async ({ id }) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`)
    return response
})


export const initialState = {
    loading: false,
    data: [],
    error: null,
    totalPages: null,
    singleUserData: null
}

export const userSlice = createSlice({
    name: 'listUser',
    initialState,
    extraReducers: {
        [userdata.pending]: (state, action) => {
            /**
             * for getting search data request
             * 
             * if(action.meta.arg.search !== '') {
                state.data = []
                }
             */

            state.loading = true
        },
        [userdata.fulfilled]: (state, action) => {
            state.loading = false
            /**
             * array spred (...) and pagination
             */
            state.data = [...state.data, ...action.payload.data.data]
            state.totalPages = action.payload.data.total_pages
            state.search = action.payload.data.data
        },
        [userdata.error]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [userSingleData.pending]: (state) => {
            state.loading = true
        },
        [userSingleData.fulfilled]: (state, action) => {
            state.loading = false
            state.singleUserData = action.payload.data
        },
        [userSingleData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

    }

})

export default userSlice.reducer
