

burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav-listt');
rightNav = document.querySelector('.rightNav');

console.log(nav_list);

console.log(__dirname);

console.log("hey there i am pandey ji");

burger.addEventListener('click', ()=>{

    rightNav.classList.toggle('hid-kar');
    nav_list.classList.toggle('hid-kar');
    navbar.classList.toggle('h-nav-resp');
})

