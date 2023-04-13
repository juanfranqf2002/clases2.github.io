console.log('Hello!');

/*alert('Hola');*/
var i = 0;
var elemento = document.getElementById('titulo1');
var resp = document.getElementById('resp');
elemento.addEventListener('click', function () {
  //resp.innerHTML = i;
  nuevoParrafo();
});

elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
  resp.innerHTML = i;
  elemento.classList.add('menu');
});

/**Para la clase */
var listas = document.getElementsByTagName('li');
console.log(listas);

var menu = document.getElementById('menu');
var lists = menu.getElementsByTagName('a');
/**console.log(lists);*/

var listS = document.querySelectorAll('nav a');
console.log(listS);

//var list2S = document.querySelectorAll('main ol li');
//console.log(list2S);

var list2S = document.querySelectorAll('main ol li:nth-child(odd)'); //impares
console.log(list2S);

function nuevoParrafo() {
  // Seleccionamos el div vacío usando su ID
  var miDiv = document.getElementById('mi-div');

  // Creamos un nuevo elemento de <p>
  var nuevoParrafo = document.createElement('p');

  // Agregamos texto al nuevo elemento
  nuevoParrafo.innerHTML = '¡Hola, mundo!';

  // Agregamos el nuevo elemento como hijo del div
  miDiv.appendChild(nuevoParrafo);
}
//funcion boton

function addLink() {
  console.log('add limk 1');
  var link = document.createElement('li');
  link.innerHTML = "<a href='https://www.google.com/'>Google</a>";
  var li = document.querySelector('main ol');
  li.appendChild(link);
  var list2S = document.querySelectorAll('main ol li:nth-child(odd)'); //impares
  for (let li of list2S) {
    list2S.classList.add('menu');
  }
  //list2S.classList.add('desplazar');
}
var elementoBoton = document.getElementById('addLink');
elementoBoton.addEventListener('click', function () {
  addLink();
});
