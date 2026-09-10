
/* =========================================================================
   CÓMO AGREGAR TUS PROYECTOS
   -------------------------------------------------------------------------
   Solo edita el arreglo "projects" de abajo. Cada objeto es una tarjeta.

   Campos:
   - title:   nombre del proyecto (texto)
   - tag:     categoría corta, ej: "Personaje", "Criatura", "Escena"
   - desc:    1-2 frases describiendo el proyecto
   - image:   URL de tu imagen (déjalo como "" si aún no tienes una,
              y se mostrará un bloque de color con las iniciales)
   - link:    URL donde se puede ver el proyecto completo (opcional, deja "" si no aplica)
   - year:    año del proyecto (texto o número)
   - size:    "normal", "featured" (tarjeta más ancha) o "compact" (más angosta)
   - color:   color del bloque de reemplazo cuando no hay imagen.
              Usa uno de: "pink", "mint", "lavender", "yellow"

   Puedes agregar tantos objetos como quieras, solo copia y pega un bloque
   { ... } completo, sepáralo con una coma, y cambia los datos.
   ========================================================================= */

const projects = [
  {
    title: "Lilith",
    tag: "Personaje",
    desc: "Lilith es un personaje creado para ser utilizado en efectos especiales, es un personaje hecho totalmente de low poly con texturas simples y poco complejas.",
    image: "images/Proyecto1.png",
    link: "",
    year: "2025",
    size: "featured",
    color: "pink"
  },
  {
    title: "Proyecto Micro-Empresa",
    tag: "Productos",
    desc: "Este proyecto se realizo junto a mi grupo como una demostracion de un producto para una  pequeña empresa",
    image: "images/Proyecto2.png",
    link: "",
    year: "2025",
    size: "normal",
    color: "mint"
  },
  
];

const colorMap = {
  pink: "linear-gradient(150deg, #ff8fa8, #f76d94)",
  mint: "linear-gradient(150deg, #7fe0c4, #5fc7ab)",
  lavender: "linear-gradient(150deg, #b8a6f0, #9a86e0)",
  yellow: "linear-gradient(150deg, #ffd166, #ffb84d)"
};

function initials(text){
  return text
    .split(" ")
    .filter(Boolean)
    .slice(0,2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "project-card" + (p.size === "featured" ? " featured" : p.size === "compact" ? " compact" : "");

    const media = document.createElement("div");
    media.className = "project-media";
    if (p.image){
      const img = document.createElement("img");
      img.src = p.image;
      img.alt = p.title;
      media.appendChild(img);
    } else {
      const bg = colorMap[p.color] || colorMap.pink;
      media.style.background = bg;
      media.innerHTML = `
        <div class="placeholder">
          <div class="mono">${initials(p.title) || "3D"}</div>
          <small>AÑADE TU IMAGEN AQUÍ</small>
        </div>`;
    }

    const body = document.createElement("div");
    body.className = "project-body";
    body.innerHTML = `
      <div class="project-tag">${p.tag}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-footer">
        <span>${p.year}</span>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">Ver proyecto →</a>` : ""}
      </div>
    `;

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

renderProjects();
document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});
