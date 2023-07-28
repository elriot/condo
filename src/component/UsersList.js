import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Table from "./Table";

function UsersList() {
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
    return <div>
        <Table data={data} config={config} keyFn={keyFn}></Table>
        {/* {console.log(data, "heelo")}
        {data.length} */}
    </div>
}

export default UsersList;



