import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string(),
  surname: z.string(),
  address: z.string(),
  message: z.string(),
});

const defaultValues = {
  firstName: "",
  surname: "",
  address: "",
  message:"",
};

type FormFields = z.infer<typeof schema>;

export default function ContactUs() {

   const {
     control,
     handleSubmit,
     formState: {errors},
   } = useForm<FormFields>({
     mode: 'onChange',
     defaultValues,
     resolver: zodResolver(schema),
   });

  //  const {mutateAsync, isPending} = useMutation({
  //    mutationFn: ,
  //    onSuccess: () => {
  //    },
  //    onError: error => {
  //      console.log(error);

  //      toast.error(
  //        // @ts-ignore
  //        error?.response?.data?.message || 'Couldnt send mail. Try again',
  //        {
  //          position: 'top-center',
  //        }
  //      );
  //    },
  //  });
  
  const onSubmit: SubmitHandler<FormFields> = async data => {
    // const {firstname, surname, message, address} = data;
    // try {
    //   const response = await mutateAsync({
    //     email,
    //     pin,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className=" my-4">
      <div className="mb-[2.1875rem] ">
        <h1 className="text-primary text-[1.125rem] text-center font-medium leading-[28px] mb-4 ">
          Contact Us
        </h1>
        <p className="text-sm leading-[20px]">
          Asford provides co-ordinated and affordable customer services. Our
          model allows us to monitor and deliver your products wherever you want
          across the globe.
        </p>
      </div>
      <div className="bg-[#B3DCEA] p-2 text-white h-screen ">
        <div className="bg-primary p-4 h-full flex flex-col gap-2  ">
          <div>
            <h1 className=" text-sm  font-medium ">Head Office:</h1>
            <p className="text-xs">
              16, Jacob Folajimi Street, Abeokuta, Ogun state, Nigeria.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className=" text-sm  font-medium ">Tel: </h1>
            <p className="text-xs">+234 819 003 9889, +234 907 001 0001</p>
          </div>
          <div className="flex gap-2 items-center ">
            <h1 className=" text-sm  font-medium ">Email:</h1>
            <p className="text-xs">hello@ashford.com</p>
          </div>
          <div className="bg-white py-4 px-2 mt-6 rounded-lg ">
            <h1 className="text-center text-primary font-medium ">
              Contact Us
            </h1>
            <form
              className="flex flex-col mt-space200 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-space200">
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
                  name="surname"
                  control={control}
                  render={({field}) => (
                    <Input
                      {...field}
                      errorMessage={errors.surname?.message}
                      placeholder="Surname"
                    />
                  )}
                />
                <Controller
                  name="address"
                  control={control}
                  render={({field}) => (
                    <Input
                      {...field}
                      errorMessage={errors.address?.message}
                      placeholder="Address"
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  render={({field}) => (
                    <Input
                      {...field}
                      errorMessage={errors.message?.message}
                      placeholder="Message"
                    />
                  )}
                />
                \
              </div>
              <div className="flex flex-col text-center gap-space100">
                <Button
                  className="w-full"
                  type="submit"
                  // loading={ isPending }
                >
                  Submit
                </Button>

               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
