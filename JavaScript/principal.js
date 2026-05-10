import { client } from "./recetas.js";

console.log("Base de datos cargada")

function qs(sel) {
  return document.querySelector(sel);
}

function renderitzarDestinacions(destinacionsDestacades) {

  var html = "";

  for (var i = 0; i < destinacionsDestacades.length; i++) {

    html += `
    
      <img src="${destinacionsDestacades[i].imatgeUrl}">
    
    `;

  }

  qs('.Fotos').innerHTML = html;



  qs('.Australia').innerHTML = `
  
    <strong>${destinacionsDestacades[0].nom}</strong>

    <p>
      ${destinacionsDestacades[0].propietatsCount}
      properties
    </p>
  
  `;

  qs('.Japon').innerHTML = `
  
    <strong>${destinacionsDestacades[1].nom}</strong>

    <p>
      ${destinacionsDestacades[1].propietatsCount}
      properties
    </p>
  
  `;

  qs('.NuevaZelanda').innerHTML = `
  
    <strong>${destinacionsDestacades[2].nom}</strong>

    <p>
      ${destinacionsDestacades[2].propietatsCount}
      properties
    </p>
  
  `;

  qs('.Grecia').innerHTML = `
  
    <strong>${destinacionsDestacades[3].nom}</strong>

    <p>
      ${destinacionsDestacades[3].propietatsCount}
      properties
    </p>
  
  `;

}

function renderitzarOfertes(ofertes) {

  var contenedores = document.querySelectorAll('.contenedor_inspiracion');

  contenedores[0].innerHTML =
  `<img src="${ofertes[0].imatgeUrl}">`
  + contenedores[0].innerHTML;

  contenedores[1].innerHTML =
  `<img src="${ofertes[1].imatgeUrl}">`
  + contenedores[1].innerHTML;

  contenedores[2].innerHTML =
  `<img src="${ofertes[2].imatgeUrl}">`
  + contenedores[2].innerHTML;



  qs('.sydney').innerHTML = `
  
    <h2>${ofertes[0].titol}</h2>

    <p>${ofertes[0].descripcio}</p>
  
  `;

  qs('.vegan').innerHTML = `
  
    <h2>${ofertes[1].titol}</h2>

    <p>${ofertes[1].descripcio}</p>
  
  `;

  qs('.montaña').innerHTML = `
  
    <h2>${ofertes[2].titol}</h2>

    <p>${ofertes[2].descripcio}</p>
  
  `;

}

function renderitzarHotels(hotelsPopulars) {

  var html = "";

  for (var i = 0; i < hotelsPopulars.length; i++) {

    html += `
    
      <img src="${hotelsPopulars[i].imatgeUrl}">
    
    `;

  }

  qs('.populares').innerHTML = html;



  qs('.Lakeside').innerHTML = `
  
    <strong>${hotelsPopulars[0].nom}</strong>

    <p>
      ${hotelsPopulars[0].propietatsCount}
      properties
    </p>
  
  `;

  qs('.Recce').innerHTML = `
  
    <strong>${hotelsPopulars[1].nom}</strong>

    <p>
      ${hotelsPopulars[1].propietatsCount}
      properties
    </p>
  
  `;

  qs('.Fireside').innerHTML = `
  
    <strong>${hotelsPopulars[2].nom}</strong>

    <p>
      ${hotelsPopulars[2].propietatsCount}
      properties
    </p>
  
  `;

  qs('.Oculous').innerHTML = `
  
    <strong>${hotelsPopulars[3].nom}</strong>

    <p>
      ${hotelsPopulars[3].propietatsCount}
      properties
    </p>
  
  `;

}

async function carregarPagina() {

  var resultatDestinacions = await client
  .from("destinacionsDestacades")
  .select("*");

  var destinacionsDestacades =
  resultatDestinacions.data || [];



  var resultatOfertes = await client
  .from("ofertes")
  .select("*");

  var ofertes =
  resultatOfertes.data || [];



  var resultatHotels = await client
  .from("hotelsPopulars")
  .select("*");

  var hotelsPopulars =
  resultatHotels.data || [];



  renderitzarDestinacions(destinacionsDestacades);

  renderitzarOfertes(ofertes);

  renderitzarHotels(hotelsPopulars);

}

carregarPagina();