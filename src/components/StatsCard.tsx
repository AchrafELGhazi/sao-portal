import { Line, LineChart, ResponsiveContainer } from 'recharts';
import { CircularProgressBar } from './CircularProgressBar';

// Define the types for the props
interface StatsCardProps {
  title: string; // The title of the card
  value: string | number; // The value to display (could be a number or a string)
  trend?: { value: number }[]; // The trend data, an optional array of objects with value keys
  percentage?: number; // The percentage, an optional number
  color?: string; // The color, an optional string with default value "orange"
}

export const StatsCard = ({
  title,
  value,
  trend,
  percentage,
  color = 'orange',
}: StatsCardProps) => {
  return (
    <div className='relative group'>
      {/* Gradient background effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50' />

      <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 hover:border-white/20 transition-all duration-300'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h3 className='text-gray-400 text-sm mb-1'>{title}</h3>
            <p className='text-2xl font-bold text-white'>{value}</p>
          </div>
          {percentage && (
            <CircularProgressBar percentage={percentage} color={color} />
          )}
        </div>

        {trend && trend.length > 0 && (
          <div className='h-12 mt-4'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={trend}>
                <Line
                  type='monotone'
                  dataKey='value'
                  stroke={`var(--${color}-500)`}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};
