//Imię na gorze
const testowe = document.querySelector(".nameInfo"); // wpiszemy w okno w Header
testowe.innerText = window.localStorage.getItem('savedName');

//textareas
const recipeName = document.querySelector('#name');
const recipeDesc = document.querySelector('#description');
const recipeInst = document.querySelector('#instructions');
const recipeIngr = document.querySelector('#ingredients');

//lists 
const instList = document.querySelector('#newInstructions');
const ingrList = document.querySelector('#newIngredients');

//buttons
const saveButton = document.querySelector('#save');
saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    const allRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (recipeName.value == "") {
        alert('Nazwa nie może być pusta.');
    } else if (recipeDesc.value == ""){
        alert('Opis nie może być pusty.');
    } else if( instList.innerText == ""){
        alert('Lista instrukcji nie może być pusta.');
    } else if(ingrList.innerText == ""){
        alert('Lista składników nie może być pusta.');
    } else {
        console.log("Zapisuję i zamykam");
        if (allRecipes == null) {
            newRecipe.id = 1;
        } else {
            newRecipe.id = allRecipes.length + 1;
        }
        newRecipe.title = recipeName.value; // dodajemy nazwę przepisu do obiektu
        recipeName.value = ""; // czyscimy input z nazwą
        newRecipe.description = recipeDesc.value; // dodajemy opis przepisu do obiektu
        recipeDesc.value = ""; // czyścimy input z opisem
        instList.childNodes.forEach(function(element){
            newRecipe.instructions.push(element.innerText.replace(/\s+/g, ''))
        })
        ingrList.childNodes.forEach(function(element){
            newRecipe.ingredients.push(element.innerText.replace(/\s+/g, ''))
        })
        instList.innerHTML = ""; // czyścimy listę instrukcji
        ingrList.innerHTML = ""; // czyścimy listę składników



        saveRecipeToLocalStorage(newRecipe); // zapisujemy nowy przepis do localStorage
        console.log("Zapisano: ", newRecipe); // podglądamy w konsoli co zostało zapisane.
        alert("Przepis zapisany do localStorage");
        window.location.href = "./recipes.html";
    }
});

// czyszczenie localStorage
const clearStorageButton = document.querySelector("#clearStorage");
clearStorageButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    recipeName.value = ""; // czyscimy input z nazwą
    recipeDesc.value = ""; // czyścimy input z opisem
    recipeInst.value = ""; // czyścimy input z instrukcjami
    recipeIngr.value = ""; // czyścimy input ze składnikami
    instList.innerHTML = ""; // czyścimy listę instrukcji
    ingrList.innerHTML = ""; // czyścimy listę składników

    alert("localStorage wyczyszczone");
});

// Guzik dodający instrukcje
const addInstButton = document.querySelector('#addInst');
addInstButton.addEventListener('click', function () {
    if (recipeInst.value != "") {
        console.log("Dodaję instrukcję");
        renderSingleInstruction(recipeInst.value); // renderujemy element na liście
        recipeInst.value = ""; // czyścimy instrukcje input
    } else {
        alert('Nie można dodać pustej instrukcji!');
    }
});

// Guzik dodający składniki
const addIngrButton = document.querySelector('#addIngr');
addIngrButton.addEventListener('click', function () {
    console.log("Dodaję Składnik");
    if (recipeIngr.value != "") {
        renderSingleIngredient(recipeIngr.value); // renderujemy element na liśćie
        recipeIngr.value = ""; // czyścimy składniki input
    } else {
        alert('Nie można dodać pustego składnika!');
    }
});

//localStorage
const newRecipe = {
    id: 0, // id przepisu
    title: "", // nazwa przepisu
    description: "", // opis przepisu
    instructions: [], // instrukcje przepisu
    ingredients: [] // składniki przepisu
};

// Dodawanie instrukcji z input do listy
// Guzik usuwania pojedyńczej instrukcji
var listInstructionItemCounter = 0;

function renderSingleInstruction(instruction) { // tworzymy nowy element LI i dodajemy go do HTML
    var newLi = document.createElement("li");
    newLi.innerHTML = instruction + ' <i class="fas fa-edit" id="editInst"></i>' + ' <i class="far fa-trash-alt" id="deleteInst"></i>';
    instList.appendChild(newLi);
    const editButton = document.querySelectorAll('#editInst');
    editButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToEdit = this.parentElement;
            liToEdit.toggleAttribute("contenteditable");
        });
    });
    const deleteButton = document.querySelectorAll('#deleteInst');
    deleteButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToDelete = this.parentElement;
            liToDelete.parentElement.removeChild(liToDelete);
        });
    });
}

// Dodawanie składników z input do listy
// Guzik usuwania pojedyńczej instrukcji
function renderSingleIngredient(ingredient) { // tworzymy nowy element LI i dodajemy go do HTML
    var newLi = document.createElement("LI");
    newLi.innerHTML = ingredient + ' <i class="fas fa-edit" id="editIngr"></i>' + ' <i class="far fa-trash-alt" id="deleteIngr"></i>';
    ingrList.appendChild(newLi);
    const editButton = document.querySelectorAll('#editIngr');
    editButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToEdit = this.parentElement;
            liToEdit.toggleAttribute("contenteditable");
        });
    });
    const deleteButton = document.querySelectorAll('#deleteIngr');
    deleteButton.forEach(function (element, index, array) {
        element.addEventListener('click', function (event) {
            event.stopImmediatePropagation();
            const liToDelete = this.parentElement;
            liToDelete.parentElement.removeChild(liToDelete);
        });
    });
}

// Funkcja zapisująca obiekt do localStorage
function saveRecipeToLocalStorage(newObject) {
    var dataFromLocalStorage = []; // zmienna pomocnicza
    if (localStorage.getItem("recipes") != null) { // sprawdzamy czy w localStorage posiada dane
        dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes")); // jeśli są to konwertujemy je i zapisujemy do zmiennej
        dataFromLocalStorage.push(newObject); // dodajemy nowy obiek
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage)); // i zapisujemy do localStorage

    } else {
        dataFromLocalStorage.push(newObject); // jeśli nie ma to tworzymy nową wartość w localStorage i dodajemy
        localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
    }
}
const allRecipes = JSON.parse(localStorage.getItem("recipes"));