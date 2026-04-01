console.log("Hola destinacionsDestacades");


import { destinacionsDestacades } from "./recetas.js";
console.log(destinacionsDestacades);

const divfotos = document.querySelector('.Fotos');
let i = 0;
let texto = "";

for (i=0; i<destinacionsDestacades.length;i++) {
    texto += `<img src="${destinacionsDestacades[i].imatgeUrl}"> `;

};

divfotos.innerHTML=texto;

const divAustralia = document.querySelector('.Australia');
const divJapon = document.querySelector('.Japon');
const divNuevaZelanda = document.querySelector('.NuevaZelanda');
const divGrecia = document.querySelector('.Grecia');

let texto2 = "";
for (let i=0; i<1;i++) {
    texto2+= `<strong> ${destinacionsDestacades[i].nom}</strong>
              <p> ${destinacionsDestacades[i].propietatsCount} properties</p> `

}

divAustralia.innerHTML=texto2;

texto2 = "";
for (let i=1; i<2;i++) {
    texto2+= `<strong> ${destinacionsDestacades[i].nom}</strong>
              <p> ${destinacionsDestacades[i].propietatsCount} properties</p> `

}

divJapon.innerHTML=texto2;

texto2 = "";
for (let i=2; i<3;i++) {
    texto2+= `<strong> ${destinacionsDestacades[i].nom}</strong>
              <p> ${destinacionsDestacades[i].propietatsCount} properties</p> `

}

divNuevaZelanda.innerHTML=texto2;

texto2 = "";
for (let i=3; i<4;i++) {
    texto2+= `<strong> ${destinacionsDestacades[i].nom}</strong>
              <p> ${destinacionsDestacades[i].propietatsCount} properties</p> `

}

divGrecia.innerHTML=texto2;

import { ofertes } from "./recetas.js";

const contenedores = document.querySelectorAll('.contenedor_inspiracion');

contenedores[0].innerHTML = `<img src="${ofertes[0].imatgeUrl}">` + contenedores[0].innerHTML;
contenedores[1].innerHTML = `<img src="${ofertes[1].imatgeUrl}">` + contenedores[1].innerHTML;
contenedores[2].innerHTML = `<img src="${ofertes[2].imatgeUrl}">` + contenedores[2].innerHTML;

document.querySelector('.sydney').innerHTML = `
  <h2>${ofertes[0].titol}</h2>
  <p>${ofertes[0].descripcio}</p>
`;

document.querySelector('.vegan').innerHTML = `
  <h2>${ofertes[1].titol}</h2>
  <p>${ofertes[1].descripcio}</p>
`;

document.querySelector('.montaña').innerHTML = `
  <h2>${ofertes[2].titol}</h2>
  <p>${ofertes[2].descripcio}</p>
`;