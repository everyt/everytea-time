'use client';

import { Icon } from '@iconify-icon/react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FooterBar() {
  return (
    <>
      <motion.div
        className='fixed left-0 min-h-[10vh] min-w-[100vw] flex flex-row-reverse justify-start items-center z-50 sm:z-40 bg-white/30 backdrop-blur-sm'
        initial={{ bottom: -130 }}
        animate={{ bottom: 0 }}
        transition={{ ease: 'easeInOut', duration: 2 }}>
        <Image className='mt-2 mx-8' src='/svg/Everyt.svg' width={100} height={100} alt='Everyt' />
        <p className='text-stone-500 text-xs ml-8'>
          ©2023 Everyt. <br /> All rights reserved.{' '}
        </p>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.9,
          }}>
          <Icon className='text-stone-700 text-3xl mx-2 mt-2' icon='ic:twotone-discord' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.9,
          }}>
          <Icon className='text-stone-700 text-3xl mx-2 mt-2' icon='basil:google-solid' />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.9,
          }}>
          <Icon className='text-stone-700 text-3xl mx-2 mt-2' icon='codicon:github' />
        </motion.div>
      </motion.div>
    </>
  );
}
