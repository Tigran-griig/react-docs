import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, onClose, open }) => {
  const modalRef = useRef();

  useEffect(() => {
    if(open) {
      modalRef.current?.focus()
    } else {
      modalRef.current?.blur()
    }
  }, [open])

  const onBlurHandler = () => {
    console.log("bluer")
  }

  const onFocusHandler = () => {
    console.log("focus")
  }

  return open ?
    createPortal(
      <div
        className='modal'
        ref={modalRef}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
        style={{
          width: "250px",
          height: "250px",
          background: "gray",
        }}
      >
        <button onClick={onClose} className='modal__close'>&times;</button>
        {children}
      </div>,
      document.body)
    : null
}