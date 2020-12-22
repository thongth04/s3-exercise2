import React, { useState } from "react";
import styles from "./WidgetBody.module.css";
import Widget from "../Widget/Widget";
import Switch from "../../components/Widget/Switch/Switch";
import Slider from "../../components/Widget/Slider/Slider";
import Checkbox from "../../components/Widget/Checkbox/Checkbox";

const WidgetBody = () => {
  const [volumeState, setVolumeState] = useState(true);
  const [sensitivityState, setSensitivityState] = useState(true);
  const [sidetoneState, setSidetoneState] = useState(false);

  const handleVolume = () => {
    setVolumeState(!volumeState);
  };
  const handleSesitivity = () => {
    setSensitivityState(!sensitivityState);
  };
  const handleSidetone = () => {
    setSidetoneState(!sidetoneState);
  };

  return (
    <div className={[styles.body_widgets, styles.flex].join(" ")}>
      <div className={styles.widget_col}>
        <Widget>
          <div className={styles.title}>
            microphone
            <Switch isOn={volumeState} onClick={() => handleVolume()} />
          </div>
          <div className={styles.h2_title}>mic volume</div>
          <Slider
            defaultValue="55"
            isOn={volumeState}
            min="low"
            max="high"
            minVal="10"
            maxVal="100"
          />

          <div className={[styles.h2_title, styles.mt20].join(" ")}>
            mic sensitivity
            <Switch
              isOn={sensitivityState}
              onClick={() => handleSesitivity()}
            />
          </div>
          <div className={styles.h2_body}>
            Adjust this setting to remove unwanted background noise or increase
            the amount of mic output heard
          </div>
          <Slider
            defaultValue="55"
            isOn={sensitivityState}
            min="low"
            max="high"
            minVal="10"
            maxVal="100"
          />
        </Widget>
      </div>
      <div className={[styles.widget_col, styles.flex].join(" ")}>
        <Widget>
          <div className={styles.title}>
            sidetone
            <Switch isOn={sidetoneState} onClick={() => handleSidetone()} />
          </div>
          <Slider
            defaultValue="50"
            isOn={sidetoneState}
            min="0"
            max="100"
            minVal="0"
            maxVal="100"
          />
        </Widget>
        <Widget>
          <div className={styles.title}>enhancements</div>
          <Checkbox title="Volume Normalization" />
          <Checkbox title="Ambient Noise Reduction" />
          <Checkbox title="Voice Clarity" />
        </Widget>
      </div>
    </div>
  );
};

export default WidgetBody;
