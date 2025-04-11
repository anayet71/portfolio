let btn =  document.querySelector('.chevron-btn')
let nav =  document.querySelector('.nav-custom')

btn.addEventListener('click', ()=>{
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });

    window.scrollTo({top: 0, behavior: 'smooth'} )
})


window.addEventListener('scroll', () => {
    let scrolling = window.scrollY
    if(scrolling > 210){
        btn.style.display = 'block'
        nav.style.backgroundColor = 'black'
        nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)'; // Soft black glow effect

    }
    else{
         btn.style.display = 'none'
        nav.style.backgroundColor = ''
    }
})