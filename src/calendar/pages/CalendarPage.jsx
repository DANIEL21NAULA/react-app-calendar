import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { CalendarEvent, CalendarModal, Navbar } from '..';
import { getEnvironments, localizer, getMessages } from '../../helpers';

const events = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Daniel',
  },
}];

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week');

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
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
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
    </>
  );
}
