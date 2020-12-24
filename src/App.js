import React from "react";
import ContentSection from "./components/ContentSection/ContentSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.main_container}>
      <div className={[styles.thx_wrapper, styles.flex].join(" ")}>
        <ProfileSection />
        <ContentSection />
      </div>
    </div>
  );
};

export default App;
