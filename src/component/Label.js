import classNames from "classnames";

function Label({ text, htmlFor, className, warning }) {
  const finalClassese = classNames(
    className,
    {
      'text-red-500': warning
    }
  )
  // console.log(finalClassese);
  return <label htmlFor={htmlFor} className={finalClassese}>
    {text}
  </label>;
};

export default Label;