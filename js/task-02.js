const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parentIngredients = document.querySelector('#ingredients')

const createListElement = array => {
  return array.map(element => {
    const createElem = document.createElement('li')
    createElem.textContent = element;
    createElem.classList.add('item')
    return createElem
  })
}

const addParentElement = createListElement(ingredients)
parentIngredients.append(...addParentElement);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.