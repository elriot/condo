import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
    name: 'users',
    initialState:{
        data:[],
        isLoading:false,
        error:null 
    },
    reducers:{}, // 동기 
    extraReducers(builder){ // 서버 응답을 받아 처리하는 비동기 작업들
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.isLoading = false;       
            state.error = action.error;     
        });
        builder.addCase(addUser.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data.push(action.payload); 
        });
        builder.addCase(addUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
        
    }
});
// fetchUsers.pending === 'users/fetch/pending'
// fetchUsers.fulfilled === 'users/fetch/fulfilled'
// fetchUsers.rejected === 'users/fetch/rejected'
export const usersReducer = usersSlice.reducer;
