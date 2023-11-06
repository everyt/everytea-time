'use client';

import Image from 'next/image';
import SlideShow from '../common/SlideShow';

type WorkInfoProps = {
  index: number;
  gitLink: string;
  deployLink?: string;
  workImg: string | string[];
  workName: string;
  workLore: React.ReactNode;
  children: React.ReactNode;
};

//TODO: 레코드판처럼 돌아가는 애니메이션 구현하기
// 드래그로 팅기거나 스크롤로 팅겨도 돌아가게끔
// 디스코드 참고

export default function WorkInfo({ index, gitLink, deployLink, workImg, workName, workLore, children }: WorkInfoProps) {
  const hyperlinkTo = (link: string) => {
    window.open(link);
  };

  const workName_firstChar = workName.charAt(0);
  const workName_Chars = workName.slice(1, workName.length);

  return (
    <div className='flex flex-col justify-start items-start p-3 rounded-xl bg-white shadow-xl sm:mx-2 md:mx-3 mb-12'>
      <div className='flex justify-between w-full mb-3'>
        <div className='font-bold text-xl'>
          <span>{index}. </span>
          <span className='text-emerald-500'>{workName_firstChar}</span>
          <span>{workName_Chars}</span>
        </div>
        <div className='flex flex-col items-end text-red-400 cursor-pointer font-extrabold'>
          {deployLink && (
            <div className='mr-3' onClick={() => hyperlinkTo(deployLink)}>
              Deployments
            </div>
          )}
          <div onClick={() => hyperlinkTo(gitLink)}>Github</div>
        </div>
      </div>
      <div>
        {typeof workImg === 'string' ? (
          <Image className='border-[1px]' src={workImg} alt={workName} width={1920} height={1080} />
        ) : (
          <SlideShow imgArr={workImg} width={1920} height={1080} />
        )}
      </div>
      <div className='mt-3'>{workLore}</div>
      <div className='font-extralight mt-3'>{children}</div>
    </div>
  );
}
