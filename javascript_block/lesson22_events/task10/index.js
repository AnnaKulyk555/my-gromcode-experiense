const pageElems = document.querySelectorAll('.pagination__page');
const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};
pageElems.forEach(pageElem => pageElem.addEventListener('click', handleClick));
