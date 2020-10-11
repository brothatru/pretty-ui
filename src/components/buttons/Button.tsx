import React from 'react';
import style from './Button.module.scss';

export type ButtonProps = {
  children?: React.ReactNode;
  color?: 'default' | 'blue' | 'green' | 'yellow' | 'orange' | 'red';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'mt' | 'cl' | 'am' | 'jh' | 'cs' | 'ah';
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  let classnames = [style.btn];
  props.color && classnames.push(style[props.color]);
  props.size && classnames.push(style[props.size]);
  props.variant && classnames.push(style[props.variant]);

  return (
    <button {...props} className={classnames.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
