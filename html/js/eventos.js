let eventos = [
  {
    id: 1,
    nombre: "Conferencia sobre Energías Renovables",
    fecha: "2025-06-15",
    hora: "10:00",
    duracion: "3 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Centro de Convenciones",
      direccion: "Av. Principal 123, Ciudad",
    },
    categoria: "conferencias",
    descripcion:
      "Conferencia sobre las últimas tendencias en energías renovables y su impacto en el medio ambiente. Expertos internacionales compartirán sus conocimientos y experiencias.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Conferencia+Energias+Renovables",
    organizador: {
      id: 3,
      nombre: "EcoEnergía",
      contacto: "info@ecoenergia.com",
      telefono: "+34 123 456 789",
    },
    plazas: 200,
    inscritos: 120,
  },
  {
    id: 2,
    nombre: "Taller de Reciclaje Creativo",
    fecha: "2025-06-22",
    hora: "16:00",
    duracion: "2 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Parque Central",
      direccion: "Parque Central, Zona Norte, Ciudad",
    },
    categoria: "talleres",
    descripcion:
      "Aprende a dar una segunda vida a objetos cotidianos mediante técnicas de reciclaje creativo. Taller práctico donde crearás tus propias piezas.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Taller+Reciclaje",
    organizador: {
      id: 4,
      nombre: "ReciclaArte",
      contacto: "talleres@reciclarte.org",
      telefono: "+34 987 654 321",
    },
    plazas: 30,
    inscritos: 25,
  },
  {
    id: 3,
    nombre: "Seminario Online: Huella de Carbono",
    fecha: "2025-07-05",
    hora: "18:00",
    duracion: "1.5 horas",
    ubicacion: {
      tipo: "online",
      plataforma: "Zoom",
      enlace: "https://zoom.us/j/123456789",
    },
    categoria: "seminarios",
    descripcion:
      "Seminario virtual sobre cómo calcular y reducir tu huella de carbono personal y empresarial. Incluye herramientas prácticas y casos de estudio.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Seminario+Online",
    organizador: {
      id: 5,
      nombre: "EcoConsulting",
      contacto: "seminarios@ecoconsulting.com",
      telefono: "+34 555 123 456",
    },
    plazas: 100,
    inscritos: 45,
  },
  {
    id: 4,
    nombre: "Feria de Productos Sostenibles",
    fecha: "2025-07-12",
    hora: "10:00",
    duracion: "8 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Plaza Mayor",
      direccion: "Plaza Mayor, Centro, Ciudad",
    },
    categoria: "ferias",
    descripcion:
      "Feria de productos ecológicos y sostenibles donde podrás conocer las últimas innovaciones en consumo responsable. Incluye charlas, degustaciones y actividades para toda la familia.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Feria+Sostenible",
    organizador: {
      id: 6,
      nombre: "EcoMarket",
      contacto: "organizacion@ecomarket.es",
      telefono: "+34 666 777 888",
    },
    plazas: 500,
    inscritos: 320,
  },
  {
    id: 5,
    nombre: "Conferencia: Ciudades Sostenibles",
    fecha: "2025-07-20",
    hora: "11:00",
    duracion: "2.5 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Universidad Central",
      direccion: "Campus Universitario, Av. Universidad 500, Ciudad",
    },
    categoria: "conferencias",
    descripcion:
      "Conferencia sobre el diseño y desarrollo de ciudades sostenibles. Arquitectos y urbanistas presentarán proyectos innovadores y soluciones para los retos urbanos actuales.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Ciudades+Sostenibles",
    organizador: {
      id: 1,
      nombre: "ArquitecturaVerde",
      contacto: "eventos@arquitecturaverde.com",
      telefono: "+34 111 222 333",
    },
    plazas: 150,
    inscritos: 80,
  },
  {
    id: 6,
    nombre: "Taller: Huerto Urbano",
    fecha: "2025-07-25",
    hora: "17:00",
    duracion: "3 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Jardín Botánico",
      direccion: "Jardín Botánico, Calle Botánica 45, Ciudad",
    },
    categoria: "talleres",
    descripcion:
      "Aprende a crear y mantener tu propio huerto urbano. Taller práctico donde conocerás técnicas de cultivo, compostaje y cuidado de plantas en espacios reducidos.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Huerto+Urbano",
    organizador: {
      id: 2,
      nombre: "CultivaNatura",
      contacto: "talleres@cultivanatura.org",
      telefono: "+34 444 555 666",
    },
    plazas: 25,
    inscritos: 18,
  },
  {
    id: 7,
    nombre: "Seminario: Inversiones Sostenibles",
    fecha: "2025-08-02",
    hora: "19:00",
    duracion: "2 horas",
    ubicacion: {
      tipo: "online",
      plataforma: "Microsoft Teams",
      enlace: "https://teams.microsoft.com/l/meetup-join/123456789",
    },
    categoria: "seminarios",
    descripcion:
      "Seminario sobre inversiones sostenibles y responsables. Aprende cómo tus decisiones financieras pueden tener un impacto positivo en el medio ambiente y la sociedad.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Inversiones+Sostenibles",
    organizador: {
      id: 1,
      nombre: "GreenFinance",
      contacto: "info@greenfinance.com",
      telefono: "+34 777 888 999",
    },
    plazas: 80,
    inscritos: 35,
  },
  {
    id: 8,
    nombre: "Feria de Movilidad Sostenible",
    fecha: "2025-08-15",
    hora: "10:00",
    duracion: "6 horas",
    ubicacion: {
      tipo: "presencial",
      lugar: "Recinto Ferial",
      direccion: "Recinto Ferial, Carretera Norte Km 5, Ciudad",
    },
    categoria: "ferias",
    descripcion:
      "Feria dedicada a la movilidad sostenible donde podrás conocer las últimas novedades en vehículos eléctricos, bicicletas y soluciones de transporte ecológico.",
    imagen: "https://placehold.co/800x400/2c7d59/white?text=Movilidad+Sostenible",
    organizador: {
      id: 2,
      nombre: "EcoMobility",
      contacto: "feria@ecomobility.es",
      telefono: "+34 222 333 444",
    },
    plazas: 400,
    inscritos: 250,
  },
]

