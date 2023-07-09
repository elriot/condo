import Button from "../component/Button";
import Panel from "../component/Panel";
import Input from "../component/Input";
import Label from "../component/Label"
import EmailInput from "../component/EmailInput"
import PasswordInput from "../component/PasswordInput";
import {validateEmail, validatePassword} from "../hooks/use-validation";
import { useState } from "react";
import RadioCheckButton from "../component/RadioCheckButton";
import classNames from "classnames";


function SingupPage() {
    const handleEmailChange = (value) => {
        console.log("changeEmail", value, validateEmail(value));
        // setEmail(event.target.value);
    }    
    const [pwText, setPwText]= useState("");
    const [pwStyle, setPwStyle]= useState("");
    const handlePasswordChange = (value) => {
        if(validatePassword(value)){
            setPwText("");
            setPwStyle("");
        } else {
            setPwText("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
            setPwStyle("text-red-800");
        }
    }
    const handleNameChange = (value) => {
        console.log("name", value);
        // setEmail(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit!!", event.target.value);
    }
    const outterStyles = "flex flex-row items-center m-3";
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Panel>Sign up page</Panel>
                <div className={outterStyles}>
                    <Label text="Email : " className="mr-3" htmlFor="email" autocomplete="email"/>
                    <EmailInput id="email" onChange={handleEmailChange} />
                </div>
                <div className={outterStyles}>
                    <Label text="Password : " className="mr-3" htmlFor="password"/>
                    <PasswordInput id="password" onChange={handlePasswordChange}/>
                    {
                        pwText && <Label text={pwText} className={pwStyle} htmlFor="password"/>
                    }
                    
                </div>
                <div className={outterStyles}>
                    <Label text="name : " className="mr-3" htmlFor="name" autocomplete="name"/>
                    <Input id="name" onChange={handleNameChange}/>
                </div>
                <div className={outterStyles}>
                    <Label text="type : " className="mr-3" htmlFor="type"/>
                    <Input id="type" onChange={handleNameChange}/>
                </div>
                <div className={outterStyles}>
                    <Label text="phone : " className="mr-3" htmlFor="phone" autocomplete="email"/>
                    <Input id="phone" onChange={handleNameChange}/>
                </div>
                <div className={outterStyles}>
                    <Label text="unit no : " className="mr-3" htmlFor="name" autocomplete="address-line1"/>
                    <Input id="name" onChange={handleNameChange}/>
                </div>
                <div className={outterStyles}>
                    <Label text="Residence type : " className="mr-3" htmlFor="name" autocomplete="address-line1"/>
                    <RadioCheckButton name="type" values={["tenant", "owner"]} classNames=""></RadioCheckButton>
                </div>
                <Button primary className="rounded center">Submit</Button>
            </form>
        </div>
    )
}
export default SingupPage;