import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  href,
  target = '_self',
}) => {
  const baseStyles = 'font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 inline-block';
  
  const variantStyles = {
    primary: 'bg-black dark:bg-white text-white dark:text-black hover:opacity-80 focus:ring-black dark:focus:ring-white',
    secondary: 'bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600 focus:ring-zinc-500',
    outline: 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:ring-black dark:focus:ring-white',
  };
  
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} no-underline text-inherit`;
  
  if (href) {
    return (
      <a href={href} target={target} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
