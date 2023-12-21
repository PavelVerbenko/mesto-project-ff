// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; //получил доступ к содержимому

// @todo: DOM узлы
const placesList = document.querySelector('.places__list'); //создали переменную для вывода карточки


// @todo: Функция создания карточки
const createCard = (name, link, deleteCard) => {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  const cardDelBut = cardElement.querySelector('.card__delete-button');
    cardDelBut.addEventListener('click', (del) => {
      deleteCard(del);
    });
    return cardElement; 
}

// @todo: Функция удаления карточки 
const deleteCard = (event) => {
  const item = event.target.closest('.card');
  item.remove();
}

// @todo: Вывести карточки на страницу
initialCards.map(({ name, link }) => placesList.append(createCard(name, link, deleteCard)));