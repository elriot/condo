import Button from "../component/Button";
import Panel from "../component/Panel";
import Input from "../component/Input";
import Label from "../component/Label"
import EmailInput from "../component/EmailInput"
import PasswordInput from "../component/PasswordInput";
import {validateEmail, numbersOnly, validatePassword} from "../hooks/use-validation";
import { useState } from "react";
import RadioCheckButton from "../component/RadioCheckButton";
import { useDispatch, useSelector} from 'react-redux';
import { changeEmail, changeName, changePassword, changeUnit, changeType, changePhone } from "../store/slicer/signupFormSlicer";
import { useAddUserMutation } from "../store";


function SingupPage() {
    const dispatch = useDispatch();
    const [pwText, setPwText]= useState("");
    
    const { email, name, password, phone, unit, type } = useSelector((state) => {        
        const result = {
            email:state.signupForm.email,
            name:state.signupForm.name,
            password:state.signupForm.password,
            phone:state.signupForm.phone,   
            unit:state.signupForm.unit,
            type:state.signupForm.type
        };
        return result;
    });

    const handleEmailChange = (value) => {
        dispatch(changeEmail(value));  
    }    

    const handlePasswordChange = (value) => {
        if(validatePassword(value)){
            setPwText("");
        } else {
            setPwText("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        }
        dispatch(changePassword(value));
    }

    const handleNameChange = (value) => {        
        dispatch(changeName(value));        
    }

    const handlePhoneChange = (value) => {    
        dispatch(changePhone(value));        
    }
    const handleUnitChange = (value) => {    
        dispatch(changeUnit(value));        
    }
    const handleTypeChange = (value) => {
        dispatch(changeType(value));
    }
    const [addUser, { isLoading, isError, error }] = useAddUserMutation();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!validateEmail(email)){
            alert("invalid email"); return;
        } else if(!validatePassword(password)){
            alert("invalid password"); return;
        } else if(!phone){
            alert("input phone number"); return;
        } else if(!unit){
            alert("input unit number"); return;
        } else if(!type){
            alert("check residence type"); return;
        }
        const user = {email, password, name, phone, unit, type};
        await addUser(user);
    }

    const outterStyles = "flex flex-row items-center m-3";
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Panel>Sign up page</Panel>
                <div className={outterStyles}>
                    <Label text="Email : " className="mr-3" htmlFor="email" autocomplete="email"/>
                    <EmailInput id="email" onChange={handleEmailChange} value={email}/>
                </div>
                <div className={outterStyles}>
                    <Label text="Password : " className="mr-3" htmlFor="password"/>
                    <PasswordInput id="password" onChange={handlePasswordChange} value={password}/>
                    {
                        pwText && <Label warning text={pwText} htmlFor="password"/>
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
                    <RadioCheckButton onClick={handleTypeChange} name="type" values={["tenant", "owner"]} classNames=""></RadioCheckButton>
                </div>
                <Button primary className="rounded center">Submit</Button>
            </form>
        </div>
    )
}
export default SingupPage;