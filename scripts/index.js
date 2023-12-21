// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; //получил доступ к содержимому

// @todo: DOM узлы
const placesList = document.querySelector('.places__list'); //создали переменную для вывода карточки


// @todo: Функция создания карточки
// @todo: Функция удаления карточки 
const createCard = (name, link) => {
  const cardMeaning = cardTemplate.querySelector('.card').cloneNode(true);
  cardMeaning.querySelector('.card__image').src = link;
  cardMeaning.querySelector('.card__image').alt = name;
  cardMeaning.querySelector('.card__title').textContent = name;
  const cardDelBut = cardMeaning.querySelector('.card__delete-button');
  cardDelBut.addEventListener('click', () => cardMeaning.remove());//удаляет карточки
  return cardMeaning;

  
}
// @todo: Вывести карточки на страницу
initialCards.map(({ name, link }) => placesList.append(createCard(name, link)));