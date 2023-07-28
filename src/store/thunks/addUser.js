import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { getServerPath } from "../../lib/paths";


const addUser = createAsyncThunk('users/add', async (data) => {    
    const response = await axios.post(getServerPath('users'), data);
    return response.data;
});

export {addUser}