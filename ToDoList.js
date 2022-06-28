

let list = document.getElementById("list");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener('click', ToDoList);



let counter = 1;

list.addEventListener('mousemove', e => {
     list.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
   })

   list.addEventListener('click', e => {
    list.innerHTML += `   
    <div>
    <p> ${counter++}</p>
  </div>`
 })

 list.addEventListener('click', function(e){
  console.log(e.target);
  e.target.remove();
})




function ToDoList(){
  /*Getting the number of text fields*/

  /*Generating text fields dynamically in the same form itself*/
 
    var listElement = document.createElement("li");

    let text = document.createTextNode(input.value);
    listElement.appendChild(text);
    list.appendChild(text);

    input.value = "";

}


