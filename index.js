let sitNUmber = document.getElementById('sitNumbers').innerText;
// sitNUmber.innerText=sitNumbers
let sitNumbers = 36;
let totalSit = 0;
const sitClass = "Economoy";

const allSit =document.querySelectorAll('.sit');
for (let sit of allSit){
    sit.addEventListener('click',function(){
        sit.classList.add('bg-[#1dd100]');
        sitNumbers = sitNumbers-1;
        totalSit ++;
        setNewSit('sitNumbers',sitNumbers);
        setNewSit('sitPurses',totalSit);
        const sitName = event.target.innerText;
        // console.log(sitName);
        const sitdetails = document.getElementById('sitDetails');
        const tickerprice = document.getElementById('tickerPrice').innerText;
        // console.log(tickerprice);
        // console.log(sitClass);
        const placeDetails = document.getElementById('sitDetailsContainer');
        // const CreatSpace = document.createElement('placeDetails');
        // const p = document.createElement('p');
        // p.innerText=sitName;
        // const p2 = document.createElement('p2');
        // p2.innerText=sitClass;
        // const p3 =document.createElement('p3');
        // p3.innerText=tickerprice;
        // CreatSpace.appendChild('p');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText=sitName;
        const p2 = document.createElement('p2');
        p2.innerText=sitClass;
        const p3 =document.createElement('p3');
        p3.innerText=tickerprice;
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        placeDetails.appendChild(li);
        // placeDetails.appendChild(p2);
        // placeDetails.appendChild(p3);
        // setNewSit('totalPrice', totalAmountOfTicket);
        const number = findElement('sitPurses');
        const convertNumbers = parseInt(number);
        let totalAmountOfTicket = convertNumbers *550;
        console.log(totalAmountOfTicket);
        document.getElementById('totalPrice').innerText = totalAmountOfTicket;
    })
}

