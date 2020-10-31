import React, { useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { Counter } from './pages/counter/Counter';
import LandingPage from './pages/LandingPage';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { loadUser } from './redux/actions/authActions';
import ProfilePage from './pages/ProfilePage';
import { Create } from '@material-ui/icons';
import CreateWin from './pages/CreateWin';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const theme = createMuiTheme({});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/create-post" component={CreateWin} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
