import './SignUp.css';

import React, { useEffect, useState } from 'react';

const SignUp = () => {
  const initialValues = { email:"", password:"", truPassword:"", gender:"", subscribe:"" };
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
    if (Object.keys(formErrors).length === 3 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(values.email)) {
      errors.email = ("Email введён некорректно");
    };

    if (!values.email) {
      errors.email = ("Поле обязательно для заполнения");
    };

    if (values.password.length < 8) {
      errors.password = ("Пароль должен содержать не менее 8 символов");
    };

    if (!values.password) {
      errors.password = ("Поле обязательно для заполнения");
    };

    if (!values.truPassword) {
      errors.truPassword = ("Пароли не совпадают");
    };

    if (values.password !== values.truPassword) {
      errors.truPassword = ("Пароли не совпадают");
    } else if (regEx.test(values.email) === true && values.password === values.truPassword && values.password.length >= 8) {
        errors.email = ("");
        errors.password = ("");
        errors.truPassword = ("");
    };

    return errors;
  };

  return (
    <div className="main__container">
      <form className="main-container__form" onSubmit={ handleSubmit } >
        <h1 className="main-container-form__heading">Регистрация</h1>
            <label className="main-container-form__email-label" htmlFor="">* Email</label>
            <div className="main-container-form__email-error" id="email-error">{ formErrors.email }</div>
            <input className="main-container-form__email-input" 
                   id="email"
                   name="email" 
                   type="email" 
                   placeholder="Введите email"
                   value={ formValues.email }
                   onChange={ handleChange }
              />
       <label className="main-container-form__password-label" htmlFor="password">* Пароль</label>
            <div className="main-container-form__password-error" id="password-error">{ formErrors.password }</div>
            <input className="main-container-form__password-input" 
                   id="password" 
                   name="password" 
                   type="password" 
                   placeholder="Введите пароль"
                   value={ formValues.password }
                   onChange={ handleChange }
             />
       <label className="main-container-form__password-confirmation-label" htmlFor="password-confirmation">* Подтверждение пароля</label>
            <div className="main-container-form__password-confirmation-error" id="password-confirmation-error">{ formErrors.truPassword }</div>
            <input className="main-container-form__password-confirmation-input" 
                   id="password-confirmation" 
                   name="truPassword" 
                   type="password" 
                   placeholder="Подтвердите пароль"
                   value={ formValues.truPassword }
                   onChange={ handleChange }
             />
                <div className="main-container-form__gender-title">Пол</div> 
            <input className="main-container-form__radio-man" 
                   id="radio-man" 
                   name="gender" 
                   type="radio" 
                   value="man"
                   onChange={ handleChange } />
            <label htmlFor="radio-man">Мужчина</label>
            <input className="main-container-form__radio-woman" 
                   id="radio-woman" 
                   name="gender" 
                   type="radio" 
                   value="woman" 
                   onChange={ handleChange } />
            <label htmlFor="radio-woman">Женщина</label>
            <input className="main-container-form__checkbox" 
                   id="subscribe" 
                   name="subscribe" 
                   type="checkbox"  
                   value="TRU"
                   onChange={ handleChange } />
            <label htmlFor="subscribe">Подписаться на обновления</label>
          <button className="main-container-form__button">Регистрация</button>
          <p>{isSubmit}</p>
      </form>
    </div>
  );
};

export {SignUp};