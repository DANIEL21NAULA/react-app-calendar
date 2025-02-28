import { createRoot } from 'react-dom/client';
import './styles.css';
import { CalendarApp } from './CalendarApp';

/* createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarApp />
  </StrictMode>,
); */

createRoot(document.getElementById('root')).render(
  <CalendarApp />,
);
