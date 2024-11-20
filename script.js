
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

btnPrimary.addEventListener('click', ()=> {
    phoneDisplay.innerText = ''
})

btnSecondary.addEventListener('click', ()=>{
    pagerDisplay.innerText = phoneDisplay.innerText
})