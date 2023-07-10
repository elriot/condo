import { createSlice, nanoid } from '@reduxjs/toolkit';

const usersSlicer = createSlice({
    name: 'users',
    initialState: {        
        data: []
    },
    reducers: {
        addUser(state, action) {
            console.log(state, action, "Hhh");
            state.data.push({
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                phone: action.payload.phone,
                type: action.payload.type,
                unit: action.payload.unit,
                id: nanoid()
            })
        }
    }
});
export const { addUser } = usersSlicer.actions;
export const usersReducer = usersSlicer.reducer;