'use client';

import { motion, useTime, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function IntroduceView() {
  const [isLinked, setIsLinked] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const time = useTime();
  const rotate1 = useTransform(time, [0, 6000], [0, 260], { clamp: false });
  const rotate2 = useTransform(time, [0, 10000], [0, -260], { clamp: false });

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 3000);
  }, [fadeIn]);

  const router = useRouter();

  const hyperlinkTo = (link: string) => {
    setIsLinked(true);
    setTimeout(() => {
      router.push(link);
    }, 2500);
  };

  const variants = {
    move: {
      x: '100vw',
      transition: { ease: 'linear', duration: 3.3 },
    },
  };

  return (
    <>
      {fadeIn && (
        <motion.div
          className='absolute top-0 left-0 h-screen w-screen bg-stone-50 z-10'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: 3 }}
        />
      )}
      {isLinked && (
        <motion.div
          className='absolute top-[43.3vh] left-[48vw] flex flex-col font-extrabold text-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 4 }}>
          <Image src='/svg/projects.svg' alt='' width={160} height={160} />
        </motion.div>
      )}
      <motion.div className='flex flex-col' animate={isLinked && 'move'} variants={variants}>
        <div className='sm:flex mb-8 sm:mb-0'>
          <div className='flex flex-col'>
            <motion.div
              className='absolute bg-stone-200 h-16 w-16 z-20 cursor-poionter mt-[1.1rem] ml-[36rem] rounded-md'
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'easeInOut', duration: 2 }}
              style={{ rotate: rotate2 }}></motion.div>
            <motion.div
              className='absolute bg-stone-300 h-12 w-12 z-20 cursor-poionter mt-[1.6rem] ml-[39rem] rounded-md'
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'easeInOut', duration: 2 }}
              style={{ rotate: rotate1 }}></motion.div>
            <div className='absolute bg-stone-200 h-24 w-24 z-20 cursor-poionter rotate-45 rounded-md' />
            <motion.div
              className='bg-stone-700 absolute z-20 rounded-md'
              initial={{ width: 0 }}
              animate={{ width: 475 }}
              transition={{ ease: 'easeInOut', duration: 1.5 }}>
              <p className='text-5xl px-2 py-1'>&nbsp;</p>
            </motion.div>
            <span className='text-stone-50 text-5xl z-30 px-2 py-1 font-bold tracking-tight whitespace-nowrap'>
              GWAK TAE WOONG
            </span>
            <motion.div
              className='bg-stone-700 my-16 absolute z-20 rounded-md'
              initial={{ width: 0 }}
              animate={{ width: 475 }}
              transition={{ ease: 'easeInOut', duration: 2.5 }}>
              <p className='text-xl'>&nbsp;</p>
            </motion.div>
            <span className='text-stone-50 text-xl z-30 my-2 ml-[8.25rem] whitespace-nowrap'>
              want to become a full-stack developer
            </span>
          </div>
          <div className='relative' onClick={() => hyperlinkTo('/works')}>
            <motion.div
              className='absolute bg-stone-700 h-24 w-24 rotate-45 z-20 cursor-poionter ml-44 sm:ml-8 rounded-md'
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ ease: 'easeInOut', duration: 2 }}></motion.div>
          </div>
          <div
            className='text-stone-50 mt-[1.875rem] ml-[2.4rem] font-bold text-3xl z-30'
            onClick={() => hyperlinkTo('/works')}>
            Next→
          </div>
        </div>
        <div className='flex items-center text-xl mb-1 ml-3 sm:ml-0'>
          <p className='text-black font-bold'>안녕하세요.</p>
          <p>Hello.おはよう.</p>
          <p className='font-sans'>你好.</p>
        </div>
        <p className='text-stone-500 ml-2 sm:ml-0 font-medium'>
          어제보다 한걸음, 그 다음에는 두걸음 더 나아가는 개발자입니다.
        </p>
      </motion.div>
    </>
  );
}
