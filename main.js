const $ = (s) => document.querySelector(s);

/* ---------- Datos ---------- */
const nav = [["about","Sobre mí"],["experience","Experiencia"],["skills","Habilidades"],["projects","Proyectos"],["courses","Cursos"],["cv","CV"],["contact","Contacto"]];

const exp = [
 ["Desarrollador de software","Tecnihealth","Jul 2025 – Actualidad",["Desarrollo y mantenimiento de sistemas web para el sector salud con Laravel (backend) y Vue.js (frontend).","Mejora continua de funcionalidades en plataformas ya desplegadas en producción.","Documentación de APIs REST con Swagger/OpenAPI para facilitar su integración.","Testing manual y automatizado con PHPUnit.","Soporte técnico a usuarios finales y mejoras basadas en su retroalimentación."]],
 ["Practicante en Ingeniería","ZTE Corporation","Oct 2024 – Abr 2025",["Revisión técnica de TSS presentados por subcontratistas.","Elaboración de soluciones para redes 2G, 3G y 4G.","Órdenes de entrega y facturas de compra para gestión de suministros.","Documentos Collaps y fotomontajes para planificar instalaciones."]],
 ["Practicante en Desarrollo","SERCOP","Abr 2024 – Jun 2024",["Pruebas funcionales en el sistema de catálogos de contratación pública.","Pruebas en el sistema RUP: detección y documentación de errores.","Documentación técnica del sistema SiControl.","Restauración de bases de datos MySQL con Docker y DBeaver."]],
 ["Asistente Administrativo","INEPE","Abr 2023 – Abr 2024",["Procesos administrativos con Google Drive y Microsoft Office.","Community management en redes sociales y correo institucional.","Administración de contenidos en WordPress.","Soporte técnico a usuarios de oficina."]],
 ["Practicante en Comunicación","INEPE","Sep 2022 – Dic 2022",["Sitio web institucional en WordPress.","Diseño gráfico de material publicitario.","Documentos internos y material educativo."]],
 ["Desarrollador Web","GAD Tambillo","May 2022 – Jul 2022",["Sitio web oficial del Gobierno Autónomo Descentralizado de Tambillo.","Tecnologías: HTML, CSS, JavaScript, PHP y Laravel.","Funcionalidades dinámicas y diseño responsivo."]]
];

const skills = [["fas fa-code","JavaScript"],["fab fa-php","PHP"],["fab fa-vuejs","Vue.js"],["fab fa-react","React"],["fas fa-code-branch","Next.js"],["fas fa-paint-brush","Tailwind CSS"],["fas fa-layer-group","Laravel"],["fab fa-wordpress","WordPress"],["fas fa-stream","RESTful APIs"],["fas fa-database","MySQL"],["fas fa-fire","Firebase"],["fas fa-terminal","Linux / Docker"]];

