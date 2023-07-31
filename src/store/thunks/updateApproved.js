import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getServerPath } from "../../lib/paths";

const updateApproved = createAsyncThunk('users/updateApproved', async (user) => {
    const updatedUser = {...user, approved: !user.approved}
    const response = await axios.put(getServerPath(`users/${user.id}`), updatedUser);
    return response.data;
});

// const updateApproved = createAsyncThunk('users/updateApproved', async (user) => {
//     const response = await axios.put(getServerPath(`users/${user.id}`), {approved: !user.approved});
//     return response.data;
// });

export {updateApproved};
