'use client';

import { motion } from 'framer-motion';

export default function FadeIn() {
  return (
    <motion.div
      className='absolute top-0 left-0 h-screen w-screen bg-stone-50 z-10'
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 3 }}
    />
  );
}
