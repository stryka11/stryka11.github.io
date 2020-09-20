import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'

class StartModule extends React.Component {

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    }

    handleUpdatePin = () => {
        this.props.updatePin(this.state.input)
    }

    render() {
        return (
            <div>
                <input
                   onChange={e => this.updateInput(e.target.value)}
                   value={this.state.input}
                />

                <button className="pin" onClick={this.handleUpdatePin}>
                 Submit
                </button>
            </div>
    )}

}

export default connect(
  null,
  { updatePin }
)(StartModule)