import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const instance = axios.create({
	baseURL: import.meta.env.VITE_APP_DEV_API,
	headers: {
		// 'Content-Type': 'application/json',
	},
})


export const fetchSupportedPlatforms = createAsyncThunk(
    'platform/fetch',
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await instance.get(`/supported-platforms`);
            return data.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)


export const huntUsername = createAsyncThunk(
    'platform/hunt',
    async ({platform, username}, {rejectWithValue}) => {
        try {
            const { data } = await instance.post(`/hunt/${username}?platforms=${platform}`);
            console.log(data.data);
            return data.data?.[0]
        } catch (error) {
            console.log(error)
            return rejectWithValue(null)
        }
    }
)