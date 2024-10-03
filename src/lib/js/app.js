console.log('hola');
// import checkScreen from './js/mediamatch'



((d, w) => {




  // NAVBAR FIXED
  const navBar = d.querySelector("#navbar")
  window.addEventListener("scroll", () => {
    let posScroll = w.scrollY
    navBar.classList.toggle("sticky", posScroll > 0)
  })
  // NAVBAR FIXED

  // MENU MOBILE
  // const btnOpen = d.querySelector("#button-open") 
  // const navMobile = d.querySelector("#nav-mobile") 

  // function openMenuMob () { navMobile.classList.toggle("visible");}
  // function closeMenuMob () { navMobile.classList.remove("visible");}
  // btnOpen.addEventListener("click", openMenuMob);
  // navMobile.addEventListener("click", ()=>{ closeMenuMob() });
  // MENU MOBILE

  // BUTTON GO TOP

  // const btnTop = d.querySelector("#button-go-top")
  // w.addEventListener("scroll", () => {
  //   btnTop.classList.toggle("visible", (w.scrollY > 400))

  // })

 // MENU MOBILE
    // const btnOpen = document.querySelector("#button-open") 
    // const navMobile = document.querySelector("#nav-mobile") 
    
    // function openMenuMob () { navMobile.classList.toggle("visible");}
    // function closeMenuMob () { navMobile.classList.remove("visible");}
    // btnOpen.addEventListener("click", openMenuMob);
    // navMobile.addEventListener("click", ()=>{ closeMenuMob() });
// MENU MOBILE

  // MEDIA MACTCH  ///////////////////

  // FIN MEDIA MACTCH  ///////////////

  // SCROLL NAVIGATION ///////////////////////////////////
  d.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));

      // Ajusta estos valores según tus preferencias
      const scrollOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        speed: 500, // milisegundos
        easing: 'easeOutElastic'
      };

      targetElement.scrollIntoView(scrollOptions);
    });
  })
  // CON GSAP >>>>>>><



  // SCROLL NAVIGATION ///////////////////////////////////


})(document, window)


