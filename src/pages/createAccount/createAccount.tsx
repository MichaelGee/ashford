import React, {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useMutation} from '@tanstack/react-query';
import {registerEP} from '@/services/auth';
import {toast} from 'sonner';
import {useNavigate} from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {error} from 'console';

const schema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().max(13, 'Phone number must be 13 digits').min(13, 'Phone number must be 13 digits'),
    pin: z.string().min(3, 'Pin must be more than 3 digits'),
    confirmPin: z.string().min(6, 'Pin must be more than 3 digits'),
  })
  .refine(data => data.pin === data.confirmPin, {
    message: "Pins don't match",
    path: ['confirmPin'],
  });

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  pin: '',
  confirmPin: '',
  checked: false,
};

type FormFields = z.infer<typeof schema>;

const CreateAccount = () => {
  const navigate = useNavigate();
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleCheckboxChange = (checked: boolean) => {
    setTermsChecked(checked);
  };

  const {mutateAsync, isPending} = useMutation({
    mutationFn: registerEP,
    onSuccess: () => {
      toast.success('Account creation sucessful');
      navigate('/');
    },
    onError: error => {
      console.log(error);
      toast.error('Something went wrong. Try again');
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const {firstName, lastName, email, phone, pin, confirmPin} = data;
    try {
      await mutateAsync({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email,
        phone,
        pin,
        confirmPin,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">
          Create your Ashford Account
        </h1>
        <p className="text-[0.8rem] text-gray002">
          Join the league of happy people using Ashford for their deliveries
        </p>
      </div>
      <form
        className=" h-[65vh] flex flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-between gap-space200">
          <div className="flex gap-space200">
            <Controller
              name="firstName"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  errorMessage={errors.firstName?.message}
                  placeholder="First Name"
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  errorMessage={errors.lastName?.message}
                  placeholder="Last Name"
                />
              )}
            />
          </div>
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
            name="phone"
            control={control}
            render={ ({ field }) => (              
              <PhoneInput
                {...field}
                country={'ng'}
                placeholder="Phone number (e.g 8046464646)"
                inputStyle={ { width: '100%', height: '', paddingTop: '1.2rem', paddingBottom: '1.2rem',   }}
              />
            )}
          />
          {errors.phone ? (
            <p className="text-xs text-red-500">{errors?.phone?.message}</p>
          ) : null}

          <Input placeholder="Name of company (Optional)" />
          <Controller
            name="pin"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.pin?.message}
                placeholder="Create a 6-digit pin"
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
                placeholder="Confirm pin"
              />
            )}
          />
        </div>
        <div>
          <div className="items-top flex space-x-2 mb-2">
            <Checkbox
              id="terms1"
              checked={termsChecked}
              onCheckedChange={handleCheckboxChange}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-[0.8rem] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-[0.8rem] leading-4 text-gray002">
                You acknowledge that you read, and agree to our{' '}
                <span className="text-blue001">terms and conditions</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center gap-space100">
            <Button
              className="w-full"
              disabled={!termsChecked || !isValid}
              type="submit"
              loading={isPending}
            >
              Submit
            </Button>
            <span className="text-[0.8rem]">
              Have an account already? <a href="/auth/login">Login</a>
            </span>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreateAccount;
