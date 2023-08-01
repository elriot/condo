import React from 'react';


const Checkbox = ({ id, checked, onChange, className }) => {    
    return (
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded flex-auto"
          checked={checked}
          onChange={(e) => onChange(id, e.target.checked)}  
        />
      </div>
    );
  };

export default Checkbox;
