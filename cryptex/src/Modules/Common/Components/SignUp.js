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

const SignUp = ({ handleChange }) => {
  const classes = useStyles();

var eventHandler = function () {
    alert("Test");
}


  return (



    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="p" variant="h5">
          Sign up
                          <p>
                              If you want in,
                              You’ll need the pin.
                              The door is sealed,
                              But speak the following and maybe all will be revealed
                          </p>
                          <img src={"froggie_sweat.svg"}/>

        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                name="firstPin"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="C"
                autoFocus
                type="number"
                maxLength="2"
                onBlur={eventHandler}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="firstPin"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="O"
                autoFocus
                type="number"
                maxLength="2"
                onBlur={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                name="firstPin"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="D"
                autoFocus
                type="number"
                maxLength="2"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="E"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


export default SignUp;

