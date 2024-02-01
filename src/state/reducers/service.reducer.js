import { createSlice } from '@reduxjs/toolkit'
import { fetchSupportedPlatforms, huntUsername } from '../actions/service.actions'


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        platforms: null,
        results: [],
        serviceLoading: false,
        resultLoading: false,
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
            state.serviceLoading = false
        })

        
        builder.addCase(huntUsername.fulfilled, (state, { payload }) => {
            state.serviceLoading = false
            state.resultLoading = false
            const index = state.results.findIndex(item => item.platform === payload.platform)
            if (index === -1) {
                state.results.push(payload);
            } else {
                state.results[index] = payload
            }
        })
        builder.addCase(huntUsername.pending, (state, { payload }) => {
            state.serviceLoading = true
            state.resultLoading = true

        })
        builder.addCase(huntUsername.rejected, (state, { payload }) => {
            state.serviceLoading = false
            state.resultLoading = false

        })
    },
})


export default serviceSlice.reducer;