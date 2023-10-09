import React, { useState } from "react";
import "./Styles/switch.scss";

function SwitchButtonComp() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`switch ${isChecked ? "night" : "day"}`}>
      <input
        type="checkbox"
        id="switch"
        className="switch-input"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <label htmlFor="switch" className="switch-label">
        <div className="switch-button"></div>
      </label>
    </div>
  );
}

export default SwitchButtonComp;
