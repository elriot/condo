function Label({ text, htmlFor, className }) {
  return <label htmlFor={htmlFor} className={className}>
    {text}

  </label>;
};

export default Label;