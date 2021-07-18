// ---------------------------------------------------------
// 상단의 search 버튼을 누를시 input이 옆으로 늘어나는 효과

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


// ---------------------------------------------------------
// Footer 년도 표시
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();