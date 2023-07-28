import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getServerPath } from "../../lib/paths";

const fetchUsers = createAsyncThunk('users/fetch', async()=>{
    const url = getServerPath('users');
    const response = await axios.get(url);
    // console.log("fetch user url : ", url, response.data);
    //response.data === [{id:,.. name:''}

    return response.data;
});

export {fetchUsers};
