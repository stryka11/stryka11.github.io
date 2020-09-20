import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';
import InputNumeric from '../Common/Components/InputNumeric/InputNumeric'

class StartModule extends React.Component {

    constructor(props) {
        super(props);

        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(e) {
        const id = e.target.id
        const value = e.target.value
        const payload = "hello"
        console.log("hello")
        this.props.dispatch(updatePin(payload))
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <InputNumeric id="1" handleChange={this.handleUserInput} />
                <InputNumeric id="2" handleChange={this.handleUserInput} />
                <InputNumeric id="3" handleChange={this.handleUserInput} />
                <InputNumeric id="4" handleChange={this.handleUserInput} />

              </header>
            </div>

    )}
}

export default connect(
  null,
  null,
)(StartModule)