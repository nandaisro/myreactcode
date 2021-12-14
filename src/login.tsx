import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter, Router , Route, Navigate , Link , useNavigate  } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Dashboard from './Dashboard';
import history from "./history";
import { Switch } from '@material-ui/core';
import { render } from '@testing-library/react';
import { lightGreen } from '@material-ui/core/colors';
import './App.css';
import logo from './logo.svg';
//<Route path="/" component={Dashboard} />

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);

//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  isLoggedIn :boolean
  helperText: string
  isError: boolean
  terminal_name: string
  Logout:boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  isLoggedIn:false,
  helperText: '',
  isError: false ,
  terminal_name:'',
  Logout:false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean }
  | { type: 'setTerminalName', payload: string }
  | { type: 'Logout', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false,
        isLoggedIn :true
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'Logout': 
      return {
        ...state,
        Logout: action.payload ,
        isLoggedIn :false

      };
    case 'setTerminalName': 
      return {
        ...state,
        terminal_name: action.payload
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}


const Login = () => {

  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim() && state.terminal_name.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'mcs' && state.password === 'mcs123') {
      if(state.terminal_name === 'BL1'){
        dispatch({
          type: 'loginSuccess',
          payload: 'Logged in successfully'
        });
      }
      else{
        dispatch({
          type: 'loginFailed',
          payload: 'Invalid Terminal name'
        });  
      } 
    //  dispatch(fnLoginAction(state.username , state.password ,props.))
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };
  const HandleLogout = () =>{
    dispatch({
      type: 'loginSuccess',
      payload: ''
    });
    dispatch({
      type: 'Logout',
      payload: true
    });

   // state.isLoggedIn = false
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  }

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };
  const handleTerminalChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setTerminalName',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    };
    const style = {
      'textAlign': 'center',
      'color': 'green'
      }
      const datestyle={
          'textAlign' :'right' ,
          'color' : '#161F6D'
      }
  return ( 

    !state.isLoggedIn  ?
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="User login" />
        <CardContent>   
          <div>
          <TextField
              error={state.isError}
              fullWidth
              id="terminal_name"
              type="textbox"
              label="Terminal Name"
              placeholder="Terminal"
              margin="normal"
              onChange={handleTerminalChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onChange={handleUsernameChange}
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onChange={handlePasswordChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
    :
    <div >
    {localStorage.removeItem("token")}
    <Dashboard />
  </div>
  );
}
export default Login