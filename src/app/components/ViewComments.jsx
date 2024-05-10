import React from 'react';

export default function ViewComments({ post }) {
  return (
    <div>
      {post.comments.map((comment, index) => (
        <div
          className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-50 mx-auto  rounded-lg overflow-hidden  font-[sans-serif]"
          key={index}
        >
          <input type="file" name="" id="" />
          <p>{comment.displayName}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
