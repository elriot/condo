import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const UsersContext = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState([]);

//   const fetchBooks = useCallback(async () => {
//     const response = await axios.get('http://localhost:3001/books');

//     setUsers(response.data);
//   }, []);

  const createUser = async (data) => {
    const response = await axios.post('http://localhost:3001/books', {
      data,
    });

    const updateUsers = [...users, response.data];
    setUsers(updateUsers);
  };

  const valueToShare = {
    users,
    createUser,
    // stableFetchBooks
  };

  return (
    <UsersContext.Provider value={valueToShare}>
      {children}
    </UsersContext.Provider>
  );
}

export { Provider };
export default UsersContext;
