import { useState } from "react";

export default function InputField({ description, onValueChange }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(event) {
    const rawValue = event.target.value;

    if (rawValue === "") {
      onValueChange(null);
      return;
    }

    const numericValue = +rawValue;

    if (!isNaN(numericValue)) {
      onValueChange(numericValue);
    } else {
      onValueChange(null);
    }
  }

  return (
    <div>
      <label className="user-input">{description}</label>
      <input
        type={isFocused ? "number" : undefined}
        className="user-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
}
