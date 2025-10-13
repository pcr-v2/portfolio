import React, { forwardRef } from "react";

const MindDeveloper = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        minHeight: "500px",
        border: "1px solid blue",
        width: "100%",
        display: "flex",
      }}
    >
      MindDeveloper
    </div>
  );
});

export default MindDeveloper;
