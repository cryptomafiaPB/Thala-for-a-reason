'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Success from './container/Success';
import Fail from './container/Fail';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  const [input, setInput] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const checkHandler = () => {
    setClick(true);

    if (
      input.length === 7 ||
      input
        .split('')
        .map(Number)
        .reduce((acc, num) => acc + num, 0) === 7
    ) {
      setSuccess(true);
      toast('🦄 Thala for a reason!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setSuccess(false);
      toast.error('❌ Thala is not a reason!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    // if (input.length === 7) {
    //   setSuccess(true);
    //   toast('🦄 Thala for a reason!', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'light',
    //   });
    // }

    // // Check if the sum of input numbers is 7
    // const inputNumbers = input.split('').map(Number);
    // const sum = inputNumbers.reduce((acc, num) => acc + num, 0);

    // if (sum === 7) {
    //   setSuccess(true);
    //   toast('🦄 Thala for a reason!', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'light',
    //   });
    // }
  };
  console.log(input);

  return (
    <div className="container">
      <div className="box p-8">
        <h1 className="text-black text-2xl font-bold ">Thala for a reason!</h1>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter your input.."
          className="input placeholder:italic placeholder:text-slate-400 block bg-white w-29 border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <button
          onClick={checkHandler}
          className="bg-blue-700 px-3 py-2 rounded text-white hover:bg-blue-600 hover:rounded-md transition"
        >
          Check
        </button>
        {click ? (
          success ? (
            <Success input={input} />
          ) : (
            <Fail input={input} />
          )
        ) : null}
        <Link href="https://github.com/cryptomafiaPB">
          <Image src="/github.svg" width={25} height={25} alt="Github Logo" />
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}
