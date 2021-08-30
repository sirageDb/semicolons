import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ProjectsBO from "./routes/backoffice/projects/Projects";
import AdminAuth from "./routes/backoffice/adminAuth/AdminAuth";
import PostsBO from "./routes/backoffice/posts/Posts";
import HomePage from "./routes/homepage/HomePage";
import Page404 from "./routes/Page404";
import ContactsBO from "./routes/backoffice/contacts/Contacts";
import NewPostBO from "./routes/backoffice/newPost/NewPost";
import newProjectBO from "./routes/backoffice/newProject/NewProject";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/auth"} component={AdminAuth} />
      <Route exact path={"/backoffice/projects"} component={ProjectsBO} />
      <Route exact path={"/backoffice/newproject"} component={newProjectBO} />
      {/* <Route exact path={"/backoffice/projects"} component={ProjectEditor} /> */}
      <Route exact path={"/backoffice/posts"} component={PostsBO} />
      <Route exact path={"/backoffice/newpost"} component={NewPostBO} />
      <Route exact path={"/backoffice/contacts"} component={ContactsBO} />
      {/* <Route component={Page404} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
