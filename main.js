console.log("Hello");
// where printToDom function goes
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};
// where the for loop goes and iterates and prints to Dom
const domString = (fancyArray) => {
    let domString = "";
    fancyArray.forEach((animals) => {
    domString += `<h1>${animals.name}</h1>`;
    })
printToDom(domString, 'card-holder')
};

// change the json data to array and excute the function and passes it to the domString

function executeThisCodeAfterFileLoad () {
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.animals);


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