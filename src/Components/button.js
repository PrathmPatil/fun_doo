import React from "react";

function Button({ title, onclick,backgroundColor }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
      <label
        style={{
          backgroundColor: backgroundColor,
          borderRadius: "4px",
          padding: "9px 10px",
          color: "#fff",
          fontWeight: "600",
        }}
        onClick={onclick}
      >
        {title}{" "}
      </label>
    </div>
  );
}

export default Button;
