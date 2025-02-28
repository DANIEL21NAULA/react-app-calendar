import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {
  const { handleOpenDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const handleClicNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Daniel',
      },
    });

    handleOpenDateModal();
  };

  return (
    <button
      type="button"
      className="btn btn-primary fab"
      onClick={handleClicNew}
    >
      <i className="fas fa-plus" />
    </button>
  );
};
