import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  checked?: boolean;
}

export const Chip: React.FC<Props> = ({ children, onClick, checked }) => (
  <button
    className="rounded-3xl appearance-none bg-inherit brightness-90 mr-2 py-1 px-2"
    onClick={onClick}
  >
    <span className="text-inherit invert grayscale font-bold">
      {checked && (
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 inline align-baseline"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      )}
      {children}
    </span>
  </button>
);
