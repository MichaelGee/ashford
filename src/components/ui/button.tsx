import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import {Loader2} from 'lucide-react';

import {cn} from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow ',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground text-primary',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-[1.4rem]',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Handle the disabled state based on both the disabled and loading props
    const isDisabled = loading || disabled;

    return (
      <Comp
        className={cn(buttonVariants({variant, size}), {
          'opacity-75': loading,
          'cursor-not-allowed': isDisabled,
        })}
        ref={ref}
        disabled={isDisabled} // Disable the button if it's loading or explicitly disabled
        {...props}
      >
        {loading ? (
          <span className="flex items-center">
            <Loader2 className="animate-spin w-5 h-5" />{' '}
          </span>
        ) : (
          props.children
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export {Button, buttonVariants};
