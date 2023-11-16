import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type SlideShowProps = {
  imgArr: string[];
  height: number;
  width: number;
};

export default function SlideShow({ imgArr, height, width }: SlideShowProps) {
  const [currentImg, setCurrentImg] = useState(0);

  const count = imgArr.length;

  const handleChangeImg = (index: number) => {
    if (index > -1) {
      setCurrentImg(index);
    } else {
      const nextIndex = index === -1 ? currentImg + 1 : currentImg - 1;
      if (nextIndex < 0) {
        setCurrentImg(count - 1);
      } else if (nextIndex >= count) {
        setCurrentImg(0);
      } else {
        setCurrentImg(nextIndex);
      }
    }
  };

  const variants = {
    translucent: { opacity: 0.3 },
    opacity: { opacity: 0.6, backgroundColor: '#1fddad' },
  };

  const bottomButtons = () => {
    let result = [] as React.ReactNode[];
    result.push(
      <motion.div
        key={0}
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.6, borderColor: '#1fddad' }}
        whileTap={{ opacity: 0.8, borderColor: '#1fddad' }}
        className='h-3 w-3 border-t-4 border-r-4 border-black cursor-pointer rotate-[225deg] z-10 mr-3'
        onClick={() => handleChangeImg(-2)}
      />,
    );
    for (let i = 1; i < count + 1; i++) {
      result.push(
        <motion.div
          key={i}
          onClick={() => handleChangeImg(i)}
          className='h-2 w-2 rounded-full bg-black cursor-pointer z-10 mx-2'
          initial={{ opacity: 0.3 }}
          animate={currentImg === i - 1 ? 'opacity' : 'translucent'}
          variants={variants}
          transition={{ ease: 'easeInOut', duration: 0.4 }}
        />,
      );
    }
    result.push(
      <motion.div
        key={count + 1}
        initial={{ opacity: 0.3 }}
        whileHover={{ opacity: 0.6, borderColor: '#1fddad' }}
        whileTap={{ opacity: 0.8, borderColor: '#1fddad' }}
        className='h-3 w-3 border-t-4 border-r-4 border-black cursor-pointer rotate-45 z-10 ml-3'
        onClick={() => handleChangeImg(-1)}
      />,
    );
    return result;
  };

  return (
    <div className={`flex flex-col justify-center items-center h-full w-full relative`}>
      <Image
        className='border-[1px]'
        src={imgArr[currentImg]}
        blurDataURL={imgArr[currentImg]}
        alt='SlideShow'
        width={width}
        height={height}
        placeholder='blur'
      />
      <div className='absolute bottom-2 flex items-center mt-2'>{bottomButtons()}</div>
    </div>
  );
}
