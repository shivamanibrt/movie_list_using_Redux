import { createSlice } from "@reduxjs/toolkit";

// const [movieList, setMovieList] = useState([]);
// const [error, setError] = useState(false);
//const [movieList,setMovieList]= useState([]);
const initialState = {
    searchedMovie: {},
    error: false,
}

export const movieSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {
        setSearchedMovie: (state, action) => {
            state.searchedMovie = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },

    }
})

export const { reducer, actions } = movieSlice;
export const { setSearchedMovie, setError } = actions;
export default reducer