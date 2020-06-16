const menuOpenBtn = document.querySelector('.main-menu__btn');
const menu = document.querySelector('.main-menu__container');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const allElements = document.querySelectorAll('body > *');
const brandIcon = document.querySelector('.main-header-brand__name');
const header = document.querySelector('.main-header');

menuOpenBtn.addEventListener('click',()=>{
 
    allElements.forEach((ele,index)=>{
        if(ele.className !== "main-menu__container"){
            ele.classList.add('blur');
        }
    });
     menu.classList.add('open-menu');
});


menuCloseBtn.addEventListener('click',()=>{
    menu.classList.remove('open-menu');
    allElements.forEach((ele,index)=>{
        if(ele.className !== "main-menu__container"){
            ele.classList.remove('blur');
        }
    });
});

menu.addEventListener('click',()=>{
    menu.classList.remove('open-menu');
    allElements.forEach((ele,index)=>{
        if(index !== 1){
            ele.classList.remove('blur');
        }
    });
});


window.addEventListener('scroll',()=>{
    if(window.innerWidth <= 400 )
    {
        if(window.scrollY >= 380)
        {
            brandIcon.classList.add('visible');
            header.classList.add('main-header-bg'); 
            menuOpenBtn.classList.add("main-menu__btn-black");   
        }
        else{
            brandIcon.classList.remove('visible');
            header.classList.remove('main-header-bg');
            menuOpenBtn.classList.remove("main-menu__btn-black");   
        }
    }

    else 
    {
        if(window.scrollY >= 550){
            brandIcon.classList.add('visible');
            header.classList.add('main-header-bg');
            menuOpenBtn.classList.add("main-menu__btn-black");   
         }
        else{
            brandIcon.classList.remove('visible');
            header.classList.remove('main-header-bg');
            menuOpenBtn.classList.remove("main-menu__btn-black");   
        }
    }
});

