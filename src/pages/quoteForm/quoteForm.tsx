import React from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {useLocation, useNavigate} from 'react-router-dom';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useMutation} from '@tanstack/react-query';
import {createQuoteEP} from '@/services/user';
import {toast} from 'sonner';

const schema = z.object({
  packageId: z.string(),
  countryOfDeparture: z.string(),
  finalDeliveryAddress: z.string(),
  recipientFullName: z.string(),
  recipientContactNumber: z.string().max(11).min(11),
  weightOfPackage: z.string(),
  packageDescription: z.string(),
  specialInstructions: z.string(),
});

const defaultValues = {
  packageId: '',
  countryOfDeparture: '',
  finalDeliveryAddress: '',
  recipientFullName: '',
  recipientContactNumber: '',
  weightOfPackage: '',
  packageDescription: '',
  specialInstructions: '',
};

type FormFields = z.infer<typeof schema>;

const QuoteForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dataFromSource = location.state;

  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const {mutateAsync, isPending} = useMutation({
    mutationFn: createQuoteEP,
    onSuccess: () => {
      toast.success('Order quote created successfully');
      navigate('/quote/quote-submitted', {state: dataFromSource});
    },
    onError: error => {
      console.log(error);
      toast.error('Something went wrong. Try again');
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    const {
      countryOfDeparture,
      finalDeliveryAddress,
      recipientFullName,
      recipientContactNumber,
      weightOfPackage,
      packageDescription,
      specialInstructions,
    } = data;
    try {
      await mutateAsync({
        packageId: dataFromSource?.packageId,
        countryOfDeparture,
        finalDeliveryAddress,
        recipientFullName,
        recipientContactNumber,
        weightOfPackage,
        packageDescription,
        specialInstructions,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-[1.25rem] text-primary font-bold text-center">
        {dataFromSource.tag}
      </h1>
      <p className="text-[0.8rem] mt-space200 mb-space600">
        We are glad that you have chosen us. Kindly fill this form and we will
        get back to you shortly.
      </p>

      <form
        className=" h-[65vh] flex flex-col justify-between "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-between gap-space200">
          <Controller
            name="countryOfDeparture"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                placeholder="Country of departure"
                errorMessage={errors.countryOfDeparture?.message}
              />
            )}
          />
          <Controller
            name="finalDeliveryAddress"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                placeholder="Final delivery address"
                errorMessage={errors.finalDeliveryAddress?.message}
              />
            )}
          />
          <div className="flex gap-space200">
            <Controller
              name="recipientFullName"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  placeholder="Recipient’s full name"
                  errorMessage={errors.recipientFullName?.message}
                />
              )}
            />
            <Controller
              name="recipientContactNumber"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  placeholder="Recipient’s contact number"
                  errorMessage={errors.recipientContactNumber?.message}
                />
              )}
            />
          </div>
          <Controller
            name="weightOfPackage"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                placeholder="Weight of package"
                errorMessage={errors.weightOfPackage?.message}
              />
            )}
          />
          <Controller
            name="packageDescription"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                placeholder="Package Description (Fragile, Perishable, etc.)"
                errorMessage={errors.packageDescription?.message}
              />
            )}
          />
          <Controller
            name="specialInstructions"
            control={control}
            render={({field}) => (
              <Input
                {...field}
                placeholder="Special Instructions (Optional)"
                errorMessage={errors.specialInstructions?.message}
              />
            )}
          />
        </div>

        <div>
          <div className="flex mt-4 flex-col text-center gap-space100">
            <Button
              className="w-full"
              disabled={!isValid}
              type="submit"
              loading={isPending}
            >
              Submit
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                navigate('/');
              }}
            >
              Cancel Request
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default QuoteForm;
