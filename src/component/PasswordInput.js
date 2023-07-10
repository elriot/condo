import Input from "./Input";

function PasswordInput({ onPwChange, value, ...rest }) {
    const handlePasswordChange = (event) => {         
        onPwChange(event.target.value);
    }
    return (
        <Input
            type="password"            
            onChange={handlePasswordChange}
            value ={value}
            {...rest}
        />
    );
};
export default PasswordInput;