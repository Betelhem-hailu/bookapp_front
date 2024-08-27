/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

function InputField({ type, placeholder, name, value, onChange, max }) {
  const inputStyle = css`
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    color: gray;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    ring-inset: true;
    ring: 1px solid lightgray;
    margin-bottom: 16px;
    placeholder {
      color: lightgray;
    }
    &:focus {
      ring: 1px solid gray;
      outline: none;
    }
    font-size: 0.875rem;
    line-height: 1.5rem;
  `;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      max={max}
      onChange={onChange}
      css={inputStyle}
    />
  );
}

export default InputField;
