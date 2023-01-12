const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');
const footerYear= document.querySelector('.footer__year')

const displayNav = () =>{
    nav.classList.toggle('nav--active')

    navItems.forEach(item=>{
        item.addEventListener('click', ()=>{
            nav.classList.remove('nav--active')
        })
    })
}
const handleCurrentYear = ()=>{
    const year=(new Date).getFullYear()
footerYear.innerHTML = year;
}

handleCurrentYear()
burgerBtn.addEventListener('click', displayNav);


