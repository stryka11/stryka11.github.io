import React from 'react';
import { connect } from 'react-redux'
import { updatePin } from '../../Start/StartActions'
import SignUp   from './SignUp'

class SignUpModule extends React.Component {

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
            <SignUp handleChange={alert()}  />
            )

    }
}

const mapStateToProps = state => {
  return {
    isSolved: state.solved
  }
}

export default connect(
  mapStateToProps,
  null,
)(SignUp)