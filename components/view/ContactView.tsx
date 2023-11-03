'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactView() {
  const baseCSS = 'flex items-center m-[0.1rem] border-b-2 rounded-xl p-4 bg-white hover:z-10';

  const animation = {
    scale: 1.1,
  };

  const hrefTo = (link: string) => {
    window.open(link);
  };

  const copyEmail = () => {
    const element = document.getElementById('toCopy') as HTMLInputElement;
    const value = element.value;
    navigator.clipboard.writeText(value).then(() => {
      const emailElement = document.getElementById('email') as HTMLInputElement;
      const email = emailElement.innerHTML;
      if (email === 'everytea.time@gmail.com') {
        emailElement.innerHTML = '이메일이 클립보드에 복사되었습니다.';
        setTimeout(() => {
          emailElement.innerHTML = email;
        }, 2000);
      }
    });
  };

  const getButton = (obj: any) => {
    return (
      <motion.div key={obj.text} className={`${baseCSS} border-${obj.borderColor} ${obj.extra}`} whileHover={animation}>
        <div className={`rounded-md overflow-hidden bg-${obj.adobe}`}>
          <Image src={`/stacks/${obj.text}.svg`} height={20} width={20} alt='' />
        </div>
        <span className={`ml-2 text-${obj.textColor}`}>{obj.text}</span>
        {obj.secondText && <span className={`text-${obj.secondColor}`}>{obj.secondText}</span>}
      </motion.div>
    );
  };

  return (
    <>
      <main className='flex w-[80vw] h-[90vh] flex-col items-start justify-center py-24 pt-6'>
        <span className='font-extrabold text-xl mt-3'>곽태웅</span>
        <span className='font-extrabold text-xl mt-3'>EveryHongCha ( Everyt )</span>
        <span className='cursor-pointer' onClick={() => hrefTo('https://github.com/everyt')}>
          https://github.com/everyt
        </span>
        <input id='toCopy' type='hidden' value='everytea.time@gmail.com' readOnly />
        <span id='email' className='mb-3 cursor-pointer' onClick={copyEmail}>
          everytea.time@gmail.com
        </span>
        <div className='flex mt-3 justify-center'>
          {[
            { text: 'Javascript', borderColor: 'yellow-400' },
            { text: 'Typescript', borderColor: 'blue-500' },
            { text: 'Java', borderColor: 'orange-500' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'My',
              borderColor: 'orange-700',
              textColor: 'sky-800',
              extra: 'font-bold',
              secondText: 'SQL',
              secondColor: 'orange-400',
            },
            { text: 'MariaDB', borderColor: 'orange-700' },
            { text: 'FireBase', borderColor: 'yellow-400' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'React', borderColor: 'gray-700', textColor: 'sky-500', extra: 'font-bold' },
            { text: 'Next.js', borderColor: 'slate-500' },
            { text: 'Svelte', borderColor: 'red-500', secondText: 'Kit', secondColor: 'slate-400' },
            { text: 'Spring', borderColor: 'lime-500', secondText: 'Boot', secondColor: 'lime-700' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'Premiere Pro', borderColor: 'purple-600', textColor: 'purple-950', adobe: 'purple-300' },
            { text: 'After Effects', borderColor: 'violet-600', textColor: 'violet-950', adobe: 'violet-300' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'Photoshop', borderColor: 'sky-500', textColor: 'sky-950', adobe: 'sky-400' },
            { text: 'Illustrator', borderColor: 'orange-500', textColor: 'orange-950', adobe: 'orange-400' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[{ text: 'Blender', borderColor: 'orange-400', textColor: 'sky-700', extra: 'font-bold' }].map((obj) =>
            getButton(obj),
          )}
        </div>
      </main>
    </>
  );
}
