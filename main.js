const ddBtn = document.querySelector('.dropdown-btn')
const ddMenu = document.querySelector('.options-dd')
const submitContact = document.querySelector('.submit-contact')
const thankYou = document.querySelector('.thank-you')
const mainPage = document.querySelector('.main-page-wrap')

ddBtn.addEventListener('click', () => {
    if(ddBtn.classList.contains('active')){
        ddBtn.classList.toggle('active')
        ddMenu.classList.add('hidden')
    }else{
        ddBtn.classList.toggle('active')
        ddMenu.classList.remove('hidden')
    }
})

window.onresize = () => {
    location.reload()
}

if(window.innerWidth <= 850){
    document.querySelector('.options').classList.add('hidden')
    ddBtn.classList.remove('hidden')
}

submitContact.addEventListener('click', () => {
    thankYou.classList.toggle('hidden')
    mainPage.classList.toggle('hidden')
})

thankYou.addEventListener('click', () => {
    thankYou.classList.toggle('hidden')
    mainPage.classList.toggle('hidden')
})


