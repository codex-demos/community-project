'use client';

import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Post from './Post';
import { db } from '@/app/firebaseConfig';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const todoArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(todoArray);
    });
    return () => unsub();
  }, []);
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
