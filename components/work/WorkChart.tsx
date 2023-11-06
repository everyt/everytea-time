// components/MyLineChart.tsx
'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS components using ChartJS.register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, ArcElement);

const WorkChart = () => {
  return (
    <div className='absolute ml-[12.6rem]'>
      <Doughnut
        data={{
          labels: ['Jsp', 'SpringBoot', 'Javascript', 'Next.js', 'Node.js'],
          datasets: [
            {
              data: [1, 1, 6, 3, 1],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(171, 217, 86)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(98, 217, 128)',
              ],
            },
          ],
        }}
        options={{
          animation: {
            animateScale: true,
          },
          radius: '30%',
        }}
      />
    </div>
  );
};
export default WorkChart;
