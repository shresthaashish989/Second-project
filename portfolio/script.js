let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
 };

 let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

 window.onscroll = () => {
   sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 100;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if (top >= offset && top < offset + height) {
       // Active navbar links
       navLinks.forEach(link => {
        if (link.classList.contains('active') && link.getAttribute('href') !== `#${id}`) {
          link.classList.remove('active');
        } else if (!link.classList.contains('active') && link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
       });
      // active sections for animation on scroll
       sec.classList.add('show-animate');
     } else {
       sec.classList.remove('show-animate');
      }
   });

   // Sticky header
   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  let footer = document.querySelector('footer'); footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);

 };
