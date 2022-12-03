import './SignIn.css';

import React, { useEffect, useState } from 'react';

const SignIn = () => {
  const initialValues = { email:"", password:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(values.email)) {
      errors.email = ("Указан неверный Email");
    };

    if (!values.email) {
      errors.email = ("Укажите Email");
    };

    if (values.password.length < 8) {
      errors.password = ("Указан неверный пароль");
    };

    if (!values.password) {
      errors.password = ("Укажите пароль");
    } else if (regEx.test(values.email) === true && values.password.length < 8) {
      errors.email = ("");
      errors.password = ("");
    };

    return errors;
  };

  return (
    <>
      <div className="container">
        <form className="container__form" onSubmit={ handleSubmit }>
          <h1 className="container-form__heading">Вход</h1>
            <label className="container-form__email-label" htmlFor="email">Email</label>
            <div className="email-error">{ formErrors.email }</div>
            <input className="container-form__email-input" 
                   id="email" 
                   name="email" 
                   type="email" 
                   placeholder="Введите email"
                   value={ formValues.email }
                   onChange={ handleChange } />
            <label className="container-form__password-label" htmlFor="password">Пароль</label>
            <div className="pass-error">{ formErrors.password }</div>
            <input className="container-form__password-input" 
                   id="password" 
                   name="password" 
                   type="password" 
                   placeholder="Введите пароль"
                   value={ formValues.password }
                   onChange={ handleChange } />
          <button className="container-form__button">Войти</button>
        </form>
      </div>
    </>
  );
};

export {SignIn};