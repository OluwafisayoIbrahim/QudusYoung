import * as React from "react";

export const InstagramIcon = ({className, ...rest}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={`w-6 h-6 ${className}`} {...rest}>
      <defs>
        <linearGradient
          id="a"
          x1="328.27"
          x2="183.73"
          y1="508.05"
          y2="3.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stop-color-ffdb73" offset="0"></stop>
          <stop className="stop-color-fdad4e" offset="0.08"></stop>
          <stop className="stop-color-fb832e" offset="0.15"></stop>
          <stop className="stop-color-fa7321" offset="0.19"></stop>
          <stop className="stop-color-f6692f" offset="0.23"></stop>
          <stop className="stop-color-e84a5a" offset="0.37"></stop>
          <stop className="stop-color-e03675" offset="0.48"></stop>
          <stop className="stop-color-dd2f7f" offset="0.55"></stop>
          <stop className="stop-color-b43d97" offset="0.68"></stop>
          <stop className="stop-color-4d60d4" offset="0.97"></stop>
          <stop className="stop-color-4264db" offset="1"></stop>
        </linearGradient>
      </defs>
      <rect
        width="465.06"
        height="465.06"
        x="23.47"
        y="23.47"
        fill="url(#a)"
        className="fillurl(-a)"
        rx="107.23"
        ry="107.23"
      ></rect>
      <path
        fill="#fff"
        d="M331 115.22a66.92 66.92 0 0 1 66.65 66.65v148.26A66.92 66.92 0 0 1 331 396.78H181a66.92 66.92 0 0 1-66.65-66.65V181.87A66.92 66.92 0 0 1 181 115.22zm0-31H181c-53.71 0-97.66 44-97.66 97.66v148.25c0 53.71 44 97.66 97.66 97.66h150c53.71 0 97.66-44 97.66-97.66V181.87c0-53.71-43.95-97.66-97.66-97.66Z"
        className="fill-ffffff"
      ></path>
      <path
        fill="#fff"
        d="M256 198.13A57.87 57.87 0 1 1 198.13 256 57.94 57.94 0 0 1 256 198.13m0-31A88.87 88.87 0 1 0 344.87 256 88.87 88.87 0 0 0 256 167.13"
        className="fill-ffffff"
      ></path>
      <circle
        cx="346.81"
        cy="163.23"
        r="21.07"
        fill="#fff"
        className="fill-ffffff"
      ></circle>
    </svg>
  );
  

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    clipRule="evenodd"
    viewBox="0 0 500 500"
    className={`w-6 h-6 ${className}`}
    {...rest}
  >
    <path
      d="M512 64c0-35.323-28.677-64-64-64H64C28.677 0 0 28.677 0 64v384c0 35.323 28.677 64 64 64h384c35.323 0 64-28.677 64-64z"
      className="fill-2867b2"
    ></path>
    <path
      fill="#fff"
      d="M61.053 178.667h85.76v257.962h-85.76z"
      className="fill-ffffff"
    ></path>
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M104.512 54.28C75.171 54.28 56 73.57 56 98.853c0 24.752 18.588 44.574 47.377 44.574h.554c29.903 0 48.516-19.822 48.516-44.574-.555-25.283-18.611-44.573-47.935-44.573m252.766 118.321c-45.49 0-65.866 25.017-77.276 42.589v-36.523h-85.738c1.137 24.197 0 257.961 0 257.961h85.737V292.564c0-7.711.554-15.42 2.827-20.931 6.188-15.4 20.305-31.352 43.993-31.352 31.012 0 43.436 23.664 43.436 58.327v138.02h85.741v-147.93c0-79.237-42.305-116.097-98.72-116.097"
      className="fill-ffffff"
    ></path>
  </svg>
);
