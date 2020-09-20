import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';
import InputNumeric from '../Common/Components/InputNumeric/InputNumeric'

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

                <InputNumeric id="1" handleChange={updatePin} />
                <InputNumeric id="2" handleChange={updatePin} />
                <InputNumeric id="3" handleChange={updatePin} />
                <InputNumeric id="4" handleChange={updatePin} />

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