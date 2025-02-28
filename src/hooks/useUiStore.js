import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store';

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const handleOpenDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const handleCloseDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toogleDateModal = () => {
    // eslint-disable-next-line no-unused-expressions
    !isDateModalOpen
      ? handleOpenDateModal()
      : handleCloseDateModal();
  };

  return {
    //* Propiedades
    isDateModalOpen,
    //* Metodos
    handleOpenDateModal,
    handleCloseDateModal,
    toogleDateModal,
  };
};
