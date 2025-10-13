"use client";

import React, { forwardRef } from "react";

const ProjectPersonal = forwardRef<HTMLDivElement>((props, ref) => {
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
      ProjectPersonal
    </div>
  );
});

export default ProjectPersonal;
