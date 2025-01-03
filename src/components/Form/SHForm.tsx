"use client"
import React, { ReactNode } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface FormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends FormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function SHForm({ children, resolver, defaultValues, onSubmit }: IProps) {
    const formConfig: FormConfig= {};

    if (!!defaultValues) {
      formConfig["defaultValues"] = defaultValues;
    }
  
    if (!!resolver) {
      formConfig["resolver"] = resolver;
    }
  
    const methods = useForm(formConfig);
  
    const submitHandler = methods.handleSubmit;
  
    return (
      <FormProvider {...methods}>
        <form onSubmit={submitHandler(onSubmit)}>{children}</form>
      </FormProvider>
    );
  }