'use client';

import DatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';
import { ko } from 'date-fns/locale';
import { BookClubForm } from '../types';
import {
  CreateClubFormField,
  InputField,
} from '@/features/club-create/components';

interface DatePickerContainerProps {
  control: Control<BookClubForm>;
  name: 'targetDate' | 'endDate';
  label: string;
  error?: string;
  placeholder: string;
}

function DatePickerContainer({
  control,
  name,
  label,
  error,
  placeholder,
}: DatePickerContainerProps) {
  return (
    <CreateClubFormField label={label} error={error}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={field.onChange}
            showTimeSelect
            timeIntervals={10}
            dateFormat="yyyy-MM-dd a HH:mm"
            timeFormat="HH:mm"
            locale={ko}
            showTimeSelectOnly={false}
            timeCaption="시간"
            placeholderText={placeholder}
            customInput={<InputField />}
          />
        )}
      />
    </CreateClubFormField>
  );
}

export default DatePickerContainer;