// img: null => usa la animación SVG "API REST"
const projects = [
 {s:"api",t:"SmartBancs App",d:"MVP de una plataforma transaccional financiera con procesamiento de alta concurrencia, integración desacoplada con un core legado, recomendaciones de IA asíncronas y observabilidad básica.",u:"https://github.com/Erick21Garcia/SmartBancs-App",tags:["API REST","IA"],f:["API"]},
 {s:"reservas",t:"ReservasEC",d:"Aplicación fullstack de gestión de reservas con arquitectura de microservicios: Next.js, Node.js, Express y MongoDB.",u:"https://github.com/Erick21Garcia/ReservasEC",tags:["Next.js","Node.js","MongoDB"],f:["JavaScript"]},
 {s:"cart",t:"E-commerce - Tienda de Tecnología",d:"Sistema de compras en línea desarrollado en PHP y MySQL.",u:"https://github.com/Erick21Garcia/E-commerce-Tienda-de-Tecnologia",tags:["PHP","MySQL"],f:["PHP"]},
 {s:"bars",t:"Sistema de Gestión Académica",d:"Aplicación web en Laravel para administrar información académica.",u:"https://github.com/Erick21Garcia/Sistema-de-Gestion-Academica",tags:["Laravel"],f:["PHP"]},
 {s:"progress",t:"Plataforma EduMaster",d:"Plataforma educativa con Next.js y Firebase para gestionar cursos, inscripciones y progreso académico.",u:"https://github.com/Erick21Garcia/Edumaster",tags:["Next.js","Firebase"],f:["JavaScript"]},
 {s:"cloud",t:"Sistema Web de Bienestar Universitario",d:"Gestión documental del área médica con integración de servicios AWS.",u:"https://github.com/Erick21Garcia/Sistema-Web-Bienestar-Universitario-",tags:["AWS","Salud"],f:["PHP"]},
 {s:"grid",t:"Biblioteca de Películas",d:"Catálogo de películas con Laravel como backend (API RESTful) y React como frontend.",u:"https://github.com/Erick21Garcia/Catalogo-Peliculas",tags:["Laravel","React","API REST"],f:["PHP","JavaScript","API"]},
 {s:"todo",t:"To-do App",d:"Aplicación de lista de tareas con React y Flask.",u:"https://github.com/Erick21Garcia/React-flask-todo-app",tags:["React","Flask"],f:["JavaScript","Python"]},
 {s:"iot",t:"Python - IoT",d:"Exploración del protocolo MQTT en soluciones de Internet de las Cosas.",u:"https://github.com/Erick21Garcia/PythonIoT",tags:["Python","MQTT"],f:["Python"]}
];

const courses = [
 ["n8n + MCP: Automatización y agentes de IA","Udemy – Jul 2026","fas fa-robot","https://ude.my/UC-4dec4b3a-b479-4b82-be50-544d077bdbde"],
 ["Database Design","Oracle – Mar 2026","fas fa-project-diagram","https://drive.google.com/file/d/1BO0rZGOQx1m-tfbxdzM0CpDbV7NpmVKT/view?usp=sharing"],
 ["Desarrollador PHP (Orientado a objetos)","Capacítate para el Empleo – Jul 2025","fab fa-php","https://drive.google.com/drive/folders/16I-m_jB_AJ_AYHV2pmGqLfl6734ukuEd"],["Administrador de Bases de Datos","Fundación Carlos Slim – 83 horas","fas fa-database"],["Introducción a Big Data","Fundación Telefónica – 120 horas","fas fa-chart-line"],["Programación con JavaScript","Fundación Telefónica – 40 horas","fab fa-js"],["Curador de Datos","Fundación Carlos Slim – 30 horas","fas fa-database"],["Soporte Técnico a Computadoras","Udemy – 10 horas","fas fa-tools"],["Power BI","Códigofacilito – 2h 30m","fas fa-chart-bar"],["Tester","Fundación Carlos Slim – 28 horas","fas fa-bug"],["Curso Profesional de Docker","Códigofacilito – 3h 31m","fab fa-docker"]];

/* ---------- Animación "API REST" (SVG) ---------- */
const apiSvg = `
<svg viewBox="0 0 400 192" class="scene w-full h-48" role="img" aria-label="Animación de una API REST conectando un cliente con un core bancario">
  <g fill="none" stroke="#ffcc00" stroke-width="2">
    <path class="flow" d="M78 96 H150"/><path class="flow back" d="M250 96 H322" stroke-opacity=".6"/>
  </g>
  <circle class="ring" cx="200" cy="96" r="38" fill="none" stroke="#ffcc00" stroke-width="2"/>
  <rect x="150" y="66" width="100" height="60" rx="12" fill="#121212" stroke="#ffcc00" stroke-width="2"/>
  <text x="200" y="92" text-anchor="middle" fill="#ffcc00" font-size="22" font-weight="700" font-family="Poppins,sans-serif">API</text>
  <text x="200" y="113" text-anchor="middle" fill="#fff" font-size="13" font-weight="600" font-family="Poppins,sans-serif">REST</text>
  <g fill="#fff" font-family="Poppins,sans-serif" font-size="11" text-anchor="middle">
    <rect x="22" y="72" width="56" height="48" rx="8" fill="#1e1e1e" stroke="#555"/><text x="50" y="100">Cliente</text>
    <rect x="322" y="72" width="56" height="48" rx="8" fill="#1e1e1e" stroke="#555"/><text x="350" y="100">Core</text>
  </g>
  <g font-family="Poppins,sans-serif" font-size="11" font-weight="600" text-anchor="middle">
    <text class="msg" x="114" y="84" fill="#ffcc00">POST /tx</text>
    <text class="msg b" x="286" y="84" fill="#9be58f">200 OK</text>
  </g>
</svg>`;

