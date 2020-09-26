import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'


const useStyles = makeStyles((theme) => ({
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Puzzle = ({dostuff}) => {



   const classes = useStyles();

 const handleUserInput = (e) => {
//      const id = e.target.id
//      const value = e.target.value
//      this.props.dispatch(updatePin(id, value))
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={this.classes.paper}>
        <Avatar className={this.classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="p" variant="h5">

          <p>    My wonderful bae </p>
          <p>    I think you are great </p>
          <p>    Here is to more years ahead </p>
          <p>    Forever and always </p>


        </Typography>
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
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="1"
                label="O"
                autoFocus
                type="number"
                maxLength="1"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="2"
                label="D"
                autoFocus
                type="number"
                maxLength="1"
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
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={this.classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );

}


const mapStateToProps = state => {
  return {
    isSolved: state.solved
  }
}

export default connect(
  mapStateToProps,
  null,
)(Puzzle)

