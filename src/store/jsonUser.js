import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const jsonUserData = createAsyncThunk('json/user', async ({ search, page }) => {
    if (search) {
        const responseSearch = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
        return responseSearch
    }
    const response = await axios.get(`https://dummyjson.com/products?limit=12&skip=${page}`)
    return response
})

export const jsonSingleData = createAsyncThunk('json/single-data', async ({ id }) => {
    const responseId = await axios.get(`https://dummyjson.com/products/${id}`)
    return responseId
})

export const jsonCartData = createAsyncThunk('json/cart-data', async ({ id }) => {
    const responseId = await axios.get(`https://dummyjson.com/products/${id}`)
    return responseId
})

export const initialState = {
    loading: false,
    data: [],
    error: null,
    totalPages: null,
    singleData:null,
    CartData: null,
    cart: []
}

export const jsonUserSclice = createSlice({
    name: 'jsonUser',
    initialState,
    reducers: {
        addToCart(state,action) {
            // console.log('action', state.cart.push(action.payload.data))
            state.cart.push(action.payload.data)
        } 
    },
    extraReducers: {
        [jsonUserData.pending]: (state, action) => {
            state.loading = true
        },
        [jsonUserData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.totalPages = action.payload.data.total
        },
        [jsonUserData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        [jsonSingleData.pending]: (state) => {
            state.loading = true
        },
        [jsonSingleData.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload.data
        },
        [jsonSingleData.error]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        [jsonCartData.pending]: (state) => {
            state.loading = true
        },
        [jsonCartData.fulfilled]: (state, action) => {
            state.loading = false
            state.CartData = action.payload.data
        },
        [jsonCartData.error]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})
export const { addToCart } = jsonUserSclice.actions
export default jsonUserSclice.reducer