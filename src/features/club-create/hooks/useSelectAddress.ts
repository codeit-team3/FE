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

    if (name === 'meetingType') {
      if (value === 'ONLINE') {
        setValue(name, value, { shouldValidate: true });
        setValue('city', undefined, { shouldValidate: true });
        setValue('town', undefined, { shouldValidate: true });
        setValue('address', undefined, { shouldValidate: true });
        setValue('addressDetail', undefined, { shouldValidate: true });
      } else if (value === 'OFFLINE') {
        new window.daum.Postcode({
          oncomplete: function (data: any) {
            if (setValue) {
              setValue('city', data.sigungu, { shouldValidate: true });
              setValue('town', data.bname, { shouldValidate: true });
              setValue('address', data.jibunAddress || data.autoJibunAddress, {
                shouldValidate: true,
              });
              setValue(name, value, { shouldValidate: true });
            }
          },
        }).open();
      }
    } else {
      setValue(name, value, { shouldValidate: true });
    }
  };

  return { handleRadioChange };
};
