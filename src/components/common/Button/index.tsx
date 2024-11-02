import React from 'react';
import './index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'text';
}

const Button = ({
  children,
  variant = 'contained',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button className={`button ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
