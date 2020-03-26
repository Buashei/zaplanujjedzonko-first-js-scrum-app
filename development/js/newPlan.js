const allRecipes = JSON.parse(localStorage.getItem("recipes"));
if (allRecipes != null) {


//Imię na gorze
const testowe = document.querySelector(".nameInfo"); // wpiszemy w okno w Header
testowe.innerText = window.localStorage.getItem('savedName');

// Inputy
let planName = document.querySelector('#planName');
let planDescription = document.querySelector('#planDescription');
let weekNumber = document.querySelector('#weekNumber');


// Guzik Zapisu
let saveButton = document.querySelector('#savePlan');
saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(planName.value != "" && planDescription.value != "" && weekNumber.value != ""){
        console.log('Push that button');
        const allPlans = JSON.parse(localStorage.getItem("plan"));
        if(allPlans == null){
            newPlan.id = 1;
        } else if (allPlans.length >= 1){
            newPlan.id = allPlans[allPlans.length-1].id + 1;
        };
        newPlan.title = planName.value;                 // dodajemy nazwę planu do obiektu
        planName.value = "";                            // czyscimy input z nazwą planu
        newPlan.description = planDescription.value;    // dodajemy opis planu do obiektu
        planDescription.value = "";                     // czyścimy input z opisem planu
        newPlan.weekNumber = weekNumber.value;          // dodajemy numer tygodnia do obiektu
        weekNumber.value = "";                          // czyścimy input z numerem tygodnia

        //Poniedziałek
        newPlan.monday.push(mondayBreakfast.value);             //dodajemy do obiektu poniedziałkowe śniadanie
        newPlan.monday.push(mondaySecBreakfast.value);          //dodajemy do obiektu poniedziałkowe drugie śniadanie
        newPlan.monday.push(mondaySoup.value);                  //dodajemy do obiektu poniedziałkową zupę
        newPlan.monday.push(mondayMainCourse.value);            //dodajemy do obiektu poniedziałkowe drugie danie
        newPlan.monday.push(mondaySupper.value);                //dodajemy do obiektu poniedziałkową kolację

        //Wtorek
        newPlan.tuesday.push(tuesdayBreakfast.value);             //dodajemy do obiektu wtorkowe śniadanie
        newPlan.tuesday.push(tuesdaySecBreakfast.value);          //dodajemy do obiektu wtorkowe drugie śniadanie
        newPlan.tuesday.push(tuesdaySoup.value);                  //dodajemy do obiektu wtorkową zupę
        newPlan.tuesday.push(tuesdayMainCourse.value);            //dodajemy do obiektu wtorkowe drugie danie
        newPlan.tuesday.push(tuesdaySupper.value);                //dodajemy do obiektu wtorkową kolację
        
        //Środa
        newPlan.wednesday.push(wednesdayBreakfast.value);             //dodajemy do obiektu środowe śniadanie
        newPlan.wednesday.push(wednesdaySecBreakfast.value);          //dodajemy do obiektu środowe drugie śniadanie
        newPlan.wednesday.push(wednesdaySoup.value);                  //dodajemy do obiektu środową zupę
        newPlan.wednesday.push(wednesdayMainCourse.value);            //dodajemy do obiektu środowe drugie danie
        newPlan.wednesday.push(wednesdaySupper.value);                //dodajemy do obiektu środową kolację

        //Czwartek
        newPlan.thursday.push(thursdayBreakfast.value);             //dodajemy do obiektu czwartkowe śniadanie
        newPlan.thursday.push(thursdaySecBreakfast.value);          //dodajemy do obiektu czwartkowe drugie śniadanie
        newPlan.thursday.push(thursdaySoup.value);                  //dodajemy do obiektu czwartkową zupę
        newPlan.thursday.push(thursdayMainCourse.value);            //dodajemy do obiektu czwartkowe drugie danie
        newPlan.thursday.push(thursdaySupper.value);                //dodajemy do obiektu czwartkową kolację

        //Piątek
        newPlan.friday.push(fridayBreakfast.value);             //dodajemy do obiektu piątkowe śniadanie
        newPlan.friday.push(fridaySecBreakfast.value);          //dodajemy do obiektu piątkowe drugie śniadanie
        newPlan.friday.push(fridaySoup.value);                  //dodajemy do obiektu piątkową zupę
        newPlan.friday.push(fridayMainCourse.value);            //dodajemy do obiektu piątkowe drugie danie
        newPlan.friday.push(fridaySupper.value);                //dodajemy do obiektu piątkową kolację

        //Sobota
        newPlan.saturday.push(saturdayBreakfast.value);             //dodajemy do obiektu sobotnie śniadanie
        newPlan.saturday.push(saturdaySecBreakfast.value);          //dodajemy do obiektu sobotnie drugie śniadanie
        newPlan.saturday.push(saturdaySoup.value);                  //dodajemy do obiektu sobotnią zupę
        newPlan.saturday.push(saturdayMainCourse.value);            //dodajemy do obiektu sobotnie drugie danie
        newPlan.saturday.push(saturdaySupper.value);                //dodajemy do obiektu sobotnią kolację

        //Niedziela
        newPlan.sunday.push(sundayBreakfast.value);             //dodajemy do obiektu niedzielne śniadanie
        newPlan.sunday.push(sundaySecBreakfast.value);          //dodajemy do obiektu niedzielne drugie śniadanie
        newPlan.sunday.push(sundaySoup.value);                  //dodajemy do obiektu niedzielną zupę
        newPlan.sunday.push(sundayMainCourse.value);            //dodajemy do obiektu niedzielne drugie danie
        newPlan.sunday.push(sundaySupper.value);                //dodajemy do obiektu niedzielną kolację

        savePlanToLocalStorage(newPlan);            // zapisujemy nowy przepis do localStorage
        console.log("Zapisano: ", newPlan);
        window.location.href = "schedules.html";
    } else {
        alert('Nie możesz zapisać planu bez nazwy, opisu badź dnia tygodnia!');
    }
});

