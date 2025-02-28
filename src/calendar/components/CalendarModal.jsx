
import { useMemo, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import Swal from 'sweetalert2';

import 'react-datepicker/dist/react-datepicker.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import esES from 'date-fns/locale/es';
import enUS from 'date-fns/locale/en-US';
import { getEnvironments } from '../../helpers';

const {
  VITE_LENGUAGE,
} = getEnvironments();

switch (VITE_LENGUAGE) {
  case 'es-ES':
    registerLocale('es-ES', esES);
    break;

  default:
    registerLocale('en-US', enUS);
    break;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formSubmited, setFormSubmited] = useState(false);
  const [formValues, setFormValues] = useState({
    title: 'Daniel',
    notes: 'Naula',
    start: new Date(),
    end: addHours(new Date(), 2),
  });
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error');
      return;
    }

    if (formValues.title.trim().length <= 0) {
      Swal.fire('Titulo incorrecto', 'Revisar el titulo de la actividad', 'error');
      return;
    } 
    // TODO:
    // Cerrar Modal
    // Remover errores en pantalla
    console.log(formValues);
  };

  const titleClass = useMemo(() => {
    if (!formSubmited) return '';

    return formValues.title.trim().length > 0
      ? 'is-valid'
      : 'is-invalid';
  }, [formValues.title, formSubmited]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form
        className="container"
        onSubmit={onSubmit}
      >
        <div className="form-group mb-2">
          <label
            className="form-label"
            htmlFor="fecha-inicio"
          >
            Fecha y hora inicio
          </label>
          <DatePicker
            selected={formValues.start}
            onChange={(event) => onDateChanged(event, 'start')}
            className="form-control d-block"
            id="fecha-inicio"
            dateFormat="Pp"
            showTimeSelect
            locale={VITE_LENGUAGE}
            timeCaption="Hora"
          />
        </div>
        <div className="form-group mb-2">
          <label
            className="form-label"
            htmlFor="fecha-fin"
          >
            Fecha y hora fin
          </label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => onDateChanged(event, 'end')}
            className="form-control d-block"
            id="fecha-inicio"
            dateFormat="Pp"
            showTimeSelect
            locale={VITE_LENGUAGE}
            timeCaption="Hora"
          />
        </div>
        <hr />
        <div className="form-group mb-2">
          <label
            className="form-label"
            htmlFor="titulo-evento"
          >
            Titulo y notas
            <input
              type="text"
              id="titulo-evento"
              className={`form-control ${titleClass}`}
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              value={formValues.title}
              onChange={onInputChanged}
            />
          </label>
          <small
            id="emailHelp"
            className="form-text text-muted"
          >
            Una descripción corta
          </small>
        </div>
        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          />
          <small
            id="emailHelp"
            className="form-text text-muted"
          >
            Información adicional
          </small>
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save" />
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
