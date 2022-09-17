import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";
import { CardsContext } from "../contexts/CardsContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  /* Создаем состояния */
  const [cards, setCards] = React.useState([]);

  /* Подписываемся на контекст текущего пользователя */
  const currentUser = React.useContext(CurrentUserContext);
  //console.log("контекст приехал", currentUser);

  /* Получаем данные профиля и карточки с сервера */
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cardsInfo) => {
        setCards(cardsInfo);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных с сервера: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      {/* Блок profile */}
      <section className="profile">
        <div className="profile__common">
          {/* Аватар */}
          <div
            className="profile__avatar"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <div className="profile__avatar-overlay"></div>
          </div>

          {/* Данные профиля и редактирование */}
          <div className="profile__info">
            <div className="info">
              <h1 className="info__name">{currentUser.name}</h1>
              <p className="info__description">{currentUser.about}</p>
            </div>

            {/* Кнопка редактировать профиль */}
            <button
              className="profile__edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            ></button>
          </div>
        </div>
        {/* Кнопка добавить место */}
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить запись"
          onClick={onAddPlace}
        ></button>
      </section>

      {/* Блок elements */}
      <section className="elements">
        {cards.map((card) => (
          <CardsContext.Provider value={card}>
            <Card key={card._id} onCardClick={onCardClick} />
          </CardsContext.Provider>
        ))}
      </section>
    </main>
  );
}

export default Main;
