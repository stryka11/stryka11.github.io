import React from "react";
import { connect } from 'react-redux'
import { showNextClue, updatePin } from './StartActions'
import logo from './images/logo.svg';
import './css/Start.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimplePopover from './SimplePopover'
import { NEXT_CLUE } from './StartActionTypes'


class StartModule extends React.Component {

    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this)
        this.showNextClue = this.showNextClue.bind(this)
    }

    handleUserInput(e) {
        const id = e.target.id
        const value = e.target.value
        this.props.dispatch(updatePin(id, value))
    }

    showNextClue() {
        this.props.dispatch(showNextClue())
    }

    classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
    }));

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <div className={this.classes.paper} >

                    <Typography component="p"
                    className={this.props.isSolved ? '' : 'fadeIn'}
                    style={{display: this.props.isSolved ? 'none' : 'block'}}variant="h5">
                      <p>    My wonderful bae </p>
                      <p>    I really do appreciate you </p>
                      <p>    Here's to more years ahead </p>
                      <p>    Forever and always </p>
                    </Typography>

                    <div className={this.props.isSolved ? 'fadeIn' : ''}
                         style={{display: this.props.isSolved ? 'block' : 'none'}}>
                        <h1 >{this.props.secret}</h1>
                    </div>
                    <br />
                    <form className={this.classes.form} noValidate>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="0"
                            label="C"
                            autoFocus
                            type="number"
                            maxLength="1"
                            onChange={this.handleUserInput}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="1"
                            label="O"
                            type="number"
                            onChange={this.handleUserInput}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="2"
                            label="D"
                            type="number"
                            maxLength="1"
                            onChange={this.handleUserInput}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="3"
                            label="E"
                            maxLength="1"
                            onChange={this.handleUserInput}
                          />
                        </Grid>
                      </Grid>
                      <br />
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{display: this.props.isSolved ? 'block' : 'none' }}
                        className={this.classes.submit}
                        onClick={this.showNextClue}
                      >
                        See the next clue
                      </Button>
                    <div style={{display: this.props.isSolved ? 'none' : 'block' }}>
                    <SimplePopover> </SimplePopover>
                    </div>
                    </form>

                    <br />
                    <div style={{display: this.props.showNextClue ? 'block' : 'none' }}>
                       <Grid item xs={12} sm={12}>
                          <TextField
                              label="Next clue"
                              multiline
                              rowsMax={10}
                              value={this.props.nextClue}
                              variant="filled"
                    />
                </Grid>
                </div>
                </div>
                </Container>
                </header>
                </div>
                        )}
                }

const mapStateToProps = state => {
  return {
    isSolved: state.solved,
    secret: state.secret,
    nextClue : state.nextClue,
    showNextClue : state.showNextClue
  }
}

export default connect(
  mapStateToProps,
  null,
)(StartModule)