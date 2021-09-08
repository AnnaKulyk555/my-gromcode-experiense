export function getTitle() {
  const titleElem = document.querySelector('.title');

  return titleElem.textContent;
}

export function getDescription() {
  const decriptionElem = document.querySelector('.about');

  return decriptionElem.innerText;
}

export function getPlans() {
  const plansElem = document.querySelector('.plans');

  return plansElem.innerHTML;
}

export function getGoal() {
  const goalElem = document.querySelector('.goal');

  return goalElem.outerHTML;
}

// test
// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
