import classNames from "classnames";
import { useState } from "react";

function RadioCheckButton({ onClick, name, values, className }) {
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleButtonClick = (event) =>{
    setSelectedValue(event.target.value);
    onClick(event.target.value);
  }

  const renderRadioButton = values.map((arg, idx) => {    
    return (
      <div key={arg} className="mr-3">
        <input 
          id={arg+"button"} 
          type="radio" 
          name={name} 
          value={arg} 
          checked={arg === selectedValue} 
          onChange={handleButtonClick}/>
        <label className="cursor-pointer" htmlFor={arg+"button"}> {arg} </label>
      </div>
    );
  });
  
  const classes = classNames("flex flex-column items-center", className);
  
  return (
    <div className={classes}>      
      {renderRadioButton}
    </div>
  );
}

export default RadioCheckButton;
