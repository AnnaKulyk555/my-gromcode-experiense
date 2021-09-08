export function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);

  return spanElem.closest('.box').dataset.section;
}

// test
// console.log(getSection(3));
// console.log(getSection(6));
// console.log(getSection(1));
// console.log(getSection(5));
