const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const searchBtnHandler = () => {
  console.log(searchInput.value);
};
searchBtn.addEventListener('click', () => searchBtnHandler());
