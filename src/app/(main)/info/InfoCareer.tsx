import React, { forwardRef } from "react";

const InfoCareer = forwardRef<HTMLDivElement>((props, ref) => {
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
      InfoCareer
    </div>
  );
});

export default InfoCareer;
