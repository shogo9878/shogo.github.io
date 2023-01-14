'use strict';


{
  const menu = document.getElementById('menu');
  const opMenu= document.getElementById('op-menu');
  const targets = document.querySelectorAll('.animate');
  const lists = document.querySelectorAll('.menu-nav-item h3');



  opMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
    opMenu.classList.toggle('open');
  });


  lists.forEach(el => {
    el.addEventListener('click', () => {
      el.parentNode.classList.toggle('appear');
    });
  });


  function callback(entries) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return
      }

      entry.target.classList.add('appear');
    });
  }


  const observer = new IntersectionObserver(callback,{
    threshold:0.3,
  });

  targets.forEach(target => {
    observer.observe(target);
  });



}