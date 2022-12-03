import './CardItem.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket  } from '../../store/basket/basketSlice';
import { useSelector } from 'react-redux';

const CardItem = ({img, title, description, id}) => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.basket);

  const onAddClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addToBasket(id));
  }

  const onDeleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(removeFromBasket(id));
   }

  return (
    <>
      <div className="card-item">
        <img className='card-item-img' alt='img' src={ img } />
        <div className="card-item-content">
          <Link to={ `films/${ id }` } className="content-title">{ title }</Link>
          <div className="content-desc">{ description }</div>
        </div>
          {
          !films[id] && <button onClick={ onAddClick } className="card-item-button">Добавить в избранное</button>
          }
          {  
          films[id] && <button onClick={ onDeleteClick } className="card-item-button">Удалить</button>
          }
      </div>
    </>
  );
};

export default CardItem;