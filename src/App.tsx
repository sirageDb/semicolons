import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectsBO from "./routes/backoffice/projects/Projects";
import AdminAuth from "./routes/backoffice/adminAuth/AdminAuth";
import PostsBO from "./routes/backoffice/posts/Posts";
import HomePage from "./routes/homepage/HomePage";
import ContactsBO from "./routes/backoffice/contacts/Contacts";
import NewPostBO from "./routes/backoffice/newPost/NewPost";
import ProjectEditor from "./routes/backoffice/projectEditor/ProjectEditor";
import Posts from "./routes/posts/Posts";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import Post from "./routes/post/Post";
import ScrollToTop from "./lib/ScrollToTop";
import PageNotFound from "./routes/unfound/PageNotFound";


export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/posts"} component={Posts} />
        <Route exact path={"/projects"} component={Projects} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/post/:slug"} component={Post} />
        <Route exact path={"/auth"} component={AdminAuth} />
        <Route exact path={"/backoffice/projects"} component={ProjectsBO} />
        <Route exact path={"/backoffice/ProjectEditor/"} component={ProjectEditor} />
        <Route exact path={"/backoffice/ProjectEditor/:project_id"} component={ProjectEditor} />
        <Route exact path={"/backoffice/posts"} component={PostsBO} />
        <Route exact path={"/backoffice/newpost"} component={NewPostBO} />
        <Route exact path={"/backoffice/contacts"} component={ContactsBO} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
