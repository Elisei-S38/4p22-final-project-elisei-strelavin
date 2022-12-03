import { useEffect, useState } from 'react';
import Iframe from 'react-iframe';
import {  useParams } from 'react-router-dom';
import './FilmPage.css';

function FilmPage() {
  const { userId } = useParams();
  const [ film , setFilm ] = useState([]);

  useEffect(() => {
      fetch(`https://run.mocky.io/v3/53bffb22-14e5-4ace-8fa9-ea5b830487a2/${userId}`)
        .then((response) => response.json())
        .then((result) => {
          setFilm(result.filter(one => one.id === +userId)[0]);
        });
  }, []);

  return (
      <div className="container-film">
        <div className="box-film">
          <div className="box-film__content">
            <img className='film__content-img' alt='img' src={ film.img }/> 
            <div className="box-film-content__text">
              <h1 className='content__text-title'>{ film.title }</h1> 
              <p className='content__text-genre'>Жанр: { film.genre }</p> 
              <p className='content__text-desc'>{ film.description }</p> 
            </div>
          </div>
          <div className="box-film__video">
            <Iframe url={film.video}
                      className="box-video"
                      display="block"
                      position="relative"/>
          </div>
        </div>
      </div>
  )
};

export default FilmPage;