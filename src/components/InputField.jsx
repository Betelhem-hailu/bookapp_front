/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

function InputField({ type, placeholder, name, value, onChange, max, options }) {
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

  const selectStyle = css`
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 8px 16px;
    color: gray;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    ring-inset: true;
    ring: 1px solid lightgray;
    margin-bottom: 16px;
    font-size: 0.875rem;
    line-height: 1.5rem;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='gray' d='M2 0L0 2h4zM2 5L0 3h4z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
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
      ) : type === "select" ? (
        <select name={name} value={value} onChange={onChange} css={selectStyle}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
        </select>
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
