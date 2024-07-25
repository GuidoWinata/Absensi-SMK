import React, { useEffect, useState } from 'react';

export default function Kanan() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12; // Convert to 12-hour format

  return (
    <div>
        <div className='text-center text-gray-600 relative flex content-center items-center'>
            <div className="bagian-kiri">
                <span className='text-[10.5em] w-[125px]'>{String(displayHours).padStart(2, '0')}</span>
                <span className='text-[12.5em]'>:</span>
                <span className='text-[10.5em] w-[125px]'>{String(minutes).padStart(2, '0')}</span>
                <span className='text-[12.5em]'>.</span>
            </div>
            <div className='relative flex content-center items-center flex-col ml-2.5'>
                <span className='text-[3.2em] font-[500] translate-y-[0px]'>{ampm}</span>
                <span className='text-[3.2em] font-[500] translate-y-[17px]'>{String(seconds).padStart(2, '0')}</span>
            </div>
        </div>
    </div>
  );
}
