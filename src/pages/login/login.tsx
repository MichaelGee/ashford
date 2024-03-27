import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useMutation} from '@tanstack/react-query';
import {loginEP} from '@/services/auth';
import {toast} from 'sonner';
import {useNavigate} from 'react-router-dom';

const schema = z.object({
  email: z.string().email(),
  pin: z.string().max(6).min(6),
});

const defaultValues = {
  email: '',
  pin: '',
};

type FormFields = z.infer<typeof schema>;

const Login = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: loginEP,
    onSuccess: data => {
      localStorage.setItem('accessToken', data?.data?.data?.accessToken);
      navigate('/');
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
    const {email, pin} = data;
    try {
      await mutateAsync({
        email,
        pin,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Welcome back</h1>
        <p className="text-[0.8rem] text-gray002">
          Login to your account to continue
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
          <Controller
            name="pin"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.pin?.message}
                placeholder="6-digit pin"
              />
            )}
          />
          <a className="text-[0.8rem]">Forgot pin?</a>
        </div>
        <div className="flex flex-col text-center gap-space100">
          <Button className="w-full" type="submit" loading={isPending}>
            Login
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => navigate('/auth/login-as-guest')}
          >
            Continue as Guest
          </Button>
          <span className="text-[0.8rem]">
            New user? <a href="/auth/create-account">Sign up</a>
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Login;
