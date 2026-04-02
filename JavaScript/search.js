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