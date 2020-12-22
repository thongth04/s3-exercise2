import React from "react";
import styles from "./NavBar.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={[styles.nav_tabs, styles.flex].join(" ")}>
      <div className={[styles.nav, styles.arrow, styles.back].join(" ")} />
      <div
        className={[
          styles.nav,
          styles.arrow,
          styles.forward,
          styles.disabled,
        ].join(" ")}
      />
      <Router>
        <Link to="/" className={styles.nav}>
          Sound
        </Link>
        <Link to="/mixer" className={styles.nav}>
          Mixer
        </Link>
        <Link to="/enhancement" className={styles.nav}>
          Enhancement
        </Link>
        <Link to="/eq" className={styles.nav}>
          Eq
        </Link>
        <Link to="/mic" className={styles.nav + " " + styles.active}>
          Mic
        </Link>
        <Link to="/lighting" className={styles.nav}>
          Lighting
        </Link>
        <Link to="/power" className={styles.nav}>
          Power
        </Link>

        <Switch>
          <Route exact path="/" />
          <Route path="/mixer" />
          <Route path="/enhancement" />
          <Route path="/eq" />
          <Route path="/mic" />
          <Route path="/lighting" />
          <Route path="/power" />
        </Switch>
      </Router>
      <div className={styles.user}>
        <div className={styles.avatar} />
      </div>
    </div>
  );
};

export default NavBar;
