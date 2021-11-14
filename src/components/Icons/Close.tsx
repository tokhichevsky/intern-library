import React from "react";
import { FC } from "react";

export const Close: FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14.75 28.5C22.3439 28.5 28.5 22.3439 28.5 14.75C28.5 7.15608 22.3439 1 14.75 1C7.15608 1 1 7.15608 1 14.75C1 22.3439 7.15608 28.5 14.75 28.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.625 10.625L18.875 18.875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.875 10.625L10.625 18.875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
