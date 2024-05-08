import { auth } from '@/app/firebaseConfig';
import React from 'react';

export default function Post({ post }) {
  return (
    <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
      <p>{auth.currentUser.displayName}</p>
      <div className="px-4 py-6">
        <h3 className="mt-2">{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
}
