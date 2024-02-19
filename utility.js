function hideElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElement(elementId2){
    const elementShow = document.getElementById(elementId2);
    elementShow.classList.remove('hidden');
}
function activeElement(elementId2){
    const elementShow = document.getElementById(elementId2);
    // elementShow.classList.remove('hidden');
    elementShow.removeAttribute('disable');
}
function addBackgroundColor(element){
    const background = document.getElementById(element);
    background.classList.add('bg-[#1dd100]');
}
function removeBackgroundColor(element){
    const background = document.getElementById(element);
    background.classList.remove('bg-[#1dd100]');
}

function setNewSit(element ,value){
    const scoreElement = document.getElementById(element);
    scoreElement.innerText = value;
}

function findElement (element){
    const elemenT = document.getElementById(element);
    const ele = elemenT.innerText;
    return ele;
}