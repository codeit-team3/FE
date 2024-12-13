import React from 'react';
import Button, { ButtonProps } from '../button/Button';
import { IcClose } from '../../../public/icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  onConfirm: () => void;
  cancelText: string;
  confirmText: string;
  cancelButtonProps?: Partial<ButtonProps>;
  confirmButtonProps?: Partial<ButtonProps>;
}

function Modal({
  isOpen,
  onClose,
  children,
  title,
  onConfirm,
  cancelText,
  confirmText,
  cancelButtonProps,
  confirmButtonProps,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />

      <div className="relative z-50 mx-4 max-h-[80vh] min-h-[200px] w-full min-w-[336px] max-w-[520px] overflow-y-auto rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer hover:opacity-70"
            aria-label="닫기"
          >
            <IcClose />
          </button>
        </div>

        <div className="mb-6">{children}</div>

        <div className="flex justify-between gap-2">
          <Button
            text={cancelText}
            size="modal"
            fillType="lightSolid"
            themeColor="gray-normal-03"
            onClick={onClose}
            className="w-full"
            {...cancelButtonProps}
          />
          <Button
            text={confirmText}
            size="modal"
            fillType="lightSolid"
            themeColor="green-light-03"
            onClick={onConfirm}
            className="w-full"
            {...confirmButtonProps}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
