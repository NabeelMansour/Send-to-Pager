
const btnPrimary = document.getElementById('phone__btn--primary')
const btnSecondary = document.getElementById('phone__btn--secondary')
let phoneNums = document.querySelectorAll('.phone__grid__items__num')
const phoneDisplay = document.getElementById('phone__display')
const pagerDisplay = document.getElementById('pager__display') 

document.addEventListener('click', function(e){
    phoneNums.forEach((num) => {
        if(num.innerHTML === e.target.innerText){
        // console.log(e.target.innerText)
        phoneDisplay.innerText += e.target.innerText
    }
    })
    
})

function myPlay() {
    const audio = new Audio("./assets/pager.wav");
    audio.play();
}

btnPrimary.addEventListener('click', ()=> {
    phoneDisplay.innerText = ''
})

btnSecondary.addEventListener('click', () => {
    setTimeout(() => {
        myPlay()
        pagerDisplay.innerText = phoneDisplay.innerText
}, 3000);
    
})