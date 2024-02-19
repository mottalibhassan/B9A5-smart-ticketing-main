let sitNUmber = document.getElementById('sitNumbers').innerText;
let sitNumbers = 36;
let totalSit = 0;
const sitClass = "Economoy";
let sitCount = 0;

const allSit =document.querySelectorAll('.sit');
for (let sit of allSit){
    sit.addEventListener('click',function(){
        // sit.classList.add('bg-[#1dd100]');
        // sitNumbers = sitNumbers-1;
        totalSit ++;
        // setNewSit('sitNumbers',sitNumbers);
        // setNewSit('sitPurses',totalSit);
        const sitName = event.target.innerText;
        if( totalSit <= 4){
            sit.classList.add('bg-[#1dd100]');
            const sitClass = "Economoy";
            sitCount = sitCount +1 ;
            // console.log( typeof sitCount);
            setNewSit('sitPurses',sitCount);
            sitNumbers = sitNumbers- 1;
            // console.log(sitNumbers);
            setNewSit('sitNumbers',sitNumbers);
            // setNewSit('sitPurses',totalSit);
            const sitdetails = document.getElementById('sitDetails');
            const tickerprice = document.getElementById('tickerPrice').innerText;
            const placeDetails = document.getElementById('sitDetailsContainer');
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
            activeElement('pursesConfurmButton');
        }
        else{
            alert('You have reached the maximum limit of 4 seats.');
            // totalSit --;
        }
        // console.log(sitName);
        // const sitdetails = document.getElementById('sitDetails');
        // const tickerprice = document.getElementById('tickerPrice').innerText;
        // console.log(tickerprice);
        // console.log(sitClass);
        // const placeDetails = document.getElementById('sitDetailsContainer');
        // const CreatSpace = document.createElement('placeDetails');
        // const p = document.createElement('p');
        // p.innerText=sitName;
        // const p2 = document.createElement('p2');
        // p2.innerText=sitClass;
        // const p3 =document.createElement('p3');
        // p3.innerText=tickerprice;
        // CreatSpace.appendChild('p');
        // const li = document.createElement('li');
        // const p = document.createElement('p');
        // p.innerText=sitName;
        // const p2 = document.createElement('p2');
        // p2.innerText=sitClass;
        // const p3 =document.createElement('p3');
        // p3.innerText=tickerprice;
        // li.appendChild(p);
        // li.appendChild(p2);
        // li.appendChild(p3);
        // placeDetails.appendChild(li);
        // placeDetails.appendChild(p2);
        // placeDetails.appendChild(p3);
        // setNewSit('totalPrice', totalAmountOfTicket);
        const number = findElement('sitPurses');
        const convertNumbers = parseInt(number);
        let totalAmountOfTicket = convertNumbers *550;
        setNewSit('totalPrice',totalAmountOfTicket);
        // console.log(totalAmountOfTicket);
        // document.getElementById('totalPrice').innerText = totalAmountOfTicket;
        // const promoCode = document.getElementById('promoCodeFild').value;
        // const promo = promoCode.split(" ").join(""). toUpperCase();
        // if(promo ==='NEW15' || promo ==='COUPLE20'){
        //     const off15 = totalAmountOfTicket * 0.15;
        //     console.log(off15);
        // }
    })
}

// purses successful pop up

function popup(){
    hideElement('headerContainer');
    hideElement('footerSection');
    hideElement('mainContainer');
    showElement('popupView');
}
function normal(){
    hideElement('popupView');
    showElement('headerContainer');
    showElement('footerSection');
    showElement('mainContainer');
}

const promoCodeButton = document.getElementById('promoCodeBtn');
promoCodeButton.addEventListener( "click" , function() {
    // console.log('btn clicked');
    const inputFild = document.getElementById('promoCodeFild').value;
    // console.log(inputFild);
    if( inputFild === 'NEW15'){
        console.log('NEW15');
        // console.log(totalAmountOfTicket);
        const dis = document.getElementById('totalPrice').innerText;
        const conDis = parseFloat(dis); 
        const conDisAmo = conDis * 0.15;
        const grandAmountTotal = conDis - conDisAmo;
        console.log(typeof conDisAmo);
        // const discountShow = document.getElementById('discountAmountShow').innerText;
        // discountShow.innerText= conDisAmo;
        setNewSit('discountAmountShow',conDisAmo);
        setNewSit('totalGrandAmount',grandAmountTotal);
    }
    else if( inputFild === 'Couple 20'){
        const dis = document.getElementById('totalPrice').innerText;
        const conDis = parseFloat(dis); 
        const conDisAmo = conDis * 0.20;
        const grandAmountTotal = conDis - conDisAmo;
        console.log(typeof conDisAmo);
        // ---------------------------
        setNewSit('discountAmountShow',conDisAmo);
        setNewSit('totalGrandAmount',grandAmountTotal);
    }
    else{
        console.log('you dont have any discount');
    }
});