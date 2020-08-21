import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Na,
  NavLink,
} from "react-router-dom";
import About from "./About";
import GalleryPage from "./GalleryPage";
import Contacts from "./Contacts";
import Home from "./Home";

class Routing extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div className="nav-bar">
              <div className="links">
                <NavLink
                  to="/home"
                  className="anm-link"
                  exact
                  activClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/gallery"
                  className="anm-link"
                  exact
                  activeClassName="active"
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/about"
                  className="anm-link"
                  exact
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contacts"
                  className="anm-link"
                  exact
                  activeClassName="active"
                >
                  Contacts
                </NavLink>
              </div>
            </div>

            <Switch>
              <Route exact path="/about">
                <About />
              </Route>

              <Route path="/gallery">
                <GalleryPage />
              </Route>

              <Route exact path="/contacts">
                <Contacts />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routing;
