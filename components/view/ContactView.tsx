'use client';

import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ContactView() {
  const controls = useAnimationControls();

  const [onHoverName, setOnHoverName] = useState(false);
  const [onHoverGitLink, setOnHoverGitLink] = useState(false);
  const [onHoverEmail, setOnHoverEmail] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMousePosition);
    return () => window.removeEventListener('mousemove', handleMousePosition);
  }, []);

  const cursorVariants = {
    default: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.001,
        ease: 'linear',
      },
      x: cursorPosition.x,
      y: cursorPosition.y - 30,
    },
  };

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
        controls.start('change');
        setTimeout(() => {
          emailElement.innerHTML = '이메일이 클립보드에 복사되었습니다.';
        }, 300);
        setTimeout(() => {
          controls.start('change');
          setTimeout(() => {
            emailElement.innerHTML = email;
          }, 300);
        }, 2000);
      }
    });
  };
  const baseCSS = 'flex items-center m-[0.1rem] rounded-xl p-2 bg-white hover:z-10 border-[1px]';

  const getButton = (obj: any) => {
    return (
      <motion.div key={obj.text} className={`${baseCSS}`} whileHover={animation} onClick={() => hrefTo(obj.href)}>
        <div className={`rounded-md overflow-hidden ${obj.adobe}`}>
          <Image src={`/stacks/${obj.text}.svg`} height={20} width={20} alt='' />
        </div>
        <span className={`ml-2 ${obj.textColor}`}>{obj.text}</span>
        {obj.secondText && <span className={`${obj.secondColor}`}>{obj.secondText}</span>}
      </motion.div>
    );
  };

  const variants = {
    change: {
      opacity: [1, 0, 1],
    },
  };

  return (
    <>
      {onHoverName && (
        <motion.div
          className={`${baseCSS} absolute left-0 top-0 text-sm z-[500]`}
          variants={cursorVariants}
          animate='default'>
          <span>Everyt</span>
        </motion.div>
      )}
      {onHoverGitLink && (
        <motion.div
          className={`${baseCSS} absolute left-0 top-0 text-sm z-[500]`}
          variants={cursorVariants}
          animate='default'>
          <span>새 창에서 깃허브 링크를 엽니다.</span>
        </motion.div>
      )}
      {onHoverEmail && (
        <motion.div
          className={`${baseCSS} absolute left-0 top-0 text-sm z-[500]`}
          variants={cursorVariants}
          animate='default'>
          <span>클릭하면 클립보드에 복사됩니다.</span>
        </motion.div>
      )}
      <main className='flex w-[80vw] h-[90vh] flex-col items-start justify-center py-24 pt-32 md:pt-8'>
        <span
          className='font-extrabold text-xl mb-2'
          onMouseEnter={() => setOnHoverName(true)}
          onMouseLeave={() => setOnHoverName(false)}>
          곽태웅
        </span>
        <div className='flex items-center'>
          <span
            className='cursor-pointer'
            onClick={() => hrefTo('https://github.com/everyt')}
            onMouseEnter={() => setOnHoverGitLink(true)}
            onMouseLeave={() => setOnHoverGitLink(false)}>
            https://github.com/everyt
          </span>
        </div>
        <input id='toCopy' type='hidden' value='everytea.time@gmail.com' readOnly />
        <div className='flex items-center'>
          <motion.span
            id='email'
            className='cursor-pointer'
            onClick={copyEmail}
            animate={controls}
            variants={variants}
            onMouseEnter={() => setOnHoverEmail(true)}
            onMouseLeave={() => setOnHoverEmail(false)}>
            everytea.time@gmail.com
          </motion.span>
        </div>
        <div className='flex mt-6 justify-center'>
          {[
            { text: 'Javascript', href: 'https://en.wikipedia.org/wiki/JavaScript' },
            { text: 'Node.js', href: 'https://nodejs.org/' },
            { text: 'Typescript', href: 'https://www.typescriptlang.org/' },
            { text: 'Java', href: 'https://www.oracle.com/java/' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'My',
              textColor: 'text-sky-800',
              secondText: 'SQL',
              secondColor: 'text-orange-400',
              href: 'https://www.mysql.com/',
            },
            { text: 'MariaDB', href: 'https://mariadb.org/' },
            { text: 'FireBase', href: 'https://firebase.google.com/' },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            { text: 'React', textColor: 'text-sky-500', href: 'https://legacy.reactjs.org/' },
            { text: 'Next.js', href: 'https://nextjs.org/' },
            {
              text: 'Spring',
              secondText: '~Boot',
              secondColor: 'text-lime-700',
              href: 'https://spring.io/projects/spring-boot',
            },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'Premiere Pro',
              textColor: 'text-purple-950',
              adobe: 'bg-purple-300',
              href: 'https://www.adobe.com/products/premiere.html',
            },
            {
              text: 'After Effects',
              textColor: 'violet-950',
              adobe: 'bg-violet-300',
              href: 'https://www.adobe.com/products/aftereffects.html',
            },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[
            {
              text: 'Photoshop',
              textColor: 'text-sky-950',
              adobe: 'bg-sky-400',
              href: 'https://www.adobe.com/products/photoshop.html',
            },
            {
              text: 'Illustrator',
              textColor: 'text-orange-950',
              adobe: 'bg-orange-400',
              href: 'https://www.adobe.com/products/illustrator.html',
            },
          ].map((obj) => getButton(obj))}
        </div>
        <div className='flex justify-center'>
          {[{ text: 'Blender', textColor: 'text-sky-700', href: 'https://www.blender.org/' }].map((obj) =>
            getButton(obj),
          )}
        </div>
      </main>
    </>
  );
}
