import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {
  const { starDeletingEvent } = useCalendarStore();

  const handleClicDelete = () => {
    starDeletingEvent();
  };

  return (
    <button
      type="button"
      className="btn btn-danger fab-danger"
      onClick={handleClicDelete}
    >
      <i className="fas fa-trash-alt" />
    </button>
  );
};
