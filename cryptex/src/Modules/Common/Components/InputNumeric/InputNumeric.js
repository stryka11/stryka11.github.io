import React from 'react';
import './InputNumeric.css';

const InputNumeric = ({ id, handleChange }) => {

    return (
        <input
            className="input"
            type="number"
            id ={id}
            onChange={handleChange}
        />
    )
}

export default InputNumeric;

