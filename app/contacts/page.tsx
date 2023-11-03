import FadeIn from '@/components/animation/FadeIn';
import Image from 'next/image';

export default function Contacts() {
  return (
    <main className='flex w-[95vw] h-[90vh] flex-col items-center justify-center p-24 pt-6 pr-28'>
      <FadeIn />
      <div className='absolute bg-red-200 h-[119.5vh] w-[50vw] z-[-10] border-x-8 border-emerald-200' />
      <div className='flex flex-col items-center border-2 rounded-[5rem] mt-16 pt-6 px-5 pb-4 shadow-xl bg-white z-[10]'>
        <Image className='py-6' src='/svg/EVT.svg' height={100} width={100} alt='' />
        <span className='font-extrabold text-xl'>EveryHongCha ( Everyt )</span>
        <span>everytea.time@gmail.com</span>
        <div className='cursor-pointer p-1'>Contact</div>
      </div>
      <div className='flex mt-3 justify-center z-[9]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/javascript.svg' height={20} width={20} alt='' />
          <span>Javascript ES6</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/typescript.svg' height={20} width={20} alt='' />
          <span>Typescript</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/oracle.svg' height={20} width={20} alt='' />
          <span>Java 11</span>
        </div>
      </div>
      <div className='flex justify-center z-[8]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/mysql.svg' height={20} width={20} alt='' />
          <span>Mysql</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/mariadb.svg' height={20} width={20} alt='' />
          <span>MariaDB</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/firebase.svg' height={20} width={20} alt='' />
          <span>Firebase</span>
        </div>
      </div>
      <div className='flex justify-center z-[7]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/nextdotjs.svg' height={20} width={20} alt='' />
          <span>Next.js</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/react.svg' height={20} width={20} alt='' />
          <span>React</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/svelte.svg' height={20} width={20} alt='' />
          <span>SvelteKit</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/springboot.svg' height={20} width={20} alt='' />
          <span>Spring Boot</span>
        </div>
      </div>
      <div className='flex justify-center z-[6]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/adobepremierepro.svg' height={20} width={20} alt='' />
          <span>Premiere Pro</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/adobeaftereffects.svg' height={20} width={20} alt='' />
          <span>After Effects</span>
        </div>
      </div>
      <div className='flex justify-center z-[5]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/adobephotoshop.svg' height={20} width={20} alt='' />
          <span>Photoshop</span>
        </div>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/adobeillustrator.svg' height={20} width={20} alt='' />
          <span>Illustrator</span>
        </div>
      </div>
      <div className='flex justify-center z-[4]'>
        <div className='flex items-center border-2 rounded-xl p-4 shadow-lg bg-white'>
          <Image className='mr-2' src='/stacks/blender.svg' height={20} width={20} alt='' />
          <span>Blender</span>
        </div>
      </div>
    </main>
  );
}
