const allSit =document.querySelectorAll('.sit');
for (let sit of allSit){
    sit.addEventListener('click',function(){
        sit.classList.add('bg-emerald-500');
    })
}