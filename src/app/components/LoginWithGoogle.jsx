'use client';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';

export default function LoginWithGoogle({ getUser }) {
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      getUser(user);
    } catch (error) {}
  }

  return (
    <div
      onClick={handleGoogleSignIn}
      className="px-6 py-2.5 w-48 rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
    >
      Login With Google
    </div>
  );
}
