import React from "react";

function PopupWithForm({ title, name, buttonText, children, isOpen, onClose }) {

  return (

    <div className={`popup popup_type_${name}${isOpen ? ' popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form name={name} className="popup__form popup__form_type_edit-profile" noValidate>
          {children}
          <button name="submit" className="popup__save" type="submit"
            aria-label={buttonText}>{buttonText}</button>
        </form>
        <button className="popup__close popup__close_type_edit-profile" type="button"
          aria-label="Закрыть окно редактирования профиля" onClick={onClose}></button>
      </div>
    </div>

  )
}

export default PopupWithForm;