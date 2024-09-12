/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Button from "./Button";

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const modalContainer = css`
  background-color: white;
  border-radius: 8px;
  padding: 14px 16px;
  text-align: center;
`;

const modalText = css`
  margin-bottom: 16px;
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: bold;
`;

const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;

const DeleteConfirmationModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div css={modalOverlay}>
      <div css={modalContainer}>
        <p css={modalText}>
          Are you sure you want to delete this item?
        </p>
        <div css={buttonContainer}>
          <Button variant="default" size="small" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="error" size="small" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
