import dynamic from 'next/dynamic';
const WorkSkeleton = dynamic(() => import('../work/WorkSkeleton'), { ssr: false });
import { memo } from 'react';

function WorkSkeletonView() {
  return (
    <>
      <div className='flex min-h-[90vh] flex-col items-baseline content-around justify-start xl:pl-20 lg:pl-16 md:pl-12 sm:pl-8 pl-4'>
        <div className='flex justify-start items-center mb-12 font-black text-3xl md:text-4xl lg:text-5xl'>
          <div className='flex items-center'>
            <div className='whitespace-pre-wrap'>
              <span className='text-red-400'>프</span>
              <span className='tracking-tight mr-[1.95rem]'>로젝트 리스트</span>
              <span>↓</span>
            </div>
          </div>
        </div>
        <WorkSkeleton />
        <WorkSkeleton />
      </div>
      <div className='flex min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-24 lg:pr-20 md:pr-16 sm:pr-8 pr-4 mt-32'>
        <div className='flex justify-start items-center font-black text-3xl md:text-4xl lg:text-5xl mb-32'>
          <div className='whitespace-pre-wrap'>
            <span>→↓</span>
          </div>
        </div>
        <WorkSkeleton />
        <WorkSkeleton />
      </div>
    </>
  );
}

export default memo(WorkSkeletonView);
