import { BookClubForm } from '@/features/club-create/types';
import { UseFormSetValue } from 'react-hook-form';

interface UseSelectAddressProps {
  setValue?: UseFormSetValue<BookClubForm>;
  name: keyof BookClubForm;
}

export const useSelectAddress = ({ setValue, name }: UseSelectAddressProps) => {
  const handleRadioChange = (value: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (!setValue) return;

    setValue(name, value);

    if (value === 'ONLINE') {
      setValue('city', undefined);
      setValue('town', undefined);
    }

    if (value === 'OFFLINE') {
      new window.daum.Postcode({
        oncomplete: function (data: any) {
          if (setValue) {
            setValue('city', data.sigungu);
            setValue('town', data.bname);
          }
        },
      }).open();
    }
  };

  return { handleRadioChange };
};
