import React from 'react';

type A = React.InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'mt' | 'cl' | 'am' | 'jh' | 'cs' | 'ah';
} & Omit<A, 'size'>;

export const Input = (props: InputProps) => {
  return <input {...props} size={undefined} />;
};

export default Input;
