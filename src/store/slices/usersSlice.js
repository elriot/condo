import { createSlice } from '@reduxjs/toolkit';
import { addUser } from '../../thunks/addUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(addUser.pending, (state, action) => {
            console.log("addUser pending");
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            console.log("addUser fulfilled");
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            console.log("addUser rejected");
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export const usersReducer = usersSlice.reducer;
