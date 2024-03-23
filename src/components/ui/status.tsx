import {cva} from 'class-variance-authority';
import {cn} from '@/lib/utils';

interface StatusProps {
  variant: 'requested' | 'pending' | 'success';
  className?: string;
}

const statusVariants = cva(
  'py-[0.3rem] px-[0.8rem] text-[0.75rem] rounded-[4px]',
  {
    variants: {
      variant: {
        requested: 'bg-[#1E427D1A] text-[#1E427D]',
        pending: 'bg-[#FFA5001A] text-[#FFA500]',
        success: 'bg-[#10B9811A] text-[#10B981]',
      },
    },
  }
);

const Status = ({variant, className}: StatusProps) => {
  return (
    <div className={cn(statusVariants({variant, className}))}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)}
    </div>
  );
};

export default Status;
