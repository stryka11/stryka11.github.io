import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';

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
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <input
                   onChange={e => this.updateInput(e.target.value)}
                   value={this.state.input}
                />

                <br></br>

                <button className="pin" onClick={this.handleUpdatePin}>
                 Submit
                </button>

              </header>
            </div>

    )}
}

export default connect(
  null,
  { updatePin }
)(StartModule)