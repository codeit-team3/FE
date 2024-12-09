import { useEffect, useState } from 'react';

const useDropDownClose = (
  ref: React.RefObject<HTMLElement>,
  initialState: boolean,
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClickPage = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen((prev) => !prev);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClickPage);
    }

    return () => {
      window.removeEventListener('click', onClickPage);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen] as const;
};

export default useDropDownClose;
