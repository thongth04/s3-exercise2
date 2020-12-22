import React from "react";
import styles from "./App.module.css";
import NavBar from "../components/NavBar/NavBar";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import Footer from "../components/Footer/Footer";
import WidgetBody from "../components/WidgetBody/WidgetBody";

function App() {
  return (
    <div className={styles.main_container}>
      <NavBar />
      <div className={[styles.body_wrapper, styles.scrollable].join(" ")}>
        <ProfileBar />
        <WidgetBody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
