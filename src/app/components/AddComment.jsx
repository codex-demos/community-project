'use client';

import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db } from '../firebaseConfig';

export default function AddComment({ post }) {
  const [text, setText] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        
      const docRef = doc(db, 'posts', post.id);
      const ref = await updateDoc(docRef, {
        comments: [
          ...post.comments,
          { displayName: auth.currentUser.displayName, text },
        ],
      });
      console.log(ref);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-75 mx-auto  rounded-lg overflow-hidden font-[sans-serif]"
      onSubmit={handleSubmit}
    >
      <label>
        Comment:
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          name="text"
          id="text"
        ></textarea>
      </label>
      <button className="btn btn-primary">Add Comment</button>
    </form>
  );
}
