import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  { /* Создаем состояния */ }
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  { /* Получаем данные профиля и карточки с сервера */ }
  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards(),
    ])
      .then(([userData, cardsInfo]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">

      { /* Блок profile */}
      <section className="profile">
        <div className="profile__common">
          { /* Аватар */}
          <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} >
            <div className="profile__avatar-overlay"></div>
          </div>

          { /* Данные профиля и редактирование */}
          <div className="profile__info">
            <div className="info">
              <h1 className="info__name">{userName}</h1>
              <p className="info__description">{userDescription}</p>
            </div>

            { /* Кнопка редактировать профиль */}
            <button className="profile__edit" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          </div>
        </div>
        { /* Кнопка добавить место */}
        <button className="profile__add-button" type="button" aria-label="Добавить запись" onClick={onAddPlace}></button>
      </section>

      { /* Блок elements */}
      <section className="elements">
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </section>

    </main>
  )
}

export default Main;