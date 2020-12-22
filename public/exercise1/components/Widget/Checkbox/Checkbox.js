import React, { useState } from "react";
import Slider from "../Slider/Slider";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const renderSlider = () => {
    return isChecked ? (
      <Slider
        defaultValue="50"
        isOn={isChecked}
        min="low"
        max="high"
        minVal="0"
        maxVal="100"
        cbSlider={true}
        isWithCheckbox={true}
      />
    ) : null;
  };
  return (
    <>
      <div className={styles.check_item} onClick={() => handleClick()}>
        <input type="checkbox" checked={isChecked} readOnly />
        <label className={styles.check_box}>
          <div className={styles.check_text}>{props.title}</div>
        </label>
      </div>
      {renderSlider()}
    </>
  );
};

export default Checkbox;
