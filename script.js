let string =" "
let button = document.querySelectorAll('.button');
Array.from(button).forEach((button)=> {
    button.addEventListener('click', (i)=>{
        console.log(i.target)
        string = string + i.target.innerHTML;
        document.querySelector('input').value=string;
    })
})
document.addEventListener("click", function(event) {
    if (event.code === "click.del") {
      var input = document.getElementById(".button");
      input.value = input.value.slice(0, -1);
    }
  });