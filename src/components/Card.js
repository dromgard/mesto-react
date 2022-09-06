import React from "react";

function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img src={card.link} alt={card.name} className="element__image" onClick={handleCardClick} />
      <div className="element__description">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-block">
          <button className="element__like" type="button" aria-label="Поставить лайк"></button>
          <span className="element__like-count">{card.likes.length}</span>
        </div>
      </div>
      <button className="element__delete" type="button" aria-label="Удалить карточку из профиля"></button>
    </article>
  )
}

export default Card;