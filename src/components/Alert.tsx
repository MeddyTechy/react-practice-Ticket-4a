import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

// created from ES7+ extension using "rafce" = react Arrow Function Component Export" ...?
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
