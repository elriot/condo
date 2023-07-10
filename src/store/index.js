import {configureStore} from '@reduxjs/toolkit';
import { usersReducer, addUser } from './slicer/usersSlicer';
import 
{ 
    signupFormReducer,
    changeEmail, 
    changePassword,
    changeName, 
    changeType,
    changePhone, 
    changeUnit
} from './slicer/signupFormSlicer';



// configureStore : correct mini slicers and merge to huge store // 작은 slices들을 모아서 store로 만든다
const store = configureStore({
    reducer:{ // each slice's reducer
        users:usersReducer,  
        signupForm:signupFormReducer
    }
});

export {
    store, 
    addUser,
    changeEmail, 
    changePassword,
    changeName, 
    changeType,
    changePhone, 
    changeUnit
} 