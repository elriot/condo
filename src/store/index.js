import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./apis/userApi";
import { usersReducer } from './slicer/usersSlicer';
import {
    signupFormReducer,
    changeEmail,
    changePassword,
    changeName,
    changeType,
    changePhone,
    changeUnit
} from './slicer/signupFormSlicer';



// configureStore : correct mini slicers and merge to huge store // 작은 slices들을 모아서 store로 만든다
export const store = configureStore({
    reducer: { // each slice's reducer
        users: usersReducer,
        signupForm: signupFormReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export * from './thunks/addUser';
export {
    useFetchUsersQuery,
    useAddUserMutation,
    useRemoveUserMutation
} from './apis/userApi';

export {
    // store, 
    changeEmail,
    changePassword,
    changeName,
    changeType,
    changePhone,
    changeUnit
}
// setupListeners(store.dispatch);
