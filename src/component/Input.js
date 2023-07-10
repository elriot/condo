import classNames from 'classnames';


function Input({ onChange, children, placeholder, className, value, ...rest }) {
    // console.log(rest, placeholder);
    const classes = classNames("border", className,
        {
            "placeholder-gray-500": placeholder,
            "placeholder-opacity-75": placeholder
        }

    );
    const handleChange = (event) => {
        onChange(event.target.value);
    }
    // console.log(classes)
    //placeholder-gray-500 placeholder-opacity-75
    return (<div>
        <input onChange={handleChange} className={classes} placeholder={placeholder} value={value} {...rest} ></input>
    </div>)
}
export default Input;