// Para agregar o editar una mermelada, modificá esta lista.
const mermeladas = [
  {
    nombre: "Frutilla",
    color: "#C2185B",
    descripcion: "La receta original de Livia: dulce, con trocitos de fruta y un aroma que llena la cocina.",
    ingredientes: ["Frutillas", "Azúcar", "Jugo de limón"]
  },
  {
    nombre: "Durazno",
    color: "#F2A03D",
    descripcion: "Suave y aterciopelada, hecha con duraznos maduros de fin de verano.",
    ingredientes: ["Duraznos", "Azúcar", "Jugo de limón"]
  },
  {
    nombre: "Naranja amarga",
    color: "#E8710A",
    descripcion: "Con cáscara en tiritas y un toque amargo. Ideal para tostadas con manteca.",
    ingredientes: ["Naranjas", "Azúcar", "Agua"]
  },
  {
    nombre: "Arándanos",
    color: "#4B3F9E",
    descripcion: "Intensa y de color profundo, con la fruta apenas entera.",
    ingredientes: ["Arándanos", "Azúcar", "Jugo de limón"]
  },
  {
    nombre: "Higos y nuez",
    color: "#8E3B5E",
    descripcion: "Densa y especiada, con nueces tostadas. Va muy bien con quesos.",
    ingredientes: ["Higos", "Azúcar", "Nueces", "Canela"]
  },
  {
    nombre: "Kiwi y menta",
    color: "#6FA83A",
    descripcion: "Fresca y diferente: kiwi con hojitas de menta de nuestra huerta.",
    ingredientes: ["Kiwis", "Azúcar", "Menta", "Jugo de limón"]
  }
];

const contenedor = document.getElementById("productos");

contenedor.innerHTML = mermeladas.map(m => `
  <article class="card" style="--jam:${m.color};--cloth:${m.color}">
    <div class="card__jar">
      <div class="jar">
        <div class="lid"></div>
        <div class="glass"><div class="label"><small>Dulces Livia</small><b>${m.nombre}</b></div></div>
      </div>
    </div>
    <div class="card__body">
      <h3>${m.nombre}</h3>
      <p>${m.descripcion}</p>
      <h4>Ingredientes</h4>
      <ul class="chips">
        ${m.ingredientes.map(i => `<li>${i}</li>`).join("")}
      </ul>
    </div>
  </article>
`).join("");

document.getElementById("anio").textContent = new Date().getFullYear();
