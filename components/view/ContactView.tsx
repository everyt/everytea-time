'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ContactView() {
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
  const baseCSS = 'flex items-center m-[0.1rem] rounded-xl p-2 bg-white hover:z-10 border-[1px]';

  const getButton = (obj: any) => {
    return (
      <motion.div key={obj.text} className={`${baseCSS} ${obj.extra}`} whileHover={animation}>
        <div className={`rounded-md overflow-hidden ${obj.adobe}`}>
          <Image src={`/stacks/${obj.text}.svg`} height={20} width={20} alt='' />
        </div>
        <span className={`ml-2 ${obj.textColor}`}>{obj.text}</span>
        {obj.secondText && <span className={`${obj.secondColor}`}>{obj.secondText}</span>}
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
          {[{ text: 'Javascript' }, { text: 'Typescript' }, { text: 'Java' }].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'My',
              textColor: 'text-sky-800',
              extra: 'font-bold',
              secondText: 'SQL',
              secondColor: 'text-orange-400',
            },
            { text: 'MariaDB' },
            { text: 'FireBase' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'React', textColor: 'text-sky-500', extra: 'font-bold' },
            { text: 'Next.js' },
            { text: 'Svelte', secondText: 'Kit', secondColor: 'text-slate-400' },
            { text: 'Spring', secondText: 'Boot', secondColor: 'text-lime-700' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'Premiere Pro',
              textColor: 'text-purple-950',
              adobe: 'bg-purple-300',
            },
            {
              text: 'After Effects',
              textColor: 'violet-950',
              adobe: 'bg-violet-300',
            },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'Photoshop', textColor: 'text-sky-950', adobe: 'bg-sky-400' },
            {
              text: 'Illustrator',
              textColor: 'text-orange-950',
              adobe: 'bg-orange-400',
            },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[{ text: 'Blender', textColor: 'text-sky-700', extra: 'font-bold' }].map((obj) => getButton(obj))}
        </div>
      </main>
    </>
  );
}
