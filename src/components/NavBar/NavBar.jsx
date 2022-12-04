import './NavBar.css';
import { useEffect, useState } from 'react';
import React from 'react';
import CardItem from '../CardItem/CardItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {

  
  const  [ filmList, setFilmList ] = useState([]);
  
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/53bffb22-14e5-4ace-8fa9-ea5b830487a2')
      .then((response) => response.json())
      .then((result) => {
        setFilmList(result);
      });
}, []);

const [filteredFilm, setFilteredFilm] = useState(filmList);

useEffect(() => {
  setFilteredFilm(filmList);
}, [filmList]);


function filmFilter (genre){
  if(!genre || genre === 'all'){
    setFilteredFilm(filmList)
      return;
  }
  
  if(genre) {
      let newFilms = [...filmList].filter((item) => item.genre === genre);
      setFilteredFilm(newFilms)
  };
};

const basket = useSelector((state) => state.basket);

console.log('basket: ',basket);

  return (
    <>
      <div className="container-nav">
          <div className="box-navigation">
            <button className='navigation indent-navigation' onClick= {() => filmFilter(`all`)} >Все</button>
            <button className='navigation' onClick= {() => filmFilter(`Комедия`)} >Комедия</button>
            <button className='navigation' onClick= {() => filmFilter(`Приключения`)} >Приключения</button>
            <button className='navigation' onClick= {() => filmFilter(`Фантастика`)}>Фантастика</button>
          </div>
          <div className="box-favorites">
            <Link className='favorites' to='favorites'>Избранное:_{ Object.keys(basket).length } </Link>
          </div>
      </div>
      <div className='box-card'>
        {
          filteredFilm.map((card, index) => {
                  return <CardItem key={index}
                              title={card.title}
                              id={card.id}
                              img={card.img}
                              description={card.description}
                              prop={card} />
          })
        }
      </div>
    </>
  );
};

export default NavBar;