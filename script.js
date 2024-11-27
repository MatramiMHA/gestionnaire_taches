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
    li.appendChild(ecrit);
})

    ul.appendChild(li);
    li.appendChild(deletebutton);
    li.appendChild(modif);


});     

// Ajouter le bouton Modifier
        //Créer le bouton modifier
        //Appliquer le texte "Modifier"
        //addEventListener > au click > fonction >
            //Céer un nouvel input
            //Ajouter le type 'text' à l'input
            //Ajouter en valeur de l'input le contenu textuel du premier élément enfant (firstChild) du li
            //Créer un bouton avec le texte Sauvegarder
            //addEventListener > au click > fonction >
                //Remplacer le texte du premier élément enfant(firstChild) du li par la valeur du nouvel input
                //Supprimer le nouvel input et le bouton sauvegarder