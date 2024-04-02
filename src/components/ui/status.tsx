import {cva} from 'class-variance-authority';
import {cn} from '@/lib/utils';
import { CircleCheckBigIcon, CircleX, Clock4, Loader } from 'lucide-react';

interface StatusProps {
  variant: 'requested' | 'pending' | 'success' | 'rejected';
  className?: string;
}

const statusVariants = cva(
  'flex gap-2 py-[0.3rem] px-[0.8rem] text-[0.75rem] rounded-[4px] cursor-pointer ',
  {
    variants: {
      variant: {
        requested: 'bg-[#1E427D1A] text-[#1E427D]',
        pending: 'bg-[#FFA5001A] text-[#FFA500]',
        success: 'bg-[#10B9811A] text-[#10B981]',
        rejected: 'bg-[#E74C3C1A] text-[#E74C3C]',
      },
    },
  }
);

const Status = ({variant, className}: StatusProps) => {
  return (
    <div className={cn(statusVariants({variant, className}))}>
      { variant.charAt(0).toUpperCase() + variant.slice(1) }
      {
        variant === 'pending' && 
      <Loader className=" h-4 w-4 animate-spin" />
      }
      {
        variant === 'requested' && 
      <Clock4 className="h-4 w-4 " />
      }
      {
        variant === 'rejected' && 
      <CircleX className="h-4 w-4 " />
      }
      {
        variant === 'success' && 
      <CircleCheckBigIcon className="h-4 w-4 " />
      }
    </div>
  );
};

export default Status;
