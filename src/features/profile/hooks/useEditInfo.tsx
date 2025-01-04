import { useEditInfoMutation } from '@/api/auth/react-query';
import { EditInfoParams } from '../types';
import { toFormData } from '../utils/infoEditFormUtils';

export const useEditInfo = () => {
  const { mutateAsync: editInfo, isPending } = useEditInfoMutation();

  const onSubmit = async (data: EditInfoParams) => {
    const formData = toFormData(data);
    return await editInfo(formData);
  };
  return { onSubmit, isLoading: isPending };
};
