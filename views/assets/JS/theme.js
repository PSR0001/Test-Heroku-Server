const button = document.getElementById('button')

button.addEventListener('click',()=>{
    darkLightToggle();
})

// dark and 
function darkLightToggle() {
    console.log('click me!')
    var element = document.body;
    element.classList.toggle("dark-mode");
  }