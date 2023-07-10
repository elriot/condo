import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addUser } from '../thunks/addUser';

const usersSlice = createSlice({
    name: 'users',
    initialState: {   
        isLoading:false,     
        data: [],
        error: null
    },
    extraReducers (builder) { // async
        builder.addCase(addUser.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(addUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.error= action.error;
        });
        // addUser(state, action) {
        //     console.log(state, action, "Hhh");
        //     state.data.push({
        //         email: action.payload.email,
        //         password: action.payload.password,
        //         name: action.payload.name,
        //         phone: action.payload.phone,
        //         type: action.payload.type,
        //         unit: action.payload.unit,
        //         id: nanoid()
        //     })
        // }
    }
});
export const usersReducer = usersSlice.reducer;
