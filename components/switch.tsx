"use client";

import { useState } from "react";

const Switch = ({
  enabled,
  onChange,
  leftText = "ID",
  rightText = "EN",
  className,
  inverted = false,
}: {
  enabled: boolean;
  onChange: (value: boolean) => void;
  leftText?: string;
  rightText?: string;
  className?: string;
  inverted?: boolean;
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    if (onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span
        className={`text-sm transition-colors duration-300 
        ${!isEnabled ? "font-bold" : "font-normal"}
        ${inverted ? "text-primary" : "text-white"}`}
      >
        {leftText}
      </span>

      <button
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300
          ${inverted ? "bg-primary" : "bg-white"}
          `}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full transition-transform duration-300 
            ${isEnabled ? "translate-x-7" : "translate-x-1"}
            ${inverted ? "bg-white" : "bg-primary"}
            `}
        />
      </button>

      <span
        className={`text-sm transition-colors duration-300 
        ${isEnabled ? "font-bold" : "font-normal"}
        ${inverted ? "text-primary" : "text-white"}`}
      >
        {rightText}
      </span>
    </div>
  );
};

export default Switch;