let carouselPosition = 0
const itemsPerView = window.innerWidth < 768 ? 1 : 3

function cargarEventosDesdeLocalStorage() {
  const eventosGuardados = localStorage.getItem("eventos")
  if (eventosGuardados) {
    eventos = JSON.parse(eventosGuardados)
    console.log("Eventos cargados desde localStorage:", eventos.length)
  }
}

function guardarEventosEnLocalStorage() {
  localStorage.setItem("eventos", JSON.stringify(eventos))
  console.log("Eventos guardados en localStorage:", eventos.length)
}

function cargarEventos() {
  const eventsContainer = document.querySelector("#eventsContainer")
  const categoryFilter = document.querySelector("#categoryFilter")
  const locationFilter = document.querySelector("#locationFilter")
  const dateFilter = document.querySelector("#dateFilter")
  const applyFiltersBtn = document.querySelector("#applyFilters")

  const filterOptions = document.querySelector(".filter-options")
  if (filterOptions && usuarioActual && usuarioActual.rol === "organizador") {
    if (!document.querySelector("#createEventBtn")) {
      const createEventBtn = document.createElement("button")
      createEventBtn.id = "createEventBtn"
      createEventBtn.className = "btn-primary"
      createEventBtn.textContent = "Crear Evento"
      createEventBtn.addEventListener("click", mostrarModalCrearEvento)
      filterOptions.appendChild(createEventBtn)
    }
  }

  mostrarEventos(eventos, eventsContainer)

  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener("click", () => {
      const categoriaSeleccionada = categoryFilter.value
      const ubicacionSeleccionada = locationFilter.value
      const fechaSeleccionada = dateFilter.value

      let eventosFiltrados = eventos

      if (categoriaSeleccionada !== "todos") {
        eventosFiltrados = eventosFiltrados.filter((evento) => evento.categoria === categoriaSeleccionada)
      }

      if (ubicacionSeleccionada !== "todos") {
        eventosFiltrados = eventosFiltrados.filter((evento) => evento.ubicacion.tipo === ubicacionSeleccionada)
      }

      if (fechaSeleccionada !== "todos") {
        const hoy = new Date()
        const proximaSemana = new Date()
        proximaSemana.setDate(hoy.getDate() + 7)

        const finDeMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0)

        if (fechaSeleccionada === "proximos") {
          eventosFiltrados = eventosFiltrados.filter((evento) => {
            const fechaEvento = new Date(evento.fecha)
            return fechaEvento >= hoy && fechaEvento <= proximaSemana
          })
        } else if (fechaSeleccionada === "mes") {
          eventosFiltrados = eventosFiltrados.filter((evento) => {
            const fechaEvento = new Date(evento.fecha)
            return fechaEvento >= hoy && fechaEvento <= finDeMes
          })
        } else if (fechaSeleccionada === "futuro") {
          eventosFiltrados = eventosFiltrados.filter((evento) => {
            const fechaEvento = new Date(evento.fecha)
            return fechaEvento >= hoy
          })
        }
      }

      mostrarEventos(eventosFiltrados, eventsContainer)
    })
  }

  const urlParams = new URLSearchParams(window.location.search)
  const categoriaParam = urlParams.get("categoria")

  if (categoriaParam && categoryFilter) {
    categoryFilter.value = categoriaParam
    applyFiltersBtn.click()
  }
}