/* ---------- Escenas animadas por proyecto ---------- */
const S = (inner, label) => `<svg viewBox="0 0 400 192" class="scene w-full h-48" role="img" aria-label="Animación: ${label}">${inner}</svg>`;
const hub = (c, items) => {
  const P = [[64,40],[336,40],[64,152],[336,152]];
  return S(items.map((t, i) => { const [x, y] = P[i]; return `<path class="flow" style="animation-delay:${i*.2}s" d="M${x} ${y}L200 96" fill="none" stroke="#ffcc00" stroke-width="2" stroke-opacity=".7"/><rect x="${x-34}" y="${y-15}" width="68" height="30" rx="8" fill="#1e1e1e" stroke="#555"/><text x="${x}" y="${y+4}">${t}</text>`; }).join("") +
  `<circle class="ring" cx="200" cy="96" r="30" fill="none" stroke="#ffcc00" stroke-width="2"/><rect x="140" y="76" width="120" height="40" rx="10" fill="#121212" stroke="#ffcc00" stroke-width="2"/><text class="y" x="200" y="101">${c}</text>`, c);
};
const cart = () => S(`<path d="M110 62h26l18 66h92l16-48H146" fill="none" stroke="#ffcc00" stroke-width="3" stroke-linejoin="round"/><circle cx="168" cy="146" r="8" fill="#ffcc00"/><circle cx="236" cy="146" r="8" fill="#ffcc00"/>` + [0,1,2].map(i => `<rect class="drop" style="animation-delay:${i*.5}s" x="${166+i*26}" y="98" width="20" height="22" rx="4" fill="#ffcc00" fill-opacity="${1-i*.25}"/>`).join("") + `<text class="msg y b" x="200" y="34">Pedido confirmado</text>`, "carrito de compras");
const bars = () => S(`<path d="M90 150H330" stroke="#555" stroke-width="2"/>` + [50,84,62,108,76].map((h, i) => `<rect class="grow" style="animation-delay:${i*.2}s" x="${106+i*44}" y="${150-h}" width="28" height="${h}" rx="4" fill="#ffcc00" fill-opacity="${.55+i*.1}"/>`).join("") + `<text x="210" y="176">Calificaciones por parcial</text>`, "gráfico de notas académicas");
const progress = () => S(["Módulo 1","Módulo 2","Módulo 3"].map((t, i) => `<text class="l" x="48" y="${64+i*40}">${t}</text><rect x="130" y="${54+i*40}" width="220" height="12" rx="6" fill="#2a2a2a"/><rect class="fill" style="--w:${[.9,.65,.4][i]};animation-delay:${i*.3}s" x="130" y="${54+i*40}" width="220" height="12" rx="6" fill="#ffcc00"/>`).join(""), "progreso de cursos");
const cloud = () => S(`<g fill="#3a3410"><circle cx="178" cy="52" r="20"/><circle cx="206" cy="42" r="26"/><circle cx="236" cy="54" r="16"/><rect x="160" y="52" width="94" height="20" rx="10"/></g><text class="y" x="208" y="60">AWS</text><g class="rise"><rect x="176" y="112" width="48" height="62" rx="6" fill="#1e1e1e" stroke="#555" stroke-width="2"/><path d="M200 130v22M189 141h22" stroke="#ffcc00" stroke-width="4" stroke-linecap="round"/></g>`, "documento médico subiendo a la nube");
const grid = () => S([0,1,2,3,4,5].map(i => `<rect class="pop" style="animation-delay:${i*.5}s" x="${96+(i%3)*70}" y="${28+Math.floor(i/3)*76}" width="58" height="66" rx="6" fill="#1e1e1e" stroke="#555" stroke-width="2"/><rect x="${104+(i%3)*70}" y="${74+Math.floor(i/3)*76}" width="42" height="6" rx="3" fill="#ffcc00" fill-opacity=".5"/>`).join(""), "catálogo de películas");
const todo = () => S(["Diseñar","Programar","Probar"].map((t, i) => `<rect x="118" y="${44+i*42}" width="22" height="22" rx="5" fill="none" stroke="#555" stroke-width="2"/><path class="tick" style="animation-delay:${i*.7}s" d="M123 ${55+i*42}l5 6 9-12" fill="none" stroke="#ffcc00" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text class="l" x="154" y="${60+i*42}">${t}</text>`).join(""), "lista de tareas completándose");
const scenes = {
  api: () => apiSvg, cart, bars, progress, cloud, grid, todo,
  reservas: () => hub("Gateway", ["Reservas","Usuarios","Pagos","MongoDB"]),
  iot: () => hub("Broker MQTT", ["Sensor 1","Sensor 2","Python","Panel"])
};

