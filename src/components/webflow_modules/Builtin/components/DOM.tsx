"use client";
import * as React from "react";
import { Props } from "../../types";

const DOM = React.forwardRef<HTMLElement, Props<"div", { tag: string }>>(
  function DOM({ tag = "div", className = "", ...props }, ref) {
    return React.createElement(tag, {
      className,
      ...props,
      ref,
    });
  }
);

export default DOM;
