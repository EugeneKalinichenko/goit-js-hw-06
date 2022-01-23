function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInputEl = document.querySelector("input[type='number']")
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl= document.querySelector("button[data-destroy]");
const boxesEL = document.querySelector('div#boxes');

btnCreateEl.addEventListener('click', createBtnOnClick);

function createBtnOnClick() {
  createBoxes(numberInputEl.value);
}
btnDestroyEl.addEventListener('click', () => {
  destroyBoxes()
});



function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    const boxElSize = (30 + 10 * i) + 'px'
    boxEl.style.width = boxElSize;
    boxEl.style.height = boxElSize;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEL.append(boxEl);
  }
}
function destroyBoxes() {
  boxesEL.innerHTML = '';
  numberInputEl.value = '';
}


// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.