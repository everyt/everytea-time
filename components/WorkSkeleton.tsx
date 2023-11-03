'use client';

import Image from 'next/image';

export default function WorkSkeleton() {
  const generateRandomSkeleton = () => {
    const prePiece1 = (
      <div className='flex flex-row justify-between w-full mb-3'>
        <div className='h-8 w-40 animate-pulse bg-gray-100' />
        <div className='flex flex-col items-end'>
          <div className='h-4 w-16 animate-pulse bg-gray-100 mb-2 mr-2' />
          <div className='h-4 w-12 animate-pulse bg-gray-100' />
        </div>
      </div>
    );

    const prePiece2 = (
      <Image className='animate-pulse bg-gray-100 mb-4' src='/blank.svg' alt='' width={1920} height={1080} />
    );

    const getLorePiece = () => {
      const result = [] as React.ReactNode[];
      const loreLength = Math.floor(Math.random() * 2);

      for (let i = 0; i < loreLength - 1; i++) {
        result.push(<div key={i} className='h-5 w-full animate-pulse bg-gray-100 mb-2'></div>);
      }
      result.push(<div key={loreLength} className='h-5 w-40 animate-pulse bg-gray-100 mb-6'></div>);

      return result;
    };

    const getChildrenPiece = () => {
      const result = [] as React.ReactNode[];
      const childrenLength = 2 + Math.floor(Math.random() * 6);

      for (let i = 0; i < childrenLength - 1; i++) {
        result.push(<div key={i} className='h-4 w-full animate-pulse bg-gray-100 mb-2'></div>);
      }
      result.push(<div key={childrenLength} className='h-5 w-72 animate-pulse bg-gray-100'></div>);

      return result;
    };

    return (
      <div className='flex flex-col justify-start items-start p-3 rounded-xl bg-white shadow-xl mx-1 sm:mx-2 md:mx-3 mb-12'>
        {prePiece1}
        {prePiece2}
        {getLorePiece()}
        {getChildrenPiece()}
      </div>
    );
  };

  return generateRandomSkeleton();
}
