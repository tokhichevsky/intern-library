import React from "react";
import { FC } from "react";

export const ArrowRight: FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 14.1819L13 10.1819L9 6.18189" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
