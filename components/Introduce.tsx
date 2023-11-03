'use client';

import { motion } from 'framer-motion';
import FadeIn from './animation/FadeIn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Introduce() {
  const [isLinked, setIsLinked] = useState(false);

  const router = useRouter();

  const hyperlinkTo = (link: string) => {
    setIsLinked(true);
    setTimeout(() => {
      router.push(link);
    }, 3000);
  };

  const variants = {
    move: {
      x: '100vw',
    },
  };

  return (
    <>
      <FadeIn />
      {isLinked && <motion.div className='absolute top-[43vh] flex flex-col font-medium text-2xl'>Everytea</motion.div>}
      <motion.div
        className='flex flex-col'
        animate={isLinked && 'move'}
        variants={variants}
        transition={{ ease: 'easeInOut', duration: 4 }}>
        <div className='flex'>
          <div className='flex flex-col'>
            <motion.div
              className='bg-stone-700 absolute z-20'
              initial={{ width: 0 }}
              animate={{ width: 470 }}
              transition={{ ease: 'easeInOut', duration: 2 }}>
              <p className='text-5xl px-2 py-1'>&nbsp;</p>
            </motion.div>
            <p className='text-stone-50 text-5xl z-30 px-2 py-1 font-bold tracking-tight'>GWAK TAE WOONG</p>
            <motion.div
              className='bg-stone-700 my-16 absolute z-20'
              initial={{ width: 0 }}
              animate={{ width: 470 }}
              transition={{ ease: 'easeInOut', duration: 3 }}>
              <p className='text-xl'>&nbsp;</p>
            </motion.div>
            <p className='text-stone-50 text-xl z-30 my-2 ml-[8.25rem]'>want to become a full-stack developer</p>
          </div>
          <motion.div
            className='bg-stone-700 h-24 w-24 rotate-45 ml-8 z-20 cursor-poionter'
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ ease: 'easeInOut', duration: 2.5 }}
            onClick={() => hyperlinkTo('/works')}>
            <div className='mt-[1.85rem] rotate-[-45deg] text-white font-bold text-3xl'>Works→</div>
          </motion.div>
        </div>
        <div className='flex items-center text-xl mb-2'>
          <p className='text-black font-bold'>안녕하세요.</p>
          <p>Hello.おはよう.你好.</p>
        </div>
        <p className='text-stone-500'>어제보다 한걸음, 그 다음에는 두걸음 더 나아가는 개발자가 되고 싶습니다.</p>
      </motion.div>
    </>
  );
}
