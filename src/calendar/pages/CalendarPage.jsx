import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  Navbar,
} from '..';
import { getEnvironments, localizer, getMessages } from '../../helpers';
import { useUiStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {
  const { handleOpenDateModal } = useUiStore();
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');
  const { events, setActiveEvent } = useCalendarStore();

  const {
    VITE_LENGUAGE,
  } = getEnvironments();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return {
      style,
    };
  };

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setlastView(event);
  };

  const onDoubleClick = (event) => {
    handleOpenDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture={VITE_LENGUAGE}
        localizer={localizer}
        events={events}
        startAccessor="start"
        defaultView={lastView}
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessages(VITE_LENGUAGE)}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
    </>
  );
};
