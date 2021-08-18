import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Projects from "./routes/backoffice/projects/Projects";
import AdminAuth from "./routes/adminAuth/AdminAuth";
import Posts from "./routes/backoffice/posts/Posts";
import HomePage from "./routes/homepage/HomePage";
import Page404 from "./routes/Page404";
import Contacts from "./routes/backoffice/contacts/Contacts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/auth"} component={AdminAuth} />
      <Route exact path={"/backoffice/projects"} component={Projects} />
      <Route exact path={"/backoffice/posts"} component={Posts} />
      <Route exact path={"/backoffice/contacts"} component={Contacts}/>
      {/* <Route component={Page404} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
