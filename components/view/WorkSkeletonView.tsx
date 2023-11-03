import dynamic from 'next/dynamic';
const WorkSkeleton = dynamic(() => import('../WorkSkeleton'), { ssr: false });

export default function WorkSkeletonView() {
  return (
    <>
      <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pl-20 lg:pl-16 md:pl-12 sm:pl-8 pl-4'>
        <WorkSkeleton />
        <WorkSkeleton />
      </div>
      <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-24 lg:pr-20 md:pr-16 sm:pr-8 pr-4'>
        <WorkSkeleton />
        <WorkSkeleton />
      </div>
    </>
  );
}
