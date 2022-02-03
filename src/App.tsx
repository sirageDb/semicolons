import React, { useContext, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectsBO from "./routes/backoffice/projects/Projects";
import AdminAuth from "./routes/backoffice/adminAuth/AdminAuth";
import PostsBO from "./routes/backoffice/posts/Posts";
import HomePage from "./routes/homepage/HomePage";
import ContactsBO from "./routes/backoffice/contacts/Contacts";
import ProjectEditor from "./routes/backoffice/projectEditor/ProjectEditor";
import Posts from "./routes/posts/Posts";
import Projects from "./routes/projects/Projects";
import Contact from "./routes/contact/Contact";
import About from "./routes/about/About";
import Post from "./routes/post/Post";
import ScrollToTop from "./lib/ScrollToTop";
import PageNotFound from "./routes/unfound/PageNotFound";
import PostEditor from "./routes/backoffice/postEditor/PostEditor";
import CustomRoute from "./components/CustomRoute/CustomRoute";
import { AuthContext } from "./lib/AuthContext";
import { AUTH_PAGE } from "./lib/appRouting";

export default function App(): JSX.Element {
  const {isAuth} = useContext(AuthContext);
  const isAuthStatus = isAuth();
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/posts"} component={Posts} />
          <Route exact path={"/posts/:slug"} component={Post} />
          <Route exact path={"/projects"} component={Projects} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={AUTH_PAGE} component={AdminAuth} />
          <CustomRoute exact path={"/backoffice/projects"} component={ProjectsBO} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/ProjectEditor/"} component={ProjectEditor} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/ProjectEditor/:project_id"} component={ProjectEditor} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/posts"} component={PostsBO} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/posteditor"} component={PostEditor} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/posteditor/:post_id"} component={PostEditor} auth={isAuthStatus} />
          <CustomRoute exact path={"/backoffice/contacts"} component={ContactsBO} auth={isAuthStatus} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
}
