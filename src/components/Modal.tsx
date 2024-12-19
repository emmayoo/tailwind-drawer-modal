import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

const Modal = ({ open, setOpen, title, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div
        className="relative w-auto max-w-full transform rounded-lg bg-white shadow-xl transition-transform duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col px-[49px] py-[52px]">
          <div className="flex items-center justify-between">
            <div className="tracking-custom text-gray-label text-2xl font-semibold">
              {title}
            </div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              <XMarkIcon className="size-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
