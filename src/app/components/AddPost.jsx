import React from 'react';

export default function AddPost({ onShow }) {
  return (
    <div className="flex mt-20 justify-center  ">
      <div
        className="border-2 flex gap-2 items-center cursor-pointer p-2 rounded-lg text-4xl"
        onClick={() => onShow(true)}
      >
        <svg
          style={{ color: 'green' }}
          xmlns="http://www.w3.org/2000/svg"
          width="4rem"
          height="4rem"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
            <path
              fillRule="evenodd"
              d="M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
        Add Post!
      </div>
    </div>
  );
}
