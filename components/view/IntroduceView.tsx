'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function IntroduceView() {
  const [isLinked, setIsLinked] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

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
    }, 4000);
  };

  const variants = {
    move: {
      x: '100vw',
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
          transition={{ ease: 'easeInOut', duration: 2.5 }}>
          Everytea
        </motion.div>
      )}
      <motion.div
        className='flex flex-col'
        animate={isLinked && 'move'}
        variants={variants}
        transition={{ ease: 'easeInOut', duration: 4 }}>
        <div className='sm:flex mb-8 sm:mb-0'>
          <div className='flex flex-col'>
            <motion.div
              className='bg-stone-700 absolute z-20'
              initial={{ width: 0 }}
              animate={{ width: 470 }}
              transition={{ ease: 'easeInOut', duration: 2 }}>
              <p className='text-5xl px-2 py-1'>&nbsp;</p>
            </motion.div>
            <span className='text-stone-50 text-5xl z-30 px-2 py-1 font-bold tracking-tight whitespace-nowrap'>
              GWAK TAE WOONG
            </span>
            <motion.div
              className='bg-stone-700 my-16 absolute z-20'
              initial={{ width: 0 }}
              animate={{ width: 470 }}
              transition={{ ease: 'easeInOut', duration: 3 }}>
              <p className='text-xl'>&nbsp;</p>
            </motion.div>
            <span className='text-stone-50 text-xl z-30 my-2 ml-[8.25rem] whitespace-nowrap'>
              want to become a full-stack developer
            </span>
          </div>
          <motion.div
            className='bg-stone-700 h-24 w-24 rotate-45 z-20 cursor-poionter ml-44 sm:ml-8'
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ ease: 'easeInOut', duration: 2.5 }}
            onClick={() => hyperlinkTo('/works')}>
            <div className='mt-[1.85rem] rotate-[-45deg] text-stone-50 font-bold text-3xl m pt-6 sm:pt-0 ml-2 sm:ml-0'>
              Works→
            </div>
          </motion.div>
        </div>
        <div className='flex items-center text-xl mb-2 ml-3 sm:ml-0'>
          <p className='text-black font-bold'>안녕하세요.</p>
          <p>Hello.おはよう.你好.</p>
        </div>
        <p className='text-stone-500 ml-2 sm:ml-0'>
          어제보다 한걸음, 그 다음에는 두걸음 더 나아가는 개발자가 되고 싶습니다.
        </p>
      </motion.div>
    </>
  );
}
