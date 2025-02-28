import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { AppRouter } from './router';
import { store } from './store';

export const CalendarApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </Provider>
);
