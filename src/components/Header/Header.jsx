import './Header.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import { SignUp } from '../../Pages/SignUp/SignUp';
import { SignIn } from '../../Pages/SignIn/SignIn';
import  NavBar  from '../NavBar/NavBar';
import { Layout } from '../Layout/Layout';
import { FavoritesFilmPage } from '../../Pages/FavoritesFilmPage/FavoritesFilmPage';
import FilmPage from '../../Pages/FilmPage/FilmPage';

const Header = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<NavBar/>} />
          <Route path={'signup'} element={<SignUp />} />
          <Route path={'signin'} element={<SignIn />} />
          <Route path={'favorites'} element={<FavoritesFilmPage />} />
          <Route path={'films'}>
            <Route path={':userId'} element={<FilmPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Header;