import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Table from "./Table";
import SearchBar from './SearchBar';
import { changeSearchTerm } from '../store/slices/usersSlice'

function UsersList() {
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error fetching data..</div>
    }

    const config = [
        { label: 'Email', render: (user) => user.email, sortValue: (user) => user.email },
        { label: 'Name', render: (user) => user.name },
        { label: 'Phone', render: (user) => user.phone, sortValue: (user) => user.phone },
        { label: 'Unit No', render: (user) => user.unit, sortValue: (user) => user.unit },
        { label: 'Type', render: (user) => user.type, sortValue: (user) => user.type },
    ]
    const keyFn = (user) => {
        return user.email;
    }


    const handleSearch = (userInput) => {
        dispatch(changeSearchTerm(userInput));
        setSearch(userInput);
    }

    // Filter data based on search
    const filteredData = data.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.toLowerCase().includes(search.toLowerCase()) ||
        user.unit.toLowerCase().includes(search.toLowerCase()) ||
        user.type.toLowerCase().includes(search.toLowerCase())
    );
    
    return <div>
        <div><SearchBar placeholder="Search.." className="flex justify-center mb-3" onSearch={handleSearch}></SearchBar></div>
        <Table data={filteredData} config={config} keyFn={keyFn}></Table>
    </div>
}

export default UsersList;



