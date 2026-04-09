import { searchResultsData } from "./recetas.js";

console.log(searchResultsData.query.where);

let texto2 = "";

const formulario = document.querySelector('.formulario_vacaciones');

formulario.innerHTML = `
  <input type="text" class="dondevas" value="${searchResultsData.query.where}">
  <input type="text" class="fechainicial" value="${searchResultsData.query.checkin}">
  <input type="text" class="fechafinal" value="${searchResultsData.query.checkout}">
  <input type="text" class="Invitados" value="${searchResultsData.query.guests}">
` + formulario.innerHTML;


const contenedor = document.querySelector('.presupuesto');

texto2 = `
  <strong class="popular">Your budget per day</strong>
`;

for (let i = 0; i < searchResultsData.filters.budgetRanges.length; i++) {
  texto2 += `
    <div class="fila_presupuesto">
      <input type="checkbox">
      <p>$ ${searchResultsData.filters.budgetRanges[i].min} - $ ${searchResultsData.filters.budgetRanges[i].max}</p>
      <span>${searchResultsData.filters.budgetRanges[i].count}</span>
    </div>
  `;
}

texto2 += `
  <div class="fila_presupuesto">
    <div class="radio_contenedor">
      <p>Set your own Budget</p>
      <img src="/imagenes-pagina-principal/boton.png" alt="boton">
    </div>
  </div>
`;

contenedor.innerHTML = texto2;

const contenedor2 = document.querySelector('.Filtros');

texto2 = `<strong class="popular">Popular Filters</strong>`;

for (let i = 0; i < searchResultsData.filters.popularFilters.length; i++) {
  texto2 += `
    <div class="fila_presupuesto">
      <input type="checkbox">
      <p>${searchResultsData.filters.popularFilters[i].label}</p>
      <span>${searchResultsData.filters.popularFilters[i].count}</span>
    </div>
  `;
}

contenedor2.innerHTML = texto2;

const contenedor3 = document.querySelector('.Filtros2');
texto2="";

texto2 += `<strong class="popular">Activities</strong>`;

for (let i = 0; i < searchResultsData.filters.activities.length; i++) {
  texto2 += `
    <div class="fila_presupuesto">
      <input type="checkbox">
      <p>${searchResultsData.filters.activities[i].label}</p>
      <span>${searchResultsData.filters.activities[i].count}</span>
    </div>
  `;
}

contenedor3.innerHTML = texto2;

const cuadros = document.querySelectorAll('.Cuadros');


for (let i = 0; i < searchResultsData.results.length; i++) {
  cuadros[i].innerHTML = `
    <div class="Cuadro_imagenes">
      <img src="${searchResultsData.results[i].imatgeUrl}">
    </div>
    <div class="Centrar_cuadros">
      <div class="Cuadros_izquierda">
        <strong class="popular">${searchResultsData.results[i].name}</strong>
        <div class="Estrellas_opiniones">
          <img src="/imagenes-pagina-principal/estrellas.png" alt="Estrellas">
          <p>${searchResultsData.results[i].rating} - ${searchResultsData.results[i].reviewsCount}</p>
        </div>
        <div class="pyboton">
          <p class="pgris2">${searchResultsData.results[i].description}</p>
          <button><a href="product.html">See availability</a></button>
        </div>
      </div>
      <div class="Cuadros_derecha">
        <div class="subirp">
          <p class="projo" style="background-color:${searchResultsData.results[i].badge ? 'red' : 'white'}">
            ${searchResultsData.results[i].badge || ""}
          </p>
        </div>
        <div class="Cuadro_verde">
          <p class="pverde">5% off</p>
          <p class="pnormal">1 room 2 days</p>
        </div>
        <div class="rebajas_derecha">
          <p>${searchResultsData.results[i].oldPrice || ""}</p>
          <strong class="preciorebajado">${searchResultsData.results[i].pricePerNight}</strong>
        </div>
        <div class="pderecha">
          <p>Includes taxes and fees</p>
        </div>
      </div>
    </div>
  `;
}