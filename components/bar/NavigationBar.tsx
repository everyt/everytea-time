'use client';

import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavigationBar() {
  const router = useRouter();

  const hyperlinkTo = (link: string) => {
    router.push(link);
  };
  return (
    <>
      <motion.div
        className='fixed min-h-screen min-w-[5vw] flex flex-col justify-start items-center z-50 bg-white/30 backdrop-blur-sm sm:px-2 md:px-3 border-r-[1px] border-stone-400'
        initial={{ x: -130 }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeOut', duration: 2 }}>
        <div className='pb-10' />
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.8,
            rotate: 360,
            transition: { duration: 1 },
          }}>
          <Image className='py-4' src='/svg/EVT.svg' width={50} height={50} alt='EVT' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => hyperlinkTo('/')}>
          <Icon className='py-2 text-stone-700 text-[2.5rem]' icon='mingcute:home-4-line' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => hyperlinkTo('/works')}>
          <Icon className='py-2 text-stone-700 text-[2.5rem]' icon='mingcute:box-3-line' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => hyperlinkTo('/contacts')}>
          <Icon className='py-2 text-stone-700 text-[2.5rem]' icon='mingcute:contacts-2-line' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => hyperlinkTo('/works')}>
          <Icon className='py-2 text-stone-700 text-[2.5rem]' icon='mingcute:sun-line' />
        </motion.div>
      </motion.div>
      <div className='min-h-[100px] min-w-[6vw] sm:px-2 md:px-3' />
    </>
  );
}
