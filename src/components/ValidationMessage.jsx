import React from "react";
import { RiCloseFill } from "react-icons/ri";

const ValidationMessage = ({ setClose, email }) => {
  return (
    <div className="validationMessage slide-in-bck-center">
      <div>
        <RiCloseFill
          className="closeIcon"
          onClick={() => setClose(false)}
          size={30}
        />
      </div>
      <h3>Account Created!</h3>
      <p>Your account is associated with this email: {email}</p>
      <p>Check your email for the next steps.</p>
    </div>
  );
};

export default ValidationMessage;
