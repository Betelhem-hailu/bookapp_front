/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Button = ({ children, variant, size = "default", ...props }) => {
  // Define styles based on size
  const sizeStyles = {
    small: css`
      width: 70px;
      height: 30px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.875rem;
      border-radius: 8px;
    `,
    large: css`
      width: 100%;
      height: 30px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.875rem;
      border-radius: 8px;

      @media (min-width: 640px) {
        height: 60px;
        font-size: 1.125rem;
        padding-left: 60px;
        padding-right: 60px;
      }
    `,
    "extra-large": css`
      width: 100%;
      height: 30px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.875rem;
      font-weight: bold;
      border-radius: 10px;

      @media (min-width: 640px) {
        height: 80px;
        font-size: 1.25rem;
        padding-left: 80px;
        padding-right: 80px;
      }
    `,
    default: css`
      width: 100%;
      height: 30px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.875rem;
      border-radius: 8px;

      @media (min-width: 640px) {
        height: 40px;
        font-size: 1rem;
        padding-left: 40px;
        padding-right: 40px;
      }
    `,
  };

  // Define styles based on variant
  const variantStyles = {
    primary: css`
      background-color: #00a9b7; /* teal */
      color: white;
      &:hover {
        background-color: #00a9b7;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.5);
      }
    `,
    secondary: css`
      background-color: #393E46; /* teal */
      color: white;
      &:hover {
        background-color: #393E46;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.5);
      }
    `,
    error: css`
      background-color: red;
      color: white;
      &:hover {
        background-color: red;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5);
      }
    `,
    default: css`
      background-color: #00a9b7; /* teal */
      color: white;
      &:hover {
        background-color: #00a9b7;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.5);
      }
    `,
  };

  // Combine the styles
  const buttonStyle = css`
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px; 
    cursor: pointer;
    gap: 0.75rem;
    border: none;
    font-family: 'Bebas Neue', sans-serif;
    
    ${sizeStyles[size]};
    ${variantStyles[variant || "default"]};
  `;

  return (
    <button css={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
