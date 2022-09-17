import React from "react";
import { CardsContext } from "../contexts/CardsContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ onCardClick }) {
  /* Подписываемся на контекст текущего пользователя и текущей карточки*/
  const card = React.useContext(CardsContext);
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, в которую запишется "Корзина"
  const cardDeleteButton = isOwn ? (
    <button
      className="element__delete"
      type="button"
      aria-label="Удалить карточку из профиля"
    ></button>
  ) : (
    ""
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img
        src={card.link}
        alt={card.name}
        className="element__image"
        onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-block">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Поставить лайк"
          ></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>

      {cardDeleteButton}
    </article>
  );
}

export default Card;
