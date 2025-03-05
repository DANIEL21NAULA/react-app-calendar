import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Daniel',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      // eslint-disable-next-line no-param-reassign
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.events = state.events.map((event) => {
        // eslint-disable-next-line no-underscore-dangle
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        // eslint-disable-next-line no-underscore-dangle, no-param-reassign
        state.events = state.events.filter((event) => event._id !== state.activeEvent._id);
        // eslint-disable-next-line no-param-reassign
        state.activeEvent = null;
      }
    },
  },
});

export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
} = calendarSlice.actions;
