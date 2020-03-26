// Guziki
let addRecipesWidget = document.querySelector('#addRecipesWidget');
addRecipesWidget.addEventListener('click', function(){
    window.location.href = "./addrecipe.html"
});

let addPlansWidget = document.querySelector('#addPlansWidget');
addPlansWidget.addEventListener('click', function(){
    window.location.href = "./addplan.html"
});

const windowCloseButton = document.querySelectorAll('.fa-window-close');
windowCloseButton.forEach(function(element, index){
    element.addEventListener('click', function(event){
        event.stopImmediatePropagation();
        this.parentElement.style.display = "none";
    });
});


const allRecipes = JSON.parse(localStorage.getItem("recipes"));
const widgetRecipesAmount = document.querySelector('#widgetRecipesAmount')
if (allRecipes==null){
    widgetRecipesAmount.innerText = " Nie masz dodanego żadnego przepisu";
} else {
    widgetRecipesAmount.innerText = " Masz już " + allRecipes.length + " przepisów, nieźle!";
}



//Imię na gorze
const testowe = document.querySelector(".nameInfo");
testowe.innerText = window.localStorage.getItem('savedName');

//Dni Tygodnia złapane w DOM
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

//Funkcja wyświetlajaca czas
Date.prototype.getWeekNumber = function(){
    var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
  };
  //wyświelamy teraźniejszy numer tygodnia
  const realWeekOfYear = new Date().getWeekNumber();

// obiekt pobrany z localStorage

const allPlans = JSON.parse(localStorage.getItem("plan"));
let actualWeekNumber = null;
let weekNumberArray = [];
let indexNumber = null;
let showWeekNumber = null;
let sortedWeekNumberArray =[];
allPlans.forEach(function(plan,index){
    weekNumberArray.push(parseInt(plan.weekNumber));
    sortedWeekNumberArray.push(parseInt(plan.weekNumber));
    actualWeekNumber = weekNumberArray.reduce(function(prev, curr) {
        return (Math.abs(curr - realWeekOfYear) < Math.abs(prev - realWeekOfYear) ? curr : prev);
    });
})
console.log(weekNumberArray)

if (actualWeekNumber == realWeekOfYear){
    console.log('oryginał' + weekNumberArray)
    console.log('posortowana ' + sortedWeekNumberArray)
    indexNumber = weekNumberArray.indexOf(realWeekOfYear);
    showWeekNumber = realWeekOfYear;
    renderDays(indexNumber, showWeekNumber);
} else {
    indexNumber = weekNumberArray.indexOf(actualWeekNumber);
    showWeekNumber = actualWeekNumber;
    renderDays(indexNumber, showWeekNumber)
}


//Znajdujemy element w którym wyświelamy tydzień roku
function renderDays(index, number){
const weekNumber = document.querySelector('#weekNumber');
//Wyświetlamy tydzień roku
weekNumber.innerText = "Twój plan na " + number + " tydzień:";

//wyswietlanie w tabeli
//Poniedziałek
mondayBreakfast.innerText = allPlans[index].monday[0];
mondaySecBreakfast.innerText = allPlans[index].monday[1]; 
mondaySoup.innerText = allPlans[index].monday[2]; 
mondayMainCourse.innerText = allPlans[index].monday[3]; 
mondaySupper.innerText = allPlans[index].monday[4]; 
//Wtorek
tuesdayBreakfast.innerText = allPlans[index].tuesday[0];
tuesdaySecBreakfast.innerText = allPlans[index].tuesday[1];
tuesdaySoup.innerText = allPlans[index].tuesday[2];
tuesdayMainCourse.innerText = allPlans[index].tuesday[3];
tuesdaySupper.innerText = allPlans[index].tuesday[4];
//Środa
wednesdayBreakfast.innerText = allPlans[index].wednesday[0];
wednesdaySecBreakfast.innerText = allPlans[index].wednesday[1];
wednesdaySoup.innerText = allPlans[index].wednesday[2];
wednesdayMainCourse.innerText = allPlans[index].wednesday[3];
wednesdaySupper.innerText = allPlans[index].wednesday[4];
//Czwartek
thursdayBreakfast.innerText = allPlans[index].thursday[0];
thursdaySecBreakfast.innerText = allPlans[index].thursday[1];
thursdaySoup.innerText = allPlans[index].thursday[2];
thursdayMainCourse.innerText = allPlans[index].thursday[3];
thursdaySupper.innerText = allPlans[index].thursday[4];
//Piątek
fridayBreakfast.innerText = allPlans[index].friday[0];
fridaySecBreakfast.innerText = allPlans[index].friday[1];
fridaySoup.innerText = allPlans[index].friday[2];
fridayMainCourse.innerText = allPlans[index].friday[3];
fridaySupper.innerText = allPlans[index].friday[4];
//Sobota
saturdayBreakfast.innerText = allPlans[index].saturday[0];
saturdaySecBreakfast.innerText = allPlans[index].saturday[1];
saturdaySoup.innerText = allPlans[index].saturday[2];
saturdayMainCourse.innerText = allPlans[index].saturday[3];
saturdaySupper.innerText = allPlans[index].saturday[4];
//Niedziela
sundayBreakfast.innerText = allPlans[index].sunday[0];
sundaySecBreakfast.innerText = allPlans[index].sunday[1];
sundaySoup.innerText = allPlans[index].sunday[2];
sundayMainCourse.innerText = allPlans[index].sunday[3];
sundaySupper.innerText = allPlans[index].sunday[4];
}


const moveLeft = document.querySelector('.moveLeft');
const moveRight = document.querySelector('.moveRight');
moveLeft.addEventListener('click', function(){
    showWeekNumber = getClosestValue2(showWeekNumber, weekNumberArray)
    indexNumber = sortedWeekNumberArray.indexOf(showWeekNumber);
    console.log("numer tygodnia" + showWeekNumber)
    console.log("numer indexu" + indexNumber)
    console.log("przesuwam w dół")
    if(indexNumber == -1){
        showWeekNumber = Math.max.apply(null, weekNumberArray);
        indexNumber = weekNumberArray.indexOf(showWeekNumber);
        renderDays(indexNumber, showWeekNumber);
    } else {
        renderDays(indexNumber, showWeekNumber);
    }
}) 
moveRight.addEventListener('click', function(){
    showWeekNumber = getClosestValue(showWeekNumber, weekNumberArray)
    indexNumber = sortedWeekNumberArray.indexOf(showWeekNumber);
    if (indexNumber < 0) {
        indexNumber = 0;
        showWeekNumber = weekNumberArray[0];
        renderDays(indexNumber, showWeekNumber);
    } else {
        renderDays(indexNumber, showWeekNumber);
    }
    
})


function numberAs(a,b) {
    return a-b;
  }
  
  function getClosestValue(input, array){
    // When you sort your array as numerically then you will able to get exact closest position of next higher value.
   // If you don't sort your array numerically then you will get 110 instead of getting 90 when search value 1 in array 
    var index = array.sort(numberAs).findIndex((item) => {
    return input < item;
     });
    if(index > 0) {
      return array[index]; 
    } else {
      return null; // no answer
    }
  }
  
  function numberAs2(a,b) {
    return b-a;
  }
  
  function getClosestValue2(input, array){
    // When you sort your array as numerically then you will able to get exact closest position of next higher value.
   // If you don't sort your array numerically then you will get 110 instead of getting 90 when search value 1 in array 
    var index = array.sort(numberAs2).findIndex((item) => {
    return input > item;
     });
    if(index > 0) {
      return array[index]; 
    } else {
      return null; // no answer
    }
  }
  