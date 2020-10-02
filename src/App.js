import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import Header from './components/Header/Header';
import Place from './components/Place/Place';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [placeName, setPlaceName] = useState('');
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, placeName, setPlaceName]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/place/:id">
            <Place></Place>
          </Route>
          <PrivateRoute path="/details">
            <Details></Details>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
