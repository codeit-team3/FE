import { Flip, toast, ToastContainer, ToastOptions } from 'react-toastify';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  transition: Flip,
};

export const showToast = ({ message, type }: ToastProps) => {
  toast[type](message, defaultOptions);
};

export const Toast = () => {
  return <ToastContainer />;
};
