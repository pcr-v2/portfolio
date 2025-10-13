import React, { forwardRef } from "react";

const MindAttitude = forwardRef<HTMLDivElement>((props, ref) => {
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
      MindAttitude
    </div>
  );
});

export default MindAttitude;
