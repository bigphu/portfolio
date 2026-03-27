import type { JSX, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
}

const Button = ({ 
  children, 
  loading = false,
  variant = "primary", 
  className = "", 
  ...props 
}: ButtonProps): JSX.Element => {
  
  return (
    <button 
      className={`generic-btn ${`btn-${variant}`} ${loading ? "is-loading" : ""} ${className}`.trim()} 
      disabled={loading || props.disabled}
      {...props}
    >
      <div className="btn-surface">
        {
          loading && (
            <span className="loading-dots" aria-hidden="true">
              <span>·</span>
              <span>·</span>
              <span>·</span>
              <span>·</span>
              <span>·</span>
            </span>
          )
        }
        <p className="btn-text">
          {children}
        </p>
      </div>
    </button>
  );
};

export default Button;