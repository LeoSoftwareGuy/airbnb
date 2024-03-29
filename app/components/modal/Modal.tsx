"use client";

import { IoMdClose } from "react-icons/io";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = () => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    // we need to show animation
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = () => {
    if (disabled) {
      return;
    }
    onSubmit();
  };

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(true);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  // first div is basically overlay for the entire screen
  return (
    <>
      <div
        className="
    flex
    justify-center
    items-center
    overflow-x-hidden
    overflow-y-auto
    fixed
    inset-0
    z-50
    outline-none
    focus:outline-none
    bg-neutral-800/70"
      >
        <div
          className="relative
        my-6
        mx-auto
        w-full
        md:w-4/6
        lg:w-3/6
        xl:w-2/5
        h-fullF
        lg:h-auto
        md:h-auto
       "
        >
          {/*Content */}
          <div
            className={`
          translate
          duration-300
          h-full
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col translate h-full  w-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative   bg-white outline-none focus:outline-none">
              {/* HEADER */}
              <div
                className="
              p-6
              relative
              flex
              items-center
              justify-center
              border-b-[1px]
              rounded-t
              "
              >
                <button
                  onClick={handleClose}
                  className="p-1 absolute left-9 transition border-0 hover:opacity-70"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*  Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
