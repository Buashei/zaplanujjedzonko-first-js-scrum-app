//Imię w header
const testowe = document.querySelector(".nameInfo");
testowe.innerText = window.localStorage.getItem('savedName');

const clearStorage = document.querySelector(".clearStorage");

clearStorage.addEventListener("click", function () {
    localStorage.clear();
});


//  funkcja renderPlanList wyświetlająca przepis

const addTableRow = document.querySelector("#addTableRowSchedules"); // d.oznaczony w tym miejscu dodawać będę rowy 
console.log(addTableRow);

function renderPlanList() {
    const allSchedules = JSON.parse(localStorage.getItem("plan"));
    allSchedules.forEach(function (element) {
        const mojeID = element.id;
        const mojeName = element.title;
        const mojOpis = element.description;
        const mojWeek = element.weekNumber;

        const newRow = document.createElement('tr');
        newRow.classList.add("row");
        newRow.classList.add("tableBody");
        addTableRow.appendChild(newRow); //tworze nowy rząd

        const elementID = document.createElement('td'); // tworzę nową td w rzędzie - zmienna ID
        elementID.classList.add("col-1");
        newRow.appendChild(elementID);
        elementID.innerText = mojeID;

        const elementName = document.createElement('td'); // tworzę nową td w rzędzie - zmienna Name
        elementName.classList.add("col-1");
        newRow.appendChild(elementName);
        elementName.innerText = mojeName;

        const elementNowHow = document.createElement('td'); // tworzę nową td w rzędzie - zmienna Opis
        elementNowHow.classList.add("col-4");
        newRow.appendChild(elementNowHow);
        elementNowHow.innerText = mojOpis;

        const elementWeek = document.createElement('td'); // tworzę nową td w rzędzie - zmienna Opis
        elementWeek.classList.add("col-1");
        newRow.appendChild(elementWeek);
        elementWeek.innerText = mojWeek;


        const elementInfo = document.createElement('td'); // tworzę dic z ikonami w ostatnim td - stałe 
        elementInfo.classList.add("col-1");
        newRow.appendChild(elementInfo);
        const elementIkons = document.createElement('div');
        elementIkons.innerHTML = '<i class="far fa-edit"></i>' + '<i class="far fa-trash-alt"></i>';
        elementInfo.appendChild(elementIkons);

        const editButton = document.querySelectorAll('.fa-edit');
        editButton.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                console.log('nie ma gdzie edytować');
            });
        });

        const trashButton = document.querySelectorAll('.fa-trash-alt');

        trashButton.forEach(function (element) {
            element.addEventListener('click', function (event) {
                event.stopImmediatePropagation();
                const rowDelete = this.parentElement.parentElement.parentElement;
                rowDelete.parentElement.removeChild(rowDelete);

                localStorage.removeItem('plan');
                const deletePlan = this.parentElement.parentElement.parentElement.firstChild.innerText;
                allSchedules.forEach(function(element,index){
                    if(element.id == deletePlan){
                        allSchedules.splice(index, 1);
                    }
                })
                localStorage.setItem('plan', JSON.stringify(allSchedules));

            });
        });



    });
}



renderPlanList();