function mostrarEventos(eventosArray, contenedor) {
  contenedor.innerHTML = ""

  if (eventosArray.length === 0) {
    contenedor.innerHTML = '<p class="no-events">No se encontraron eventos con los filtros seleccionados.</p>'
    return
  }

  eventosArray.forEach((evento) => {
    let esOrganizador = false
    if (usuarioActual && usuarioActual.rol === "organizador") {
      esOrganizador = evento.organizador.id === usuarioActual.id
    }

    const eventoHTML = `
            <div class="event-card ${esOrganizador ? "event-card-own" : ""}">
                <img src="${evento.imagen}" alt="${evento.nombre}">
                <div class="event-card-content">
                    <h3>${evento.nombre}</h3>
                    <div class="event-meta">
                        <span><strong>Fecha:</strong> ${formatearFecha(evento.fecha)}</span>
                        <span><strong>Hora:</strong> ${evento.hora}</span>
                        <span><strong>Ubicación:</strong> ${evento.ubicacion.tipo === "presencial" ? evento.ubicacion.lugar : "Online"}</span>
                        <span><strong>Categoría:</strong> ${evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)}</span>
                        ${esOrganizador ? '<span class="badge-organizador">Tu evento</span>' : ""}
                    </div>
                    <p>${evento.descripcion.substring(0, 100)}...</p>
                    <a href="detalle_evento.html?id=${evento.id}" class="btn-primary">Ver detalles</a>
                </div>
            </div>
        `

    contenedor.innerHTML += eventoHTML
  })
}

