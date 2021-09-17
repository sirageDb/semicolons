import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ProjectsBO from "./routes/backoffice/projects/Projects";
import AdminAuth from "./routes/backoffice/adminAuth/AdminAuth";
import PostsBO from "./routes/backoffice/posts/Posts";
import HomePage from "./routes/homepage/HomePage";
import ContactsBO from "./routes/backoffice/contacts/Contacts";
import NewPostBO from "./routes/backoffice/newPost/NewPost";
import newProjectBO from "./routes/backoffice/newProject/NewProject";
import Posts from "./routes/posts/Posts";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import Post from "./routes/post/Post";
import Unfound from "./routes/unfound/Unfound";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/posts"} component={Posts} />
        <Route exact path={"/projects"} component={Projects} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/post/:slug"} component={Post} />
        <Route exact path={"/auth"} component={AdminAuth} />
        <Route exact path={"/backoffice/projects"} component={ProjectsBO} />
        <Route exact path={"/backoffice/newproject"} component={newProjectBO} />
        <Route exact path={"/backoffice/posts"} component={PostsBO} />
        <Route exact path={"/backoffice/newpost"} component={NewPostBO} />
        <Route exact path={"/backoffice/contacts"} component={ContactsBO} />
        <Route component={Unfound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
