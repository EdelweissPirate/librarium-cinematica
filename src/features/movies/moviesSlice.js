import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import moviesService from './moviesService'

const initialState = {
    movies: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: null,
}

const errorHandle = (error) => {
    const message = ((error.response && error.response.movies && error.response.movies.message) || error.message || error.toString())
    throw new Error(message)
} 

// init films
// export const initFilms = createAsyncThunk(
//     'movies/initFilms',
//     async () => {
//         try {
//             return await moviesService.initFilms()
//         } catch (error) {
//             errorHandle(error)
//         }
//     }
// )

// search films
export const searchFilms = createAsyncThunk(
    'movies/searchFilms',
    async (arg) => {
        try {
            return await moviesService.searchFilms(arg)
        } catch (error) {
            errorHandle(error)
        }
    }
)

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //
            // .addCase(initFilms.pending, (state) => {
            //     state.isLoading = true
            //     state.movies = null
            // })
            // .addCase(initFilms.fulfilled, (state, action) => {
            //     state.isLoading = false
            //     state.isSuccess = true
            //     // console.log(action.payload)
            //     state.movies = null
            //     state.movies = action.payload
            // })
            // .addCase(initFilms.rejected, (state, action) => {
            //     state.isLoading = false
            //     state.isError = true
            //     // console.log(action.payload)
            //     state.message = action.payload
            // })

            //
            .addCase(searchFilms.pending, (state) => {
                state.isLoading = true
            })
            .addCase(searchFilms.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                console.log(action)
                state.movies = null
                state.movies = action.payload
            })
            .addCase(searchFilms.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                // console.log(action.payload)
                state.movies = null
                state.message = action.payload
            })
    }
})

export const { reset } = moviesSlice.actions
export default moviesSlice.reducer