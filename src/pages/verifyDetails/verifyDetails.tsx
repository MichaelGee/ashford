import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import queryString from 'query-string';
import {useNavigate} from 'react-router-dom';
import {z} from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {toast} from 'sonner';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import {formatTime} from '@/lib/utils';
import {forgotPinOTPEP} from '@/services/auth';

const schema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

const defaultValues = {
  pin: '',
};

const VerifyDetails = () => {
  const [seconds, setSeconds] = useState(4 * 60); // Adjust for 4 minutes (4 minutes * 60 seconds/minute)
  const queryParams = queryString.parse(location.search);
  const email = queryParams.email as string; // Cast queryParams.email to string
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId = null;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60); // Calculate minutes from remaining seconds
  const remainingSeconds = seconds % 60; // Calculate remaining seconds within the current minute

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: forgotPinOTPEP,

    onSuccess: data => {
      const dataToSend = {
        token: data?.data?.data?.token,
      };
      toast.success('OTP verified successful');
      navigate(`/auth/reset-pin`, {state: dataToSend});
    },
    onError: error => {
      console.log(error);
      toast.error('Something went wrong. Try again');
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const {pin} = data;
    try {
      await mutateAsync({
        otp: pin,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">
          Verify your details
        </h1>
        <p className="text-[0.8rem] text-gray002">
          Kindly enter the 6-digit pin we sent you, and reset your pin.
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

            <p className="text-[0.8rem] leading-4 text-gray002">
              Resend code in
              <span className="text-blue001">
                {' '}
                {formatTime(minutes)}:{formatTime(remainingSeconds)}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-space100">
            <Button className="w-full" type="submit" loading={isPending}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default VerifyDetails;
