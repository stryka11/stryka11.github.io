import React from "react";
import { connect } from 'react-redux'
import { updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';
import InputNumeric from '../Common/Components/InputNumeric/InputNumeric'
import { WindupChildren, Pause, Pace } from "windups";


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

                <CrypticClue />

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

const CrypticClue = () => {
  return (
    <WindupChildren>
        <div>
             <Pace getPace={(char) => (char === " " ? 200 : 40)}>
            {"My wonderful,"}
                <span style={{ color: "pink" }}>{" gówno "}</span>
            {"bae"}
            <Pause ms={650}/>
            </Pace>
        </div>

        <div>
            <Pace getPace={(char) => (char === " " ? 200 : 40)}>
            { "I think you're great" }
            <Pause ms={1000}/>
            </Pace>
        </div>
        <div>
             <Pace getPace={(char) => (char === " " ? 200 : 40)}>
            {"Here’s to more years ahead"}
            <Pause ms={800}/>
            </Pace>
        </div>
        <div>
            <Pace getPace={(char) => (char === " " ? 200 : 40)}>
            {"Forever and always"}
            <Pause ms={1000}/>
            </Pace>
        </div>
    </WindupChildren>
  );
};

const mapStateToProps = state => {
  return {
    isSolved: state.solved
  }
}

export default connect(
  mapStateToProps,
  null,
)(StartModule)