// components/MyLineChart.tsx
'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { memo } from 'react';

// Register ChartJS components using ChartJS.register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, ArcElement);

const WorkChart = () => {
  return (
    <div className='absolute xl:ml-[12.6rem] lg:ml-[10.08rem] md:ml-[7.56rem] sm:ml-[5.04rem] ml-[5.15rem]'>
      <Doughnut
        data={{
          labels: ['Jsp', 'SpringBoot', 'Javascript only', 'Next.js(React)', 'Node.js'],
          datasets: [
            {
              data: [1, 1, 1, 3, 1],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(171, 217, 86)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(98, 217, 128)',
              ],
              borderWidth: 3,
              borderColor: '#F0F0EE',
              borderAlign: 'inner',
            },
          ],
        }}
        options={{
          animation: {
            animateScale: true,
          },
          radius: '25%',
          cutout: '60%',
        }}
      />
    </div>
  );
};
export default memo(WorkChart);
