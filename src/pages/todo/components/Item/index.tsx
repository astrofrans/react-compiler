import React, { useId } from "react";

export const Item = ({ id, label, status, handleChange }) => {
  const checkboxId = useId();

  return (
    <li className={`mt-1 p-0.5 rounded-3xl brightness-90 bg-inherit`}>
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor={checkboxId}
          data-ripple-dark="true"
        >
          <input
            id={checkboxId}
            type="checkbox"
            checked={status === "COMPLETED"}
            onChange={() => handleChange({ id, label, status })}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#2793ff] checked:bg-[#2793ff] checked:before:bg-gray-900 hover:before:opacity-10"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
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
        </label>
        <label
          className="mt-px text-gray-700 cursor-pointer select-none text-inherit invert grayscale font-normal"
          htmlFor={checkboxId}
        >
          {label}
        </label>
      </div>
    </li>
  );
};