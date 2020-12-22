import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
  const [val, setVal] = useState(props.defaultValue);

  const processWidth = (e) => {
    setVal(e.target.value);
  };

  const getPercent = () => {
    return (val - props.minVal) / (props.maxVal - props.minVal);
  };

  const getWidthLeft = () => getPercent() * (520 - 16) + 8 + "px";
  const getPosition = () => getPercent() * (520 - 16) - 29 / 2 + 8 + "px";

  // slider with checkbox
  const getWidthLeftCS = () => getPercent() * (490 - 16) + 8 + "px";
  const getPositionCS = () => getPercent() * (490 - 16) - 29 / 2 + 8 + "px";

  return (
    <div
      className={
        styles.slider_container +
        " " +
        (props.isOn ? styles.on : "") +
        " " +
        (props.cbSlider ? styles.cb_slider : "")
      }
    >
      <div className={styles.foot + " " + styles.min}>{props.min}</div>
      <div className={styles.foot + " " + styles.mid}>medium</div>
      <div className={styles.foot + " " + styles.max}>{props.max}</div>
      <div
        className={styles.left}
        style={{
          width: props.isWithCheckbox ? getWidthLeftCS() : getWidthLeft(),
        }}
      />
      <div className={styles.track} />
      <div
        className={styles.slider_tip}
        style={{ left: props.isWithCheckbox ? getPositionCS() : getPosition() }}
      >
        {val}
      </div>
      <input
        type="range"
        min={props.minVal}
        max={props.maxVal}
        defaultValue={val}
        step={1}
        className={styles.slider}
        onChange={(e) => processWidth(e)}
        disabled={!props.isOn}
      />
    </div>
  );
};

export default Slider;
