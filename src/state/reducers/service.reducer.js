import { createSlice } from '@reduxjs/toolkit'
import { fetchSupportedPlatforms, huntUsername } from '../actions/service.actions'


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        platforms: null,
        results: null,
        serviceLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSupportedPlatforms.fulfilled, (state, { payload }) => {
            state.serviceLoading = false
            state.platforms = payload    
        })
        builder.addCase(fetchSupportedPlatforms.pending, (state, { payload }) => {
            state.serviceLoading = true
        })
        builder.addCase(fetchSupportedPlatforms.rejected, (state, { payload }) => {
            state.serviceLoading = true
        })

        
        builder.addCase(huntUsername.fulfilled, (state, { payload }) => {
            state.serviceLoading = false
            state.results = payload    
        })
        builder.addCase(huntUsername.pending, (state, { payload }) => {
            state.serviceLoading = true
        })
        builder.addCase(huntUsername.rejected, (state, { payload }) => {
            state.serviceLoading = true
        })
    },
})


export default serviceSlice.reducer;