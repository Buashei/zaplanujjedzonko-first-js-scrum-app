const newNameInput = document.querySelector(".newNameInput");
const newNameButton = document.querySelector(".newNameButton");
const testowe = document.querySelector(".nameInfo"); // wpiszemy w okno w Header
const newNameWindow = document.querySelector(".newNameWindow");
const mainWindow = document.querySelector(".mainWindow");
const clearStorage = document.querySelector(".clearStorage");

// const testowe = document.querySelector(".nameInfo"); // wpiszemy w okno w Header
// testowe.innerText = window.localStorage.getItem('savedName');

// console.log(element3);
// console.log(newNameInput);
// console.log(newNameButton);
// console.log(testowe);
// console.log(caleWindow);
// console.log("To ważne " + newNameInput.value);
// const magazynDlugosc = localStorage.length
// console.log(magazynDlugosc);
// const magazynImie = window.localStorage.getItem('savedName');
// console.log(window.localStorage.getItem('savedName'));
// localStorage.removeItem('savedName');
// newNameWindow.classList.remove("invisible");


if (window.localStorage.getItem('savedName') == null) {
    newNameButton.addEventListener('click', function () {
        if (newNameInput.value == "") {
            alert('Proszę podać imie');
        } else {
            const newName = newNameInput.value;
            localStorage.setItem('savedName', newName);
            testowe.innerText = window.localStorage.getItem('savedName');
            newNameWindow.classList.add("invisible");
            mainWindow.classList.add("visible");
            console.log(window.localStorage.getItem('savedName'));
            if (mainWindow.className == "mainWindow visible") { // Jezeli sekcja mainWindow jest widoczna to po 2sek przenieś do dashboard.html
                setTimeout(function () {
                    window.location.href = "./dashboard.html";
                }, 1000);
            }
        }
    });
} else {
    testowe.innerText = window.localStorage.getItem('savedName');
    newNameWindow.classList.add("invisible");
    mainWindow.classList.add("visible");
    if (mainWindow.className == "mainWindow visible") { // Jezeli sekcja mainWindow jest widoczna to po 2sek przenieś do dashboard.html
        setTimeout(function () {
            window.location.href = "./dashboard.html";
        }, 1000);
    };

    // jeśli w magazynie jest imię to pobrać, wyświetlić w testowe i nie wyświetlać okienka 2.1 tylko kolejne
}



// kliknięcie na element w menu.
// 1/3 MENU PRZEPISY
const recipeListWindow = document.querySelector(".recipeList");


menuRecipes.addEventListener("click", function () {

    mainWindow.classList.remove("visible");
    newNameWindow.classList.remove("visible");
    newNameWindow.classList.add("invisible");
    recipeListWindow.classList.add("visible");

});


newNameInput