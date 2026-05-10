import { client } from "./recetas.js";

console.log("Product detail");

async function loadProduct() {
  const { data } = await client
    .from("productDetailData")
    .select("*")
    .limit(1)
    .single();

  const product = data;

  const parteizq = document.querySelector(".parteizq");

  const facilities = product.top_facilities ?? [];
  const explore = product.explore_area ?? [];

  parteizq.innerHTML = `
    <div class="Container_opciones">
      <h2>${product.hotel_name ?? "Sin nombre"}</h2>

      <div class="Estrellas_opiniones">
        <img src="/imagenes-pagina-principal/estrellas.png">
        <p>${product.hotel_rating ?? "-"} (${product.hotel_reviews_count ?? 0})</p>
      </div>

      <div class="Ubicacion">
        <p>${product.hotel_address ?? "Sin dirección"}</p>
      </div>
    </div>

    <div class="cuadro_blanco">
      <p>${product.hotel_overview_text ?? ""}</p>

      <strong>Top facilities</strong>

      <div class="facilities">
        ${facilities.length
          ? facilities.map(f => `
              <div class="facility">
                <p>${f.label}</p>
              </div>
            `).join("")
          : "<p>No facilities</p>"
        }
      </div>
    </div>
  `;

  document.querySelector(".Rutas").innerHTML = `
    <strong>Explore the area</strong>

    ${
      explore.length
        ? explore.map(r => `
            <div class="Ruta">
              <p>${r.name}</p>
              <p>${r.distance}</p>
            </div>
          `).join("")
        : "<p>No explore data</p>"
    }
  `;

  document.querySelector(".formulario_vacaciones").innerHTML = `
    <input type="text" placeholder="${product.availability_checkin ?? ""}">
    <input type="text" placeholder="${product.availability_checkout ?? ""}">
    <input type="text" placeholder="${product.availability_guests ?? ""}">
    <button>Check availability</button>
  `;

  const rooms = product.rooms ?? [];

  const Primera = document.querySelector(".Primera_habitacion");
  const Segunda = document.querySelector(".Segunda_habitacion");

  const renderRoom = (room) => `
    <strong>${room.name}</strong>
    <p>${room.currency}${room.price}</p>
    <p>Sleeps ${room.sleeps}</p>
    <p>${room.beds}</p>
  `;

  Primera.innerHTML = rooms[0] ? renderRoom(rooms[0]) : "";
  Segunda.innerHTML = rooms[1] ? renderRoom(rooms[1]) : "";
}

loadProduct();