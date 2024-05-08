'use client';
import React from 'react';
import LoginWithGoogle from './LoginWithGoogle';
import Link from 'next/link';

export default function Hero({ getUser }) {
  return (
    <section>
      <h2>Welcome to our Community Marketplace!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda est
        repellat tenetur sit debitis voluptatibus ab expedita sunt aut?
        Assumenda pariatur ex modi consequuntur! Porro expedita fuga nisi non
        in!
      </p>
      <p>
        Why wait? Join us now and start sharing your items with your neighbors!
      </p>
      <p>It's east, fast, and convenient.</p>
      <LoginWithGoogle getUser={getUser} />
      <Link href="/dashboard">Dashboard</Link>
    </section>
  );
}
