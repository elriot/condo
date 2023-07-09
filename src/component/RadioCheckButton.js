import { AiOutlineCheck } from "react-icons/ai";
function RadioCheckButton({ name, values, className }) {
  console.log(values, name);
  const renderRadioButton = values.map((arg, idx) => {
    return (
      <div key={arg} className="mr-3">
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