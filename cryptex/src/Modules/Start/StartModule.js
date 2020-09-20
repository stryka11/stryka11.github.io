import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';
import InputNumeric from '../Common/Components/InputNumeric/InputNumeric'
import animate__animated from 'animate.css'


class StartModule extends React.Component {

    constructor(props) {
        super(props);

        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(e) {
        const id = e.target.id
        const value = e.target.value
        this.props.dispatch(updatePin(id, value))
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

    <div class="animate__animated animate__fadeInLeft">
        hello world
    </div>

                <InputNumeric id="0" handleChange={this.handleUserInput} />
                <InputNumeric id="1" handleChange={this.handleUserInput} />
                <InputNumeric id="2" handleChange={this.handleUserInput} />
                <InputNumeric id="3" handleChange={this.handleUserInput} />

                <button type="button" style={{display: this.props.isSolved ? 'block' : 'none' }}
                    >Click Me!
                </button>

              </header>
            </div>

    )}
}

const mapStateToProps = state => {
  return {
    isSolved: state.solved
  }
}

export default connect(
  mapStateToProps,
  null,
)(StartModule)