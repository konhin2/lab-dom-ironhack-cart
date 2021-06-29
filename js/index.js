// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // Variables
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const subtotalOption = Number(price.innerHTML) * Number(quantity.value)
  subtotal.innerHTML = subtotalOption
  return subtotalOption
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const product = document.getElementsByClassName('product')
  let total = 0
  for (const elemento of product) {
    total += updateSubtotal(elemento)
  }


  // ITERATION 3
  //... your code goes here
  const totalTag = document.querySelector('#total-value span')
  totalTag.innerHTML = total
  return total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // node patern sirve para ir una rama hacia arriba en el DOM, lo que hice fue contar las ramas hasta donde queria borrar que era hasta el tr y eran nos ramas por encima del button
  let file = target.parentNode.parentNode
  let parent = file.parentNode
  parent.removeChild(file)
}


// ITERATION 5

function createProduct() {
  // Ubicando los valores a utilizar para la nueva fila
  let productName = document.querySelector('.newProductName').value
  let productPrice = document.querySelector('.newProductPrice').value

  // Ubicando el pariente donde se insertara la fila y creando la fila 'tr'
  let parent = document.querySelector('#cart tbody')
  let trTag = document.createElement('tr')
  trTag.setAttribute('class', 'product')


  

  // Primer elemento de la fila Nombre del preducto
  let td = document.createElement('td')
  let span = document.createElement('span')
  // Nombre de la clase del td del name
  td.setAttribute('class', 'name')
  // Asignando valor
  span.innerText = productName
  // insercion 
  td.appendChild(span)
  trTag.appendChild(td)

  // Segundo elemento de la fila Price
  td = document.createElement('td')
  span = document.createElement('span')
  // Classe
  td.setAttribute('class', 'price')
  // Valores
  td.innerText = `$`
  span.innerText = productPrice
  // insercion
  td.appendChild(span)
  trTag.appendChild(td)

  // Tercer elemento
  td = document.createElement('td')
  let input = document.createElement('input')
  // Class
  td.setAttribute('class', 'quantity')
  input.setAttribute('type', 'number')
  input.setAttribute('value', '0')
  input.setAttribute('min', '0')
  input.setAttribute('placeholder', 'Quantity')
  // Insercion
  td.appendChild(input)
  trTag.appendChild(td)

  // Cuarto elemento
  td = document.createElement('td')
  span = document.createElement('span')
  // Class
  td.setAttribute('class', 'subtotal')
  // Valores
  td.innerText = `$`
  span.innerText = '0'
  // Insercion
  td.appendChild(span)
  trTag.appendChild(td)

  // Quinto elemento
  td = document.createElement('td')
  let button = document.createElement('button')
  // Class
  td.setAttribute('class', 'action')
  td.setAttribute('id', 'remove')
  button.setAttribute('class', 'btn btn-remove')
  // Valores
  button.innerText = 'Remove'
  // Insercion
  td.appendChild(button)
  trTag.appendChild(td)
  // Esta linea es necesaria para devolver a la tbody todos los td acoculados en la variable trTag
  parent.appendChild(trTag)
  // Funcionalidad al boton
  let removeNew = trTag.querySelector('.btn-remove')
  removeNew.addEventListener('click', removeProduct)
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // Delete
  const buttonElements = document.getElementsByClassName('btn-remove');
  for (let eachButton of buttonElements) {
    eachButton.addEventListener('click', removeProduct);
  }
  // Adding
  const addingBtn = document.getElementById('create');
  addingBtn.addEventListener('click', createProduct);
});