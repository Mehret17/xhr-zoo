console.log("Hello");
// where printToDom function goes
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};
// where the for loop goes and iterates and prints to Dom

// the if statment to check if its carnivores or vegetable issue#5
const domString = (fancyArray) => {
      let domString = "";
    fancyArray.forEach((animals) => {
        if(animals.isCarnivore){
            domString += `<div class="animal carnivore">`;
            } else {
            domString += `<div class="animal vegetable">`;
        }
    domString +=    `<h1>${animals.name}</h1>`;
    domString +=    `<h3>${animals.number}</h3>`;
    domString +=    `<img class="animal-image" src="${animals.imageUrl}" alt="">`;
    domString +=    `<div class="button-container">`;
    domString +=      `<button class="escaped">Escaped</button>`;
    domString +=    `</div>`;
    domString += `</div>`;

    });
printToDom(domString, 'zoo')
};


const animalsEscaped =() => { console.log(animalsEscaped);
    showCarnivore();
    showVegetable();
}

//issue #5
const addEventListeners = () => {
   const escapedButtons = document.getElementsByClassName('escaped');
   console.log (escapedButtons);

   for (let i=0; i<escapedButtons.length; i++) {
       escapedButtons[i].addEventListener ('click', animalsEscaped)
   }
};


//takes out the escaped button and add red for the carnivores 
const showCarnivore = () => {
    const carnivores = document.getElementsByClassName('carnivore');
    console.log (carnivores); 
    for (let j=0; j<carnivores.length; j++) {
        carnivores[j].children[3].innerHTML ='';
        carnivores[j].classList.add('red');
    }
};

const showVegetable = () => {
    const vegetable = document.getElementsByClassName('vegetable');
    for (let k=0; k<vegetable.length; k++) {
        vegetable[k].children[3].innerHTML =`<button>EAT ME!!!</button>`;
        vegetable[k].classList.add('green');
    }
};

// change the json data to array and excute the function and passes it to the domString

function executeThisCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.animals);
    addEventListeners();

}
// error function
function executeThisLoadIfXHRFails () {
 console.log ("something went wrong");
}

// the xhr request callback function
const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener ("load",executeThisCodeAfterFileLoad);
    myRequest.addEventListener("error", executeThisLoadIfXHRFails);
    myRequest.open ("GET", "animals.json");
    myRequest.send();

};

startApplication();