//Dni Tygodnia
//Poniedziałek
let mondayBreakfast = document.querySelector('#mondayBreakfast');       //Śniadanie
let mondaySecBreakfast = document.querySelector('#mondaySecBreakfast'); //Drugie Śniadanie
let mondaySoup = document.querySelector('#mondaySoup');                 //Zupa
let mondayMainCourse = document.querySelector('#mondayMainCourse');     //Drugie Danie
let mondaySupper = document.querySelector('#mondaySupper');             //Kolacja

//Wtorek
let tuesdayBreakfast = document.querySelector('#tuesdayBreakfast');       //Śniadanie
let tuesdaySecBreakfast = document.querySelector('#tuesdaySecBreakfast'); //Drugie Śniadanie
let tuesdaySoup = document.querySelector('#tuesdaySoup');                 //Zupa
let tuesdayMainCourse = document.querySelector('#tuesdayMainCourse');     //Drugie Danie
let tuesdaySupper = document.querySelector('#tuesdaySupper');             //Kolacja

//Środa
let wednesdayBreakfast = document.querySelector('#wednesdayBreakfast');       //Śniadanie
let wednesdaySecBreakfast = document.querySelector('#wednesdaySecBreakfast'); //Drugie Śniadanie
let wednesdaySoup = document.querySelector('#wednesdaySoup');                 //Zupa
let wednesdayMainCourse = document.querySelector('#wednesdayMainCourse');     //Drugie Danie
let wednesdaySupper = document.querySelector('#wednesdaySupper');             //Kolacja

//Czwartek
let thursdayBreakfast = document.querySelector('#thursdayBreakfast');       //Śniadanie
let thursdaySecBreakfast = document.querySelector('#thursdaySecBreakfast'); //Drugie Śniadanie
let thursdaySoup = document.querySelector('#thursdaySoup');                 //Zupa
let thursdayMainCourse = document.querySelector('#thursdayMainCourse');     //Drugie Danie
let thursdaySupper = document.querySelector('#thursdaySupper');             //Kolacja

//Piątek
let fridayBreakfast = document.querySelector('#fridayBreakfast');       //Śniadanie
let fridaySecBreakfast = document.querySelector('#fridaySecBreakfast'); //Drugie Śniadanie
let fridaySoup = document.querySelector('#fridaySoup');                 //Zupa
let fridayMainCourse = document.querySelector('#fridayMainCourse');     //Drugie Danie
let fridaySupper = document.querySelector('#fridaySupper');             //Kolacja

//Sobota
let saturdayBreakfast = document.querySelector('#saturdayBreakfast');       //Śniadanie
let saturdaySecBreakfast = document.querySelector('#saturdaySecBreakfast'); //Drugie Śniadanie
let saturdaySoup = document.querySelector('#saturdaySoup');                 //Zupa
let saturdayMainCourse = document.querySelector('#saturdayMainCourse');     //Drugie Danie
let saturdaySupper = document.querySelector('#saturdaySupper');             //Kolacja

//Niedziela
let sundayBreakfast = document.querySelector('#sundayBreakfast');       //Śniadanie
let sundaySecBreakfast = document.querySelector('#sundaySecBreakfast'); //Drugie Śniadanie
let sundaySoup = document.querySelector('#sundaySoup');                 //Zupa
let sundayMainCourse = document.querySelector('#sundayMainCourse');     //Drugie Danie
let sundaySupper = document.querySelector('#sundaySupper');             //Kolacja

//localStorage
var newPlan = {
    id: null,
    title: "" ,         // nazwa planu
    description: "",    // opis planu
    weekNumber: 0,      // numer tygodnia
    monday: [],          // dni tygodnia
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
};

// Zapis do localStorage
function savePlanToLocalStorage(newObject) {
    var dataFromLocalStorage = []; // zmienna pomocnicza
    if (localStorage.getItem("plan") != null) { // sprawdzamy czy w localStorage posiada dane
        dataFromLocalStorage = JSON.parse(localStorage.getItem("plan")); // jeśli są to konwertujemy je i zapisujemy do zmiennej
        dataFromLocalStorage.push(newObject); // dodajemy nowy obiek
        localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage)); // i zapisujemy do localStorage

    } else {
        dataFromLocalStorage.push(newObject); // jeśli nie ma to tworzymy nową wartość w localStorage i dodajemy
        localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage));
    }
    alert("Plan zapisany do localStorage");
}

renderSingleSelect()

function renderSingleSelect() { 
    const recipeSelect = document.querySelectorAll('.selectRecipeName');
    recipeSelect.forEach(function(element,index){
        const allRecipes = JSON.parse(localStorage.getItem("recipes"));
        for(let i=0; i < allRecipes.length; i++){
            var newOption = document.createElement("option");
            newOption.innerText = allRecipes[i].title;
            element.appendChild(newOption);
        }
    })
}

} else {
    alert('Przed stworzeniem planu musisz dodać przepisy do bazy danych!')
    window.location.href = "addrecipe.html";
}

