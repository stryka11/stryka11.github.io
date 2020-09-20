import React from 'react';
import './InputNumeric.css';

class InputNumeric extends React.Component {
    render() {
        return (
            <input
                type="number"
                id={this.props.index}
                onChange={this.props.handleChange}
            />

        )
    }
}

export default InputNumeric;

