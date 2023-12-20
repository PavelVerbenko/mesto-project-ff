// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; //получил доступ к содержимому

// @todo: DOM узлы
const placesList = document.querySelector('.places__list'); //создали переменную для вывода карточки


// @todo: Функция создания карточки
// @todo: Функция удаления карточки 
const createCard = (content, link) => {
  const cardMeaning = cardTemplate.querySelector('.card').cloneNode(true);
  cardMeaning.querySelector('.card__image').src = link;
  cardMeaning.querySelector('.card__image').alt = content;
  cardMeaning.querySelector('.card__title').textContent = content;
  const cardDelBut = cardTemplate.querySelector('.card__delete-button');
  cardDelBut.addEventListener('click', () => cardMeaning.remove());//удаляет карточки
  return cardMeaning;
}
// Разобраться почему не удаляет и не добавляет


  

// @todo: Вывести карточки на страницу
initialCards.forEach(element => placesList.append(createCard(element.content, element.link)));//выводить карточки