"use client";

import { useState } from "react";

const Switch = ({
  enabled,
  onChange,
  leftText = "ID",
  rightText = "EN",
  className,
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span
        className={`text-sm transition-colors duration-300 ${
          !isEnabled ? "text-white font-bold" : "text-white font-normal"
        }`}
      >
        {leftText}
      </span>

      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 bg-white
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform duration-300 ${
            isEnabled ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>

      <span
        className={`text-sm transition-colors duration-300 ${
          isEnabled ? "text-white font-bold" : "text-white font-normal"
        }`}
      >
        {rightText}
      </span>
    </div>
  );
};

export default Switch;
