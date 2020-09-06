import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/Post Detail/PostDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>     
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>

        <Route path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
