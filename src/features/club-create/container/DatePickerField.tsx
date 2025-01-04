'use client';

import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/datepicker.css';
import { useMemo } from 'react';
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
  targetDate?: Date;
}

function DatePickerContainer({
  control,
  name,
  label,
  error,
  placeholder,
  targetDate,
}: DatePickerContainerProps) {
  const minDate = useMemo(() => new Date(), []);
  const maxDate = useMemo(
    () =>
      name === 'endDate' && targetDate
        ? new Date(targetDate.getTime() - 24 * 60 * 60 * 1000)
        : undefined,
    [name, targetDate],
  );

  return (
    <CreateClubFormField label={label} error={error}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={field.onChange}
            minDate={minDate}
            maxDate={maxDate}
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
