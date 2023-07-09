import Input from "./Input";
import { useState } from "react";

function PasswordInput({ onChange, ...rest }) {
    const [password, setPassword] = useState("");
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);        
        onChange(password);
    }
    return (
        <Input
            type="password"            
            onChange={handlePasswordChange}
            value ={password}
            {...rest}
        />
    );
};
export default PasswordInput;