var weekproductOrder = document.querySelector('.week-product__order');
var modalCart = document.querySelector('.modal-cart');


weekproductOrder.addEventListener('click', function(event) {
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
