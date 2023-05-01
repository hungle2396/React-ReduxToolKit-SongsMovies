import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "song",
    initialState: [] as SongState,
    reducers: {
        addSong(state, action: PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong(state, action: PayloadAction<Song>) {
            //
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

const startingState = store.getState();

console.log(JSON.stringify(startingState));

store.dispatch({
    type: "song/addSong",
    payload: "New Song!"
});

const finalState = store.getState();

console.log(JSON.stringify(finalState));