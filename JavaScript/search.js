import { client } from "./recetas.js";

function qs(sel) {
  return document.querySelector(sel);
}

function renderitzarQuery(queryData) {
  qs('.formulario_vacaciones').innerHTML = `

    <input type="text" class="dondevas" value="${queryData.where}">
    <input type="text" class="fechainicial" value="${queryData.checkin}">
    <input type="text" class="fechafinal" value="${queryData.checkout}">
    <input type="text" class="Invitados" value="${queryData.guests}">

  ` + qs('.formulario_vacaciones').innerHTML;
}

function renderitzarBudget(budgetRanges) {
  let html = `
    <strong class="popular">Your budget per day</strong>
  `;

  for (let i = 0; i < budgetRanges.length; i++) {
    html += `
      <div class="fila_presupuesto">
        <input type="checkbox">
        <p>$ ${budgetRanges[i].min} - $ ${budgetRanges[i].max}</p>
        <span>${budgetRanges[i].count}</span>
      </div>
    `;
  }

  html += `
    <div class="fila_presupuesto">
      <div class="radio_contenedor">
        <p>Set your own Budget</p>
        <img src="/imagenes-pagina-principal/boton.png">
      </div>
    </div>
  `;

  qs('.presupuesto').innerHTML = html;
}

function renderitzarPopularFilters(popularFilters) {
  let html = `
    <strong class="popular">Popular Filters</strong>
  `;

  for (let i = 0; i < popularFilters.length; i++) {
    html += `
      <div class="fila_presupuesto">
        <input type="checkbox">
        <p>${popularFilters[i].label}</p>
        <span>${popularFilters[i].count}</span>
      </div>
    `;
  }

  qs('.Filtros').innerHTML = html;
}

function renderitzarActivities(activities) {
  let html = `
    <strong class="popular">Activities</strong>
  `;

  for (let i = 0; i < activities.length; i++) {
    html += `
      <div class="fila_presupuesto">
        <input type="checkbox">
        <p>${activities[i].label}</p>
        <span>${activities[i].count}</span>
      </div>
    `;
  }

  qs('.Filtros2').innerHTML = html;
}

function renderitzarResults(results, totalResults, where) {

  qs('.Parte_centro').innerHTML = "";

  qs('.Parte_centro').innerHTML += `
    <div class="resultados_total">

      <strong>
        ${where} : ${totalResults} search results found
      </strong>

      <div class="botonesyselect">

        <div class="botones">
          <button class="Picks"><span>Our top picks</span></button>
          <button class="Hotel">Hotel and apartments</button>
          <button class="Residencia">Residence</button>
          <button class="Resorte">Resort</button>
          <button class="Espacio_compartido">Shared Space</button>
        </div>

        <div class="parte_select">
          <label class="Sortby">Sort by</label>

          <select class="Busqueda_hoteles">
            <option>Recommended</option>
            <option>Lowest price</option>
            <option>Highest price</option>
            <option>Trending</option>
          </select>

        </div>

      </div>
    </div>
  `;

  for (let i = 0; i < results.length; i++) {
    qs('.Parte_centro').innerHTML += `
      <div class="Cuadros">

        <div class="Cuadro_imagenes">
          <img src="${results[i].imatgeUrl}">
        </div>

        <div class="Centrar_cuadros">

          <div class="Cuadros_izquierda">

            <strong>${results[i].name}</strong>

            <div class="Estrellas_opiniones">
              <img src="/imagenes-pagina-principal/estrellas.png">
              <p>${results[i].rating} - ${results[i].reviewsCount}</p>
            </div>

            <div class="pyboton">
              <p class="pgris2">${results[i].description}</p>

              <button>
                <a href="product.html">See availability</a>
              </button>
            </div>

          </div>

          <div class="Cuadros_derecha">

            <div class="subirp">
              <p class="projo" style="background-color:${results[i].badge ? 'red' : 'transparent'}">
                ${results[i].badge || ""}
              </p>
            </div>

            <div class="Cuadro_verde">
              <p class="pverde">5% off</p>
              <p class="pnormal">1 room 2 days</p>
            </div>

            <div class="rebajas_derecha">
              <p>${results[i].oldPrice || ""}</p>
              <strong>${results[i].pricePerNight}</strong>
            </div>

            <div class="pderecha">
              <p>Includes taxes and fees</p>
            </div>

          </div>

        </div>

      </div>
    `;
  }
}

async function carregarPagina() {

  const { data: row} = await client
    .from("searchResultsData")
    .select("data")
    .eq("section", "search")
    .single();


  const data = row.data;

  renderitzarQuery(data.query);
  renderitzarBudget(data.filters.budgetRanges);
  renderitzarPopularFilters(data.filters.popularFilters);
  renderitzarActivities(data.filters.activities);
  renderitzarResults(data.results, data.totalResults, data.query.where);
}

carregarPagina();