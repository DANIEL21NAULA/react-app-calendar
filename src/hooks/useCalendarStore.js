import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: LLEGAR AL BACKEND
    // TODO OK
    // eslint-disable-next-line no-underscore-dangle
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const starDeletingEvent = () => {
    // TODO: llegar al backend
    dispatch(onDeleteEvent());
  };

  return {
    //* propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //* Metodos
    setActiveEvent,
    startSavingEvent,
    starDeletingEvent,
  };
};
