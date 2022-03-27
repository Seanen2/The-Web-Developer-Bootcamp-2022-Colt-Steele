// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const lista = document.querySelector("#list");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = form.elements.product;
  const qty = form.elements.qty;
  submit(product.value, qty.value);
  product.value = " ";
  qty.value = " ";
});

const submit = (product, qty) => {
  const newProduct = document.createElement("li");
  newProduct.append(`${qty} ${product}`);
  lista.append(newProduct);
};