/* ---------- Render ---------- */
$("#menu").innerHTML = nav.map(([id, l]) => `<li><a href="#${id}" class="nav-link block py-2 hover:text-primary transition-colors">${l}</a></li>`).join("");

$("#stats").innerHTML = [[projects.length,"Proyectos"],[exp.length,"Experiencias"],[courses.length,"Cursos"]]
  .map(([n, l]) => `<div class="bg-panel rounded-xl py-4"><dd class="text-3xl font-bold text-primary">${n}</dd><dt class="text-sm text-gray-300">${l}</dt></div>`).join("");

$("#exp").innerHTML = exp.map(([role, org, date, items]) => `
  <li class="relative">
    <span class="absolute -left-[33px] md:-left-[41px] top-2 h-3 w-3 rounded-full bg-primary"></span>
    <h3 class="text-xl font-semibold text-primary">${role} - ${org}</h3>
    <p class="text-sm text-gray-400 mb-2">${date} | Quito</p>
    <ul class="list-disc list-inside text-gray-300 space-y-1">${items.map(i => `<li>${i}</li>`).join("")}</ul>
  </li>`).join("");

$("#skillGrid").innerHTML = skills.map(([ic, n]) => `
  <div class="card bg-panel rounded-xl p-5 flex flex-col items-center"><i class="${ic} text-4xl text-primary mb-3"></i><p>${n}</p></div>`).join("");

$("#courseGrid").innerHTML = courses.map(([n, o, ic, u]) => `
  <div class="card bg-panel p-5 rounded-lg flex justify-between items-center gap-4">
    <div><h3 class="font-semibold text-primary">${n}</h3><p class="text-sm text-gray-300">${o}</p>${u ? `<a href="${u}" target="_blank" rel="noopener" class="text-xs text-primary hover:underline">Ver credencial</a>` : ""}</div>
    <i class="${ic} text-2xl text-primary"></i>
  </div>`).join("");

