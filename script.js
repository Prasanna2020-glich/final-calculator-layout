// let string =" "
// let button = document.querySelectorAll('.button');
// Array.from(button).forEach((button)=> {
//     button.addEventListener('click', (i)=>{
//         console.log(i.target)
//         string = string + i.target.innerHTML;
//         document.querySelector('input').value=string;
//     })
// })
// const backspace = document.querySelector('.del');
// backspace.addEventListener('click', () => {
//     if (display.value.length > 0) {
//       const text = display.value;
//       display.value = text.substring(0, text.length - 1);
//     } else {
//       alert("No digits left");
//     }
//   });
const keypad = document.querySelector('.pg');
const backspace = document.querySelector('.del');
const display = document.querySelector('.input');

keypad.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('button') && display.value.length < 10) {
    display.value += target.textContent;
  }else if (target.classList.contains('button') && display.value.length >= 10) {
    alert("Maximum 10 digits allowed");
  }
});


backspace.addEventListener('click', () => {
    if (display.value.length > 0) {
      const text = display.value;
      display.value = text.substring(0, text.length - 1);
    } else {
      alert("No digits left");
    }
  });
