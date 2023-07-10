import { createSlice } from '@reduxjs/toolkit';

const signupFormSlice = createSlice({
    name: 'singupform',
    initialState: {
        email: '', password: '', name: '', type: '', phone: '', unit: ''
    },
    reducers: {
        changeEmail(state, action) { state.email = action.payload; },
        changePassword(state, action) { state.password = action.payload; },
        changeName(state, action) { state.name = action.payload; },
        changeType(state, action) { state.type = action.payload; },
        changePhone(state, action) { state.phone = action.payload; },
        changeUnit(state, action) { state.unit = action.payload; },
    },
    // when addUser called, reset form value
    // extraReducers(builder){
    //     builder.addUser(addUser, (state,action)=>{
    //         state.email = '';
    //         state.cost = 0;
    //     });
    // }
});

export const 
{
    changeEmail, 
    changePassword,
    changeName, 
    changeType,
    changePhone, 
    changeUnit
} = signupFormSlice.actions;
export const signupFormReducer = signupFormSlice.reducer;