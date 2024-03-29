import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Google from '@/assets/images/google.svg';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useMutation} from '@tanstack/react-query';
import {loginAsGuest} from '@/services/auth';
import {useNavigate} from 'react-router-dom';
import {toast} from 'sonner';

const schema = z.object({
  email: z.string().email(),
});

const defaultValues = {
  email: '',
};

type FormFields = z.infer<typeof schema>;

const LoginAsGuest = () => {
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
    mutationFn: loginAsGuest,
    onSuccess: () => {
      navigate(`/auth/verify-account?email=${encodeURIComponent(email)}`);
    },
    onError: error => {
      console.log(error);

      toast.error(
        // @ts-ignore
        error?.response?.data?.message || 'Couldnt login. Try again',
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
        <h1 className="text-[1.5rem] text-primary font-bold">Sign In</h1>
        <p className="text-[0.8rem] text-gray002">
          You will receive a 6-digit OTP
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
                placeholder="Email"
              />
            )}
          />
          <Button className="w-full" type="submit" loading={isPending}>
            Send OTP
          </Button>
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
    </React.Fragment>
  );
};

export default LoginAsGuest;
