import Introduce from '@/components/view/IntroduceView';

export default function Home() {
  return (
    <main className='flex min-w-[95vw] min-h-[90vh] flex-col items-center justify-center p-3 sm:p-12 md:p-24 pt-28 pr-28'>
      <Introduce />
    </main>
  );
}
