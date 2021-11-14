import React from "react";
import { FC } from "react";

export const ArrowLeft: FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 5.81812L7 9.81812L11 13.8181" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
