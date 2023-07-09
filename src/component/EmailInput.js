import Input from "./Input";
import { useState } from "react";

function EmailInput({ onChange, ...rest }) {
    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        onChange(email);
    }
    return (
        <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="ex) sample123@gmail.com"
            {...rest}
        />
    );
};
export default EmailInput;