import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  const isFormValid = useMemo(() => {
    const keysForms = Object.keys(formValidation);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keysForms.length; i++) {
      if (formValidation[keysForms[i]] !== null) {
        return false;
      }
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    const keysForms = Object.keys(formValidations);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < keysForms.length; i++) {
      const [fn, errorMessage = 'Este Campo es requerido'] = formValidations[keysForms[i]];
      formCheckedValues[`${keysForms[i]}Valid`] = fn(formState[keysForms[i]]) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };

  useEffect(() => {
    createValidators();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState]);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    ...formValidation,
    isFormValid,
  };
};
