import Input from "./Input";

function EmailInput({ value, onEmailChange, ...rest }) {    
    const handleEmailChange = (event) => {
        onEmailChange(event.target.value);
    }
    return (
        <Input
            type="email"
            value={value}
            onChange={handleEmailChange}
            placeholder="ex) sample123@gmail.com"
            {...rest}
        />
    );
};
export default EmailInput;