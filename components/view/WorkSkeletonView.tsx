import dynamic from 'next/dynamic';
const WorkSkeleton = dynamic(() => import('../WorkSkeleton'), { ssr: false });

export default function WorkSkeletonView() {
  return (
    <>
      <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pl-20 lg:pl-16 md:pl-12 sm:pl-8 pl-4'>
        <div className='flex justify-start items-center mb-12 font-black text-3xl md:text-4xl lg:text-5xl'>
          <div className='whitespace-pre-wrap'>
            <span className='text-red-400'>프</span>
            <span className='tracking-tight'>로젝트 리스트 ↓</span>
          </div>
        </div>
        <WorkSkeleton />
        <WorkSkeleton />
      </div>
      <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-24 lg:pr-20 md:pr-16 sm:pr-8 pr-4 mt-60'>
        <div className='flex justify-start items-center mb-12 font-black text-3xl md:text-4xl lg:text-5xl'>
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
