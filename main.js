const ddBtn = document.querySelector('.dropdown-btn')
const ddMenu = document.querySelector('.options-dd')

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


