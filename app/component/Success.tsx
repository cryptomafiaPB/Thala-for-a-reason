'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import Link from 'next/link';
import React from 'react';

interface SuccessProps {
  input: string;
}

const Success: React.FC<SuccessProps> = ({ input }) => {
  const DOMAIN_URL = process.env.NEXT_PUBLIC_DOMAIN_URL;
  // const [textToCopy, setTextToCopy] = useState<string>('');
  // setTextToCopy(`http://localhost:3000/meme/${input}`);
  const handleCopyClick = () => {
    clipboardCopy(`http://localhost:3000/meme/${input}`)
      .then(() => {
        console.log('Text copied to clipboard!');
        toast.success('🦄 Copied!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((err) => {
        console.error('Failed to copy text to clipboard', err);
        toast.error(err, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };
  return (
    <div>
      <div className="flex flex-col">
        <button
          onClick={handleCopyClick}
          className="bg-green-500 px-3 py-2 rounded   text-white hover:bg-green-600 hover:rounded-md transition"
        >
          Copy
        </button>
        <Link href={`${DOMAIN_URL}/meme/${input}/7`}>
          <p className="p-4 bg-gray-200 m-2 rounded text-sm">
            {DOMAIN_URL}/meme/{input}/7
          </p>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4 mt-4">
        <h1>{input} = Thala for a reason!!!</h1>
        <video
          src="https://memerabit.com/wp-content/uploads/2023/12/3b37a044.mp4?_=1"
          autoPlay={true}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
export default Success