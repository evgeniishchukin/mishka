var modalCart = document.querySelector('.modal-cart');
var catalogItem1 = document.querySelector('.catalog-item:nth-child(2) .catalog-item__link');
var catalogItem2 = document.querySelector('.catalog-item:nth-child(3) .catalog-item__link');
var catalogItem3 = document.querySelector('.catalog-item:nth-child(4) .catalog-item__link');

catalogItem1.addEventListener('click', function(event) {
  event.preventDefault();
  modalCart.classList.add('modal-cart--open');
});

catalogItem2.addEventListener('click', function(event) {
  event.preventDefault();
  modalCart.classList.add('modal-cart--open');
});

catalogItem3.addEventListener('click', function(event) {
  event.preventDefault();
  modalCart.classList.add('modal-cart--open');
});

window.addEventListener ("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modalCart.classList.contains("modal-cart--open")) {
        modalCart.classList.remove("modal-cart--open");
      }
    }
  });
