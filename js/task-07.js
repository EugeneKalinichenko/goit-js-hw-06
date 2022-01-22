const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function handleChangSize(event) {
    return spanRef.style.fontSize = event.target.value + 'px';
}
inputRef.addEventListener('input', handleChangSize);

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>