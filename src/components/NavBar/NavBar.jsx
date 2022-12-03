import './NavBar.css';
import { useEffect, useState } from 'react';
import React from 'react';
import CardItem from '../CardItem/CardItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({search}) => {

  
  const  [ filmList, setFilmList ] = useState([]);
  
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/53bffb22-14e5-4ace-8fa9-ea5b830487a2')
      .then((response) => response.json())
      .then((result) => {
        setFilmList(result);
      });
}, []);

const [filteredFilm, setFilteredFilm] = useState(filmList);

useEffect( () => {
  setFilteredFilm(filmList);
}, [filmList]);


function filmFilter (genre, search){
  if((!genre || genre === 'all') && !search){
    setFilteredFilm(filmList)
      return;
  }
  
  if(genre) {
      let newFilms = [...filmList].filter(
      (item) => (item.genre || item.description) === genre,
          );
      setFilteredFilm(newFilms)
  };
  if(search) {
      const newFilms = filmList
      .filter(v => ((v.title).toLowerCase()).indexOf(search.toLowerCase()) + 1 || ((v.description).toLowerCase()).indexOf(search.toLowerCase()) + 1)
      setFilteredFilm(newFilms)
  };
};

const basket = useSelector((state) => state.basket);

console.log(basket);

  return (
    <>
      <div className="container-nav">
          <div className="box-navigation">
            <button className='navigation indent-navigation' onClick= {() => filmFilter(`all`, search)} >Все</button>
            <button className='navigation' onClick= {() => filmFilter(`Комедия`, search)} >Комедия</button>
            <button className='navigation' onClick= {() => filmFilter(`Приключения`, search)} >Приключения</button>
            <button className='navigation' onClick= {() => filmFilter(`Фантастика`, search)}>Фантастика</button>
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