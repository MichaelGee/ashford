import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useMutation} from '@tanstack/react-query';
import { resetPinEP} from '@/services/auth';
import {toast} from 'sonner';
import {useNavigate} from 'react-router-dom';
import {useUser} from '@/hooks/useUser';
import queryString from 'query-string';

const schema = z
  .object({
    pin: z.string().max(6).min(6),
    confirmPin: z.string().max(6).min(6),
  })
  .refine(data => data.pin === data.confirmPin, {
    message: "Pins don't match",
    path: ['confirmPin'],
  });

const defaultValues = {
    pin: '',
    confirmPin: '',
};

type FormFields = z.infer<typeof schema>;

const ResetPin = () => {
     const queryParams = queryString.parse(location.search);
     const email = queryParams.email;
  const navigate = useNavigate();
  const {handleLogin} = useUser();

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
    mutationFn: resetPinEP,
    onSuccess: () => {
      navigate('/');
    },
    onError: error => {
      console.log(error);

      toast.error(
        // @ts-ignore
        error?.response?.data?.message || 'Couldnt reset. Try again',
        {
          position: 'top-center',
        }
      );
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const {pin, confirmPin} = data;
    try {
      const response = await mutateAsync({
        pin,
        confirmPin
      });
      handleLogin(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Reset Pin?</h1>
        <p className="text-[0.8rem] text-gray002">
          Please enter your new pin twice to ensure that they match.
        </p>
      </div>
      <form
        className="flex flex-col justify-between h-[65vh]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-space200">
          <Controller
            name="pin"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.pin?.message}
                placeholder="Enter your new pin"
              />
            )}
          />
          <Controller
            name="confirmPin"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.confirmPin?.message}
                placeholder="Re-enter your new pin"
              />
            )}
          />
        </div>
        <div className="flex flex-col text-center gap-space100">
          <Button className="w-full" type="submit" loading={isPending}>
            Reset Pin
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ResetPin;
