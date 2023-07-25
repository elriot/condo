import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async (data) => {
  const response = await axios.post('http://localhost:3005/users', {
    // console.log(data);
  });

  return response.data;
});

export { addUser };
