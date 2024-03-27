import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Checkbox} from '@/components/ui/checkbox';

import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

const schema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email(),
    phoneNumber: z.string().max(10).min(10),
    pin: z.string().max(6).min(6),
    confirmPin: z.string().max(6).min(6),
  })
  .refine(data => data.pin === data.confirmPin, {
    message: "Pins don't match",
    path: ['confirmPin'],
  });

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  pin: '',
  confirmPin: '',
  checked: false,
};

type FormFields = z.infer<typeof schema>;

const CreateAccount = () => {
  const [termsChecked, setTermsChecked] = useState(false);
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

  const onSubmit: SubmitHandler<FormFields> = data => {};

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
            name="phoneNumber"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                errorMessage={errors.phoneNumber?.message}
                placeholder="Phone number"
              />
            )}
          />

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
            <Button className="w-full" disabled={!termsChecked || !isValid}>
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