const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("paused", !e.isIntersecting)));
function renderProjects(filter) {
  $("#projectGrid").innerHTML = projects.filter(p => filter === "Todos" || p.f.includes(filter)).map(p => `
    <article class="card bg-dark rounded-xl overflow-hidden flex flex-col">
      ${p.s ? scenes[p.s]() : p.img ? `<img src="${p.img}" alt="Vista previa de ${p.t}" loading="lazy" class="w-full h-48 object-cover">` : apiSvg}
      <div class="p-5 flex flex-col flex-1">
        <h3 class="text-lg font-semibold text-primary">${p.t}</h3>
        <p class="text-sm text-gray-300 mt-2 flex-1">${p.d}</p>
        <div class="flex flex-wrap gap-2 mt-4">${p.tags.map(t => `<span class="text-xs border border-white/20 rounded-full px-2 py-1 text-gray-300">${t}</span>`).join("")}</div>
        <a href="${p.u}" target="_blank" rel="noopener" class="mt-4 self-start bg-primary text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition">Ver proyecto</a>
      </div>
    </article>`).join("");
  document.querySelectorAll("#projectGrid .scene").forEach(s => io.observe(s));
}
const cats = ["Todos","PHP","JavaScript","Python","API"];
$("#filters").innerHTML = cats.map((c, i) => `<button data-f="${c}" aria-pressed="${i === 0}" class="px-4 py-2 rounded-full border text-sm transition ${i === 0 ? "bg-primary text-black border-primary" : "border-white/30 hover:border-primary"}">${c}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => {
    const on = x === b;
    x.setAttribute("aria-pressed", on);
    x.className = `px-4 py-2 rounded-full border text-sm transition ${on ? "bg-primary text-black border-primary" : "border-white/30 hover:border-primary"}`;
  });
  renderProjects(b.dataset.f);
});
renderProjects("Todos");

/* ---------- Comportamiento ---------- */
const toggle = $("#menu-toggle"), menu = $("#menu");
toggle.addEventListener("click", () => { const h = menu.classList.toggle("hidden"); toggle.setAttribute("aria-expanded", !h); });
menu.addEventListener("click", e => { if (e.target.closest("a") && innerWidth < 768) menu.classList.add("hidden"); });

// Enlace activo según la sección visible
const links = [...document.querySelectorAll(".nav-link")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
nav.forEach(([id]) => spy.observe(document.getElementById(id)));

// Texto que rota en el hero
const roles = ["Full Stack", "Laravel y Vue", "de APIs REST"];
let r = 0, c = 0, del = false;
(function type() {
  const w = roles[r];
  $("#typed").textContent = w.slice(0, c);
  if (!del && c === w.length) { del = true; return setTimeout(type, 1500); }
  if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 40 : 90);
})();

$("#year").textContent = new Date().getFullYear();

/* ---------- Hero: código que se escribe solo ---------- */
const hl = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;")
  .replace(/(\/\/.*)|('[^']*'|"[^"]*")|\b(const|return|function|await|new|public|class|use|FROM|RUN|EXPOSE)\b|(\$\w+)|\b(\d+)\b/g,
    (m, c, s, k, v) => `<i class="${c ? "c" : s ? "s" : k ? "k" : v ? "v" : "n"}">${m}</i>`);
function typer(el, list, speed) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.innerHTML = hl(list[0]); return; }
  let i = 0, c = 0;
  (function t() {
    const s = list[i];
    if (c <= s.length) { el.innerHTML = hl(s.slice(0, c)) + '<span class="caret"></span>'; c++; return setTimeout(t, speed); }
    setTimeout(() => { c = 0; i = (i + 1) % list.length; t(); }, 2200);
  })();
}
typer($("#codeL"), [
`Route::post('/transacciones', function (Request $r) {
    $tx = Transaccion::create($r->validated());
    dispatch(new EvaluarRiesgoIA($tx));
    return response()->json($tx, 201);
});`,
`// Pruebas con PHPUnit
public function test_crea_cita()
{
    $this->postJson('/api/citas', $data)
         ->assertStatus(201);
}`], 45);
typer($("#codeR"), [
`<script setup>
const { data } = await useFetch('/api/reservas')
</script>`,
`FROM php:8.3-fpm
RUN docker-php-ext-install pdo_mysql
EXPOSE 9000`], 55);

// Barra de progreso de lectura
addEventListener("scroll", () => {
  $("#bar").style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + "%";
}, { passive: true });