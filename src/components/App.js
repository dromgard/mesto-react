import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  { /* Создаем состояния */ }
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });


  { /* Закрываем все попапы */ }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (

    <div className="page">
      { /* Блок header */}
      <Header />

      { /* Блок с основным контентом */}
      <Main
        onEditProfile={setIsEditProfilePopupOpen}
        onAddPlace={setIsAddPlacePopupOpen}
        onEditAvatar={setIsEditAvatarPopupOpen}
        onCardClick={setSelectedCard}
      />

      { /* Блок footer */}
      <Footer />

      { /* Попап редактирования профиля */}
      <PopupWithForm
        title='Редактировать профиль'
        name='edit-profile'
        buttonText='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >

        <input id="info-input" type="text" placeholder="Название профиля" name="name"
          className="popup__input popup__input_type_name" minLength="2" maxLength="40" required />
        <span className="popup__input-error info-input-error"></span>

        <input id="description-input" type="text" placeholder="Описание профиля" name="description"
          className="popup__input popup__input_type_description" minLength="2" maxLength="200" required />
        <span className="popup__input-error description-input-error"></span>

      </PopupWithForm>

      { /* Попап добавления нового элемента */}
      <PopupWithForm
        title='Новое место'
        name='add-element'
        buttonText='Создать'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >

        <input id="element-name-input" type="text" placeholder="Название" name="name"
          className="popup__input popup__input_element_name" minLength="2" maxLength="30" required />
        <span className="popup__input-error element-name-input-error"></span>

        <input id="element-link-input" type="url" placeholder="Ссылка на картинку" name="link"
          className="popup__input popup__input_element_link" required />
        <span className="popup__input-error element-link-input-error"></span>

      </PopupWithForm>

      { /* Попап подтверждения удаления элемента */}
      <PopupWithForm
        title='Вы уверены?'
        name='confirm-delete-element'
        buttonText='Да'
        onClose={closeAllPopups}
      />

      { /* Попап изменения аватара */}
      <PopupWithForm
        title='Обновить аватар'
        name='change-avatar'
        buttonText='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >

        <input id="avatar-link-input" type="url" placeholder="Ссылка на аватар" name="link"
          className="popup__input popup__input_avatar-link" required />
        <span className="popup__input-error avatar-link-input-error"></span>

      </PopupWithForm>

      { /* Попап превью изображения элемента */}
      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      />

    </div>

  );
}

export default App;
