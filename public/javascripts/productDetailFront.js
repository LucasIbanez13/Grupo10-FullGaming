document.addEventListener("DOMContentLoaded", function () {
    const productPrecio = document.getElementById("productPrecio");

    const discount = parseFloat(productPrecio.getAttribute("data-discount"));

    if (discount > 0) {
        productPrecio.querySelector('.discounted-price');
        productPrecio.querySelector('.discounted-price').style.fontSize = "1.5em";
    }
});