import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

// do not make requests in reducers
// Reducers should always be 100% synchronous
// Reducers should only operate on their arguments - no outside variables! 

export const store = configureStore({
    reducer:{
        users:usersReducer
    }
});


export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/updateApproved';
export * from './thunks/deleteUser';