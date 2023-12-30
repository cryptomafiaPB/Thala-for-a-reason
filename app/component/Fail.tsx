import Image from 'next/image';
import { useEffect } from 'react';
import React from 'react';

interface SuccessProps {
  input: string;
}

const Fail: React.FC<SuccessProps> = ({ input }) => {
  const playAudio = () => {
    const audio = new Audio('/Moye Moye Song Sound Effect.mp3');
    audio.play();
  };
  useEffect(() => {
    playAudio();
    return;
  }, []);

  return (
    <div className={'flex flex-col items-center gap-4'}>
      <h1>{input} ≠ 7, Thala is not a reason!</h1>
      <Image src="/Moye moye.jpg" width={250} height={250} alt="Moye moye" />
    </div>
  );
}
export default Fail