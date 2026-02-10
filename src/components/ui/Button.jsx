// components/ui/Button.jsx
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Button = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  isLoading = false,
  disabled = false,
  ...props
}) => {
  // Estilos base
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-[var(--radius)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default-400 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variantes usando tus colores CSS
  const variants = {
    default: 'bg-default-500 text-white hover:bg-default-600 active:bg-default-700',
    outline: 'border border-default-300 text-default-700 bg-transparent hover:bg-default-50 active:bg-default-100',
    ghost: 'text-default-700 hover:bg-default-100 active:bg-default-200',
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  };
  
  // Tamaños
  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-3',
    xl: 'px-8 py-4 text-xl gap-4',
  };
  
  // Tamaños de icono
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
  };

  // Combinar clases manualmente
  const buttonClasses = [
    baseStyles,
    variants[variant] || variants.default,
    sizes[size] || sizes.md,
    className
  ].filter(Boolean).join(' ');

  const iconSizeClass = iconSizes[size] || iconSizes.md;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div 
            className={`${iconSizeClass} animate-spin-clockwise rounded-full border-2 border-current border-t-transparent`} 
          />
          Cargando...
        </div>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <div className={iconSizeClass}>
              {icon}
            </div>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <div className={iconSizeClass}>
              {icon}
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;