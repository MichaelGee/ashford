import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import Google from '@/assets/images/google.svg';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import queryString from 'query-string';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {toast} from 'sonner';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import {formatTime} from '@/lib/utils';
import {forgotPinOTPEP, verifyGuestOTPEP} from '@/services/auth';
import {useNavigate} from 'react-router-dom';
import {z} from 'zod';
import {useUser} from '@/hooks/useUser';

const schema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

const defaultValues = {
  pin: '',
};

const VerifyAccount = () => {
  const [seconds, setSeconds] = useState(4 * 60); // Adjust for 4 minutes (4 minutes * 60 seconds/minute)
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email as string; // Cast queryParams.email to string
  const navigate = useNavigate();
  const {handleGuestLogin} = useUser();

  useEffect(() => {
    let intervalId = null;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60); // Calculate minutes from remaining seconds
  const remainingSeconds = seconds % 60; // Calculate remaining seconds within the current minute
  // Function to format time with leading zeros
  const formatTime = time => String(time).padStart(2, '0');

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: verifyGuestOTPEP,

    onSuccess: data => {
      toast.success('OTP verified successful');
      navigate(`/`);
    },
    onError: error => {
      console.log(error);
      toast.error('Something went wrong. Try again');
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const {pin} = data;
    try {
      const response = await mutateAsync({
        pin: pin,
        email,
      });
      handleGuestLogin(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Enter OTP</h1>
        <p className="text-[0.8rem] text-gray002">
          Enter 6-digit OTP sent to you
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-[65vh]"
        >
          <div className="flex flex-col gap-space200 ">
            <FormField
              control={form.control}
              name="pin"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit" loading={isPending}>
              Submit
            </Button>
            <p className="text-[0.8rem] leading-4 text-gray002">
              Resend code in
              <span className="text-blue001">
                {' '}
                {formatTime(minutes)}:{formatTime(remainingSeconds)}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-space100">
            <Button className="w-fit bg-transparent" variant="outline">
              <img src={Google} className="mr-3" /> Sign in with Google
            </Button>
            <span className="text-[0.8rem]">
              New user? <a>Sign up</a>
            </span>
          </div>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default VerifyAccount;
