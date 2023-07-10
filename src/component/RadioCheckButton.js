function RadioCheckButton({ onClick, name, values, className }) {
  const handlButtonClick = (event) =>{
    onClick(event.target.value);
  }
  const renderRadioButton = values.map((arg, idx) => {    
    return (
      <div onChange={handlButtonClick} key={arg} className="mr-3">
        <input id={arg+"button"} type="radio" name={name} value={arg}/>
        <label className="cursor-pointer" htmlFor={arg+"button"}> {arg} </label>
      </div>
    );
  });

  return (
    <div className="flex flex-column items-center justify-between">
      {renderRadioButton}
    </div>
  );
}

export default RadioCheckButton;