import React, { useState } from "react";
import classNames from "classnames";
// import "./SearchBar.css";  // SearchBar 스타일을 위한 css 파일

function SearchBar({ onSearch, placeholder, className }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {        
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const classes = classNames("border", "border-2",
    {
        "placeholder-gray-500": placeholder,
        "placeholder-opacity-75": placeholder
    }

);

    return (
        <form onSubmit={handleSubmit} className={className}>
            <input 
                type="text" 
                placeholder={placeholder} 
                value={searchTerm}
                onChange={handleChange}
                className={classes}
            />
            <button type="submit" className={classNames("bg-slate-300", classes)}>Search</button>
        </form>
    );
}

export default SearchBar;
