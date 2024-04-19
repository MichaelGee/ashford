import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import { forgotPinEP } from '@/services/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';
import {z} from 'zod';

const schema = z.object({
  email: z.string().email(),
});

const defaultValues = {
  email: '',
};

type FormFields = z.infer<typeof schema>;

function ForgotPin() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  let email = watch('email');

  const {mutateAsync, isPending} = useMutation({
    mutationFn: forgotPinEP,
    onSuccess: () => {
      navigate(`/auth/verify-details?email=${encodeURIComponent(email)}`);
    },
    onError: error => {
      console.log(error);

      toast.error(
        // @ts-ignore
        error?.response?.data?.message ||
          'The details you entered doesn’t match with any of our records.',
        {
          position: 'top-center',
        }
      );
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const {email} = data;
    try {
      await mutateAsync({
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Forgot Pin?</h1>
        <p className="text-[0.8rem] text-gray002">
          Don’t worry, it happens. Please enter the email or phone number
          associated with your account.
        </p>
      </div>

      <form
        className="flex flex-col justify-between h-[65vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-space200">
          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.email?.message}
                placeholder="Email or Phone number"
              />
            )}
          />
          <a className="text-[0.8rem] underline">Try another way</a>
        </div>
        <div className="flex flex-col text-center gap-space100">
          <Button className="w-full" type="submit" loading={isPending}>
            Reset Pin
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ForgotPin;
