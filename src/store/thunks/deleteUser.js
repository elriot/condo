import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getServerPath } from "../../lib/paths";

// data should be an array of ids
const deleteUser = createAsyncThunk('users/delete', async (id) => {      
    const response = await axios.delete(getServerPath(`users/${id}`));
    return response.data;
});

export {deleteUser}
