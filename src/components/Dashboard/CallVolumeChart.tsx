import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CallVolumeChart = () => {
  const data = {
    labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    datasets: [
      {
        fill: true,
        label: 'Anrufvolumen',
        data: [420, 380, 450, 520, 480, 390, 450],
        borderColor: '#4500F9',
        backgroundColor: 'rgba(69, 0, 249, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#4500F9',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4500F9',
      },
      {
        fill: true,
        label: 'Erfolgsrate',
        data: [380, 350, 420, 480, 440, 360, 410],
        borderColor: '#CCAFFF',
        backgroundColor: 'rgba(204, 175, 255, 0.1)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#CCAFFF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#CCAFFF',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#CCAFFF',
          padding: 10,
          font: {
            size: 11
          }
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#CCAFFF',
          padding: 10,
          font: {
            size: 11
          }
        },
        border: {
          display: false
        }
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          color: '#CCAFFF',
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 11
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(31, 16, 59, 0.9)',
        titleColor: '#fff',
        bodyColor: '#CCAFFF',
        padding: 12,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}`;
          }
        }
      }
    },
  };

  return (
    <div className="h-[300px] w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default CallVolumeChart;