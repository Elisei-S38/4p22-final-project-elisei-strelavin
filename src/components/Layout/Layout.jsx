import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

const Layout = () => {
  return (
    <>
      <header className='header'>
        <div className="box-logo">
          <Link className="logo" to='/'>BOX-FILM.home</Link>
        </div>
        <div className="box-transitions">
          <Link className="transitions" to='/signup'>Регистрация</Link>
          <span className='line'>|</span>
          <Link className="transitions indent-signin" to='/signin'>Вход</Link>
        </div>
      </header>
      <Outlet/>
    </>
  );
};

export {Layout};