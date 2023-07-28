import Label from '../component/Label';
import Panel from '../component/Panel';
import EmailInput from '../component/EmailInput';
import PasswordInput from '../component/PasswordInput';
import Input from '../component/Input';
import RadioCheckButton from '../component/RadioCheckButton';
import Button from '../component/Button';
import { useState } from 'react';
import {validateEmail, validatePassword} from '../hooks/use-validation';
import { addUser } from '../store';
import { useDispatch } from 'react-redux';
// import useUsersContext from '../hooks/use-users-context';

function SignupPage(){
    // const { createUser } = useUsersContext();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailLabel, passwordLabel);

        if(emailLabel !== null || passwordLabel !== null)
            return;
        
        const approved = false;
        const user = {email, password, name, phone,unit,type, approved};
        dispatch(addUser(user));        
    }
    const outterStyles = "mt-3 mb-3";

    //email
    const [email, setEmail] = useState("");
    const [emailLabel, setEmailLabel] = useState(null);
    const handleEmailChange = (value) => {      
        setEmail(value);
        if(validateEmail(value)){
            setEmailLabel(null);
        } else {
            setEmailLabel("invalid Email!!")
        }
    }

    //password
    const [password, setPassword] = useState("");
    const [passwordLabel, setPasswordLabel] = useState(null);
    const handlePasswordChange = (value) => {      
        setPassword(value);
        if(validatePassword(value)){
            setPasswordLabel(null);
        } else {
            setPasswordLabel("invalid password!!")
        }
    }

    // name
    const [name, setName] = useState("");
    const handleNameChange = (value) => {      
        setName(value);
    }

    // phone
    const [phone, setPhone] = useState("");
    const handlePhoneChange = (value) => {
        setPhone(value);
    }

    // unitNo
    const [unit, setUnit] = useState("");
    const handleUnitChange = (value) => {
        setUnit(value);
    }

    // residence type
    const [type, setType] = useState("tenant");
    const handleTypeChange = (value) => {
        setType(value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Panel>Sign up page</Panel>
                <div className={outterStyles}>
                    <Label text="Email : " className="mr-3" htmlFor="email" autocomplete="email"/>
                    <EmailInput id="email" onChange={handleEmailChange} value={email}/>
                    {
                        emailLabel && <Label warning text={emailLabel} htmlFor="password"/>
                    }
                </div>
                <div className={outterStyles}>
                    <Label text="Password : " className="mr-3" htmlFor="password"/>
                    <PasswordInput id="password" onChange={handlePasswordChange} value={password}/>
                    {
                        passwordLabel && <Label warning text={passwordLabel} htmlFor="password"/>
                    }
                </div>
                <div className={outterStyles}>
                    <Label text="name : " className="mr-3" htmlFor="name" autocomplete="name"/>
                    <Input id="name" onChange={handleNameChange} value={name}/>
                </div>
                <div className={outterStyles}>
                    <Label text="phone : " className="mr-3" htmlFor="phone" autocomplete="email"/>
                    <Input id="phone" onChange={handlePhoneChange} value={phone} placeholder="ex) 7781234567"/>
                </div>
                <div className={outterStyles}>
                    <Label text="unit no : " className="mr-3" htmlFor="unit"/>
                    <Input id="unit" onChange={handleUnitChange} value={unit}/>
                </div>
                <div className={outterStyles}>
                    <Label text="Residence type : " className="mr-3" htmlFor="name" autocomplete="address-line1"/>
                    <RadioCheckButton onClick={handleTypeChange} name="type" values={["tenant", "owner"]} classNames="" value={type}></RadioCheckButton>
                </div> 
                <Button primary className="rounded center mt-6">Submit</Button>
            </form>
        </div>
    );
}
export default SignupPage;
