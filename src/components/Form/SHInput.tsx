
import React from "react";
import { Input } from "../UI/input";
import { useFormContext } from "react-hook-form";
import { Label } from "../UI/label";


const sizeValues ={
    sm:'w-1/2',
    md:'w-full',
    lg:'w-full'
}
export default function SHInput({
  size,
  label,
  name,
  placeholder
}: {
  size: 'sm' | 'md' | 'lg';
  name: string;
  label: string;
  placeholder:string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors,"errors")
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input className={sizeValues[size] as string} {...register(name)} type={name} id={name} placeholder={placeholder} />
    </div>
  );
}
