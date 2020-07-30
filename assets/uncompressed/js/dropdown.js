/* ------------------------------------------------------------------------------------------------------
   ------------------------------------------------------------------------------------------------------  */
// Dropdown menu function
(function () {
    var burger = document.querySelector('.burger-container'),
      header = document.querySelector('.top-navigation');
  
    burger.onclick = function () {
      header.classList.toggle('menu-opened');
    }
  }());