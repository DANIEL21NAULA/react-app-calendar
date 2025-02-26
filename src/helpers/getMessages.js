/* export const getMessages = (lenguage) => {
  switch (lenguage) {
    case 'es-ES':
      return {
        allDay: 'Todo el día',
        previous: '<',
        next: '>',
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        agenda: 'Agenda',
        date: 'Fecha',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'No hay eventos en este rango',
        showMore: (total) => `+ Ver más (${total})`,
      };
    default:
      return {
        allDay: 'All Today',
        previous: 'Back',
        next: 'Next',
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        agenda: 'Agenda',
        date: 'Date',
        time: 'Time',
        event: 'Event',
        noEventsInRange: 'No Events In Range',
        showMore: (total) => `+ Show More (${total})`,
      };
  }
}; */

export const getMessages = () => ({
  allDay: 'Todo el día',
  previous: '<',
  next: '>',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango',
  showMore: (total) => `+ Ver más (${total})`,
});
