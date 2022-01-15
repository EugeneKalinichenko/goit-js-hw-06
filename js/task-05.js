const textInput = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

textInput.addEventListener('input', (event) =>
{ 
    if (textInput.value === '') {
      span.textContent = 'Anonymous'  
    } else  span.textContent = event.currentTarget.value;
});




// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение
//  в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>