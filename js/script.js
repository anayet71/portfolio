let btn =  document.querySelector('.chevron-btn')
let nav =  document.querySelector('.nav-custom')

btn.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'} )
})


window.addEventListener('scroll', () => {
    let scrolling = window.scrollY
    if(scrolling > 210){
        btn.style.display = 'block'
        nav.style.backgroundColor = 'black'

    }
    else{
         btn.style.display = 'none'
        nav.style.backgroundColor = ''
    }
})