function cargarDetalleEvento() {
  const eventDetail = document.querySelector("#eventDetail")
  const relatedEventsContainer = document.querySelector("#relatedEventsContainer")

  const urlParams = new URLSearchParams(window.location.search)
  const eventoId = Number.parseInt(urlParams.get("id"))

  if (!eventoId) {
    eventDetail.innerHTML = '<div class="container"><p>Evento no encontrado</p></div>'
    return
  }

  const evento = eventos.find((e) => e.id === eventoId)

  if (!evento) {
    eventDetail.innerHTML = '<div class="container"><p>Evento no encontrado</p></div>'
    return
  }

  let esOrganizador = false
  if (usuarioActual && usuarioActual.rol === "organizador") {
    esOrganizador = evento.organizador.id === usuarioActual.id
  }

  document.title = `${evento.nombre} - EcoEventos`

  const eventoHTML = `
        <div class="event-detail-header">
            <img src="${evento.imagen}" alt="${evento.nombre}">
            ${esOrganizador ? '<div class="badge-organizador-detail">Eres el organizador de este evento</div>' : ""}
        </div>
        <div class="event-detail-content">
            <h2>${evento.nombre}</h2>
            
            <div class="event-detail-meta">
                <div class="meta-item">
                    <span class="meta-label">Fecha</span>
                    <span class="meta-value">${formatearFecha(evento.fecha)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Hora</span>
                    <span class="meta-value">${evento.hora}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Duración</span>
                    <span class="meta-value">${evento.duracion}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Categoría</span>
                    <span class="meta-value">${evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Plazas disponibles</span>
                    <span class="meta-value">${evento.plazas - evento.inscritos} de ${evento.plazas}</span>
                </div>
            </div>
            
            <div class="event-description">
                <h3>Descripción</h3>
                <p>${evento.descripcion}</p>
            </div>
            
            <div class="event-location">
                <h3>Ubicación</h3>
                ${
                  evento.ubicacion.tipo === "presencial"
                    ? `<p><strong>${evento.ubicacion.lugar}</strong></p>
                    <p>${evento.ubicacion.direccion}</p>`
                    : `<p>Evento online a través de ${evento.ubicacion.plataforma}</p>
                    <p>El enlace se enviará a los participantes inscritos</p>`
                }
            </div>
            
            <div class="organizer-info ${esOrganizador ? "organizer-info-own" : ""}">
                <h3>Organizador ${esOrganizador ? '<span class="organizer-you">(Tú)</span>' : ""}</h3>
                <div class="organizer-text">
                    <p><strong>${esOrganizador ? usuarioActual.organizacion || usuarioActual.nombre : evento.organizador.nombre}</strong></p>
                    <p>Email: ${esOrganizador ? usuarioActual.email : evento.organizador.contacto}</p>
                    <p>Teléfono: ${evento.organizador.telefono}</p>
                    ${esOrganizador ? '<p class="organizer-status">Estás gestionando este evento</p>' : ""}
                    ${esOrganizador ? '<button id="deleteEventBtn" class="btn-danger">Eliminar evento</button>' : ""}
                </div>
            </div>
            
            <div class="inscription-section">
                <h3>¿Te interesa este evento?</h3>
                <p>Inscríbete ahora y reserva tu plaza</p>
                ${
                  !usuarioActual
                    ? '<button id="inscriptionBtn" class="btn-primary" disabled>Inicia sesión para inscribirte</button>'
                    : esOrganizador
                      ? '<button class="btn-secondary" disabled>No puedes inscribirte a tu propio evento</button>'
                      : '<button id="inscriptionBtn" class="btn-primary">Inscribirme</button>'
                }
            </div>
        </div>
    `

  eventDetail.innerHTML = eventoHTML

  if (esOrganizador) {
    const deleteEventBtn = document.querySelector("#deleteEventBtn")
    if (deleteEventBtn) {
      deleteEventBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas eliminar este evento? Esta acción no se puede deshacer.")) {
          eliminarEvento(eventoId)
        }
      })
    }
  }

  if (usuarioActual && !esOrganizador) {
    const inscriptionBtn = document.querySelector("#inscriptionBtn")
    const inscriptionModal = document.querySelector("#inscriptionModal")
    const inscriptionEventName = document.querySelector("#inscriptionEventName")

    if (inscriptionBtn && inscriptionModal && inscriptionEventName) {
      inscriptionBtn.addEventListener("click", () => {
        inscriptionEventName.textContent = `Evento: ${evento.nombre}`

        document.querySelector("#inscriptionNombre").value = usuarioActual.nombre
        document.querySelector("#inscriptionEmail").value = usuarioActual.email

        inscriptionModal.style.display = "block"
      })
    }
  }

  const eventosRelacionados = eventos.filter((e) => e.categoria === evento.categoria && e.id !== evento.id).slice(0, 3)
  mostrarEventos(eventosRelacionados, relatedEventsContainer)
}

function moverCarrusel(direccion) {
  const carousel = document.querySelector("#eventCarousel")
  const items = carousel.querySelectorAll(".carousel-item")

  if (direccion > 0) {
    carouselPosition = Math.min(carouselPosition + 1, items.length - itemsPerView)
  } else {
    carouselPosition = Math.max(carouselPosition - 1, 0)
  }

  const desplazamiento = carouselPosition * (100 / itemsPerView)
  carousel.style.transform = `translateX(-${desplazamiento}%)`
}

function eliminarEvento(eventoId) {
  const indiceEvento = eventos.findIndex((e) => e.id === eventoId)

  if (indiceEvento === -1) {
    alert("No se encontró el evento")
    return
  }

  if (
    !usuarioActual ||
    usuarioActual.rol !== "organizador" ||
    eventos[indiceEvento].organizador.id !== usuarioActual.id
  ) {
    alert("No tienes permiso para eliminar este evento")
    return
  }

  eventos.splice(indiceEvento, 1)

  guardarEventosEnLocalStorage()

  alert("Evento eliminado correctamente")

  window.location.href = "eventos.html"
}