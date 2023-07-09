import classNames from 'classnames';


function Input({ children, placeholder, className, ...rest }) {
    // console.log(rest, placeholder);
    const classes = classNames("border", className,
        {
            "placeholder-gray-500": placeholder,
            "placeholder-opacity-75": placeholder
        }

    );
    // console.log(classes)
    //placeholder-gray-500 placeholder-opacity-75
    return (<div>
        <input className={classes} placeholder={placeholder} {...rest} ></input>
    </div>)
}
export default Input;