'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
export default function ShareSuccess() {
  const params = useParams<{ input: string }>();

  useEffect(() => {
    // Display a toast message when the component mounts
    toast.success('🦄 Thala for a reason!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }, []);

  return (
    <div className="container">
      <div className="box p-8">
        <div className="flex flex-col items-center gap-4 mt-4">
          <h1>{params.input} = Thala for a reason!!!</h1>
          <video
            src="https://memerabit.com/wp-content/uploads/2023/12/3b37a044.mp4?_=1"
            autoPlay={true}
          />
          <Link href="/">
            <button className="text-white bg-blue-700 px-3 py-2 rounded hover:bg-blue-600 hover:rounded-md transition">
              Check Thala for a reason
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
