import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Projects from './routes/projects/Projects';
import {default as AdminProjects} from './routes/backoffice/projects/Projects';
import {default as AdminPosts} from './routes/backoffice/posts/posts';
import AdminAuth from "./routes/backoffice/adminAuth/AdminAuth";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path={"/"} component={App}/>
      <Route exact path={"/projects"} component={Projects}/>
      <Route exact path={"/posts"} component={Projects}/>
      <Route exact path={"/backoffice/authentification"} component={AdminAuth}/>
      <Route exact path={"/backoffice/projects"} component={AdminProjects}/>
      <Route exact path={"/backoffice/posts"} component={AdminPosts}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
