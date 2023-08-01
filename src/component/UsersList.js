import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../store";
import Table from "./Table";
import SearchBar from './SearchBar';
import { changeSearchTerm } from '../store/slices/usersSlice'
import SortableTable from "./SortableTable";
import Button from "./Button"
import { updateApproved } from "../store";
import Checkbox from "./Checkbox";
import Panel from "./Panel";
import classNames from "classnames";

function UsersList() {
    const [search, setSearch] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);

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
        console.log(error);
        return <div>Error fetching data..</div>
    }

    const handleToggleApproved = (user) => {
        dispatch(updateApproved(user));
    }
    const getApprovedButton = (user) => {
        if(user.approved){
            return <Button onClick={() => handleToggleApproved(user)} primary className="rounded">approved</Button>
        } else {
            return <Button onClick={() => handleToggleApproved(user)} className="rounded">disabled</Button>
        }
    }
    

    const handleCheckboxChange = (id, checked) => {
        if (checked) {
            setSelectedUsers([...selectedUsers, id]);
        } else {
            setSelectedUsers(selectedUsers.filter((userId) => userId !== id));
        }        
    };
    const handleDeleteClick = async () => {
        // const newUsers  
        for(let i = 0; i < selectedUsers.length; i++){            
            await dispatch(deleteUser(selectedUsers[i]));
        }
        
        // await for redraw table
        await setSelectedUsers([]);
        await dispatch(fetchUsers());
    };
    
    
    const config = [
        {
            label: <Button className="rounded" onClick={handleDeleteClick}warning>delete</Button>,
            render: (user) => <Checkbox id={user.id} checked={selectedUsers.includes(user.id)} classNames="flex items-center" onChange={handleCheckboxChange} />
        },
        { label: 'Email', render: (user) => user.email, sortValue: (user) => user.email },
        { label: 'Name', render: (user) => user.name , sortValue: (user) => user.name},
        { label: 'Phone', render: (user) => user.phone, sortValue: (user) => user.phone },
        { label: 'Unit No', render: (user) => user.unit, sortValue: (user) => user.unit },
        { label: 'Type', render: (user) => user.type, sortValue: (user) => user.type },
        {
            label: 'Approved',
            render: (user) => getApprovedButton(user),
            sortValue: (user) => user.approved
        }
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
        (user.email?.toLowerCase().includes(search.toLowerCase())) ||
        (user.name?.toLowerCase().includes(search.toLowerCase())) ||
        (user.phone?.toLowerCase().includes(search.toLowerCase())) ||
        (user.unit?.toLowerCase().includes(search.toLowerCase())) ||
        (user.type?.toLowerCase().includes(search.toLowerCase())) ||
        String(user.approved).toLowerCase().includes(search.toLowerCase())
    );

    return <div>
        <Panel className="mb-5">User List Page</Panel>
        <div className="flex items-center mb-3">
            <SearchBar placeholder="Search.." onSearch={handleSearch}></SearchBar>            
        </div>

        {filteredData.length > 0 ? (
            <SortableTable data={filteredData} config={config} keyFn={keyFn}></SortableTable>
        ) : (
            <p>No Data</p>
        )}
        {/* <Table data={filteredData} config={config} keyFn={keyFn}></Table> */}
    </div>
}

export default UsersList;




