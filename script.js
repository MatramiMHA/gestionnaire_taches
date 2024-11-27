let form = document.getElementById("formul");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    let input = document.getElementById("task-input");
    let inputValue = input.value; 
    let li = document.createElement("li");
    li.textContent = inputValue;
   let ul = document.getElementById("task-list");

const deletebutton = document.createElement("button");
deletebutton.textContent = "Supprimer!";

deletebutton.addEventListener("click",function () {
    ul.removeChild(li);
})

const modif = document.createElement("button");
modif.textContent = "Modifier ";

modif.addEventListener("click",function () {
    let ecrit= document.createElement("input");
    ecrit.setAttribute('type', 'text');
    ecrit.value= inputValue;

 const save = document.createElement("button");
save.textContent = "save!";
li.appendChild(ecrit);
li.appendChild(save);
save.addEventListener("click",function (q) {
    const fin = ecrit.value;
    li.textContent= "";
    li.appendChild(document.createTextNode(fin));

    li.appendChild(deletebutton);
    li.appendChild(modif);
  

})
})

    ul.appendChild(li);
    li.appendChild(deletebutton);
    li.appendChild(modif);


});     
