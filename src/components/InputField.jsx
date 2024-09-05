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
    padding: 8px 16px;
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

  const textareaStyle = css`
    display: block;
    width: 100%;
    height: 100px; /* Adjust height as needed */
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    color: gray;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    ring-inset: true;
    ring: 1px solid lightgray;
    margin-bottom: 16px;
    resize: none;
    font-size: 0.875rem;
    line-height: 1.5rem;
    placeholder {
      color: lightgray;
    }
    &:focus {
      ring: 1px solid gray;
      outline: none;
    }
  `;

  const fileInputStyle = css`
    display: block;
    width: 100%;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    ring-inset: true;
    ring: 1px solid lightgray;
    margin-bottom: 16px;
    background-color: white;
    font-size: 0.875rem;
    line-height: 1.5rem;
    &:focus {
      ring: 1px solid gray;
      outline: none;
    }
  `;

  return (
    <>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          css={textareaStyle}
        />
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          onChange={onChange}
          css={fileInputStyle}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          max={max}
          onChange={onChange}
          css={inputStyle}
        />
      )}
    </>
  );
}

export default InputField;
