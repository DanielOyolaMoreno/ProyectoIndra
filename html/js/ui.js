function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr)
  const opciones = { year: "numeric", month: "long", day: "numeric" }
  return fecha.toLocaleDateString("es-ES", opciones)
}

document.addEventListener("DOMContentLoaded", () => {
  cargarEventosDesdeLocalStorage()
  const misEventosLink = document.querySelector("#misEventosLink")
  if (misEventosLink) {
    misEventosLink.parentElement.remove()
  }
  cargarUsuarioDesdeLocalStorage()
  inicializarModales()
  if (document.querySelector("#eventCarousel")) {
    inicializarCarrusel()
  }
  if (document.querySelector("#eventsContainer")) {
    cargarEventos()
  }
  if (document.querySelector("#eventDetail")) {
    cargarDetalleEvento()
  }
  inicializarFormularios()
  actualizarUIUsuario()
})

function inicializarModales() {
  const registerModal = document.querySelector("#registerModal")
  const registerBtn = document.querySelector("#registerBtn")

  if (registerBtn && registerModal) {
    registerBtn.addEventListener("click", () => {
      registerModal.style.display = "block"
    })
  }

  const loginModal = document.querySelector("#loginModal")
  const loginBtn = document.querySelector("#loginBtn")

  if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", () => {
      loginModal.style.display = "block"
    })
  }

  const createEventModal = document.querySelector("#createEventModal")
  const createEventBtn = document.querySelector("#createEventBtn")

  if (createEventBtn && createEventModal) {
    createEventBtn.addEventListener("click", () => {
      createEventModal.style.display = "block"
    })
  }

  const closeButtons = document.querySelectorAll(".close-modal")
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal")
      if (modal) {
        modal.style.display = "none"
      }
    })
  })

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none"
    }
  })
}

function inicializarCarrusel() {
  const carousel = document.querySelector("#eventCarousel")
  const prevBtn = document.querySelector("#prevBtn")
  const nextBtn = document.querySelector("#nextBtn")

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      moverCarrusel(-1)
    })

    nextBtn.addEventListener("click", () => {
      moverCarrusel(1)
    })

    const items = carousel.querySelectorAll(".carousel-item")
    items.forEach((item) => {
      item.style.flex = `0 0 calc(${100 / itemsPerView}% - 20px)`
    })
  }
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

function inicializarFormularios() {
  const registerForm = document.querySelector("#registerForm")

  if (registerForm) {
    const confirmPasswordField = document.querySelector("#confirmPassword").closest(".form-group")

    if (confirmPasswordField && !document.querySelector("#rol")) {
      const rolFieldHTML = `
        <div class="form-group">
          <label for="rol">Tipo de usuario:</label>
          <select id="rol" name="rol" required>
            <option value="usuario">Usuario</option>
            <option value="organizador">Organizador</option>
          </select>
        </div>
        <div class="form-group" id="organizacionGroup" style="display: none;">
          <label for="organizacion">Nombre de la organización:</label>
          <input type="text" id="organizacion" name="organizacion">
        </div>
      `

      confirmPasswordField.insertAdjacentHTML("afterend", rolFieldHTML)

      const rolSelect = document.querySelector("#rol")
      rolSelect.addEventListener("change", () => {
        const organizacionGroup = document.querySelector("#organizacionGroup")
        if (rolSelect.value === "organizador") {
          organizacionGroup.style.display = "block"
        } else {
          organizacionGroup.style.display = "none"
        }
      })
    }

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault()

      const nombre = document.querySelector("#nombre").value
      const email = document.querySelector("#email").value
      const password = document.querySelector("#password").value
      const confirmPassword = document.querySelector("#confirmPassword").value
      const rol = document.querySelector("#rol").value
      const organizacion = document.querySelector("#organizacion").value

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden")
        return
      }

      const emailExiste = usuarios.some((usuario) => usuario.email === email)

      if (emailExiste) {
        alert("Este correo electrónico ya está registrado")
        return
      }

      if (rol === "organizador" && !organizacion) {
        alert("Si eres organizador, debes proporcionar el nombre de tu organización")
        return
      }

      const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email,
        password: password,
        rol: rol,
      }

      if (rol === "organizador") {
        nuevoUsuario.organizacion = organizacion
      }

      usuarios.push(nuevoUsuario)

      usuarioActual = nuevoUsuario

      guardarUsuarioEnLocalStorage(nuevoUsuario)

      document.getElementById("registerModal").style.display = "none"
      actualizarUIUsuario()

      alert("Registro completado con éxito")

      window.location.reload()
    })
  }

  const loginForm = document.querySelector("#loginForm")

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault()

      const email = document.querySelector("#loginEmail").value
      const password = document.querySelector("#loginPassword").value

      const usuario = usuarios.find((u) => u.email === email && u.password === password)

      if (!usuario) {
        alert("Correo electrónico o contraseña incorrectos")
        return
      }

      usuarioActual = usuario

      guardarUsuarioEnLocalStorage(usuario)

      document.querySelector("#loginModal").style.display = "none"
      actualizarUIUsuario()

      alert("Has iniciado sesión correctamente")

      window.location.reload()
    })
  }

  const inscriptionForm = document.querySelector("#inscriptionForm")

  if (inscriptionForm) {
    inscriptionForm.addEventListener("submit", (event) => {
      event.preventDefault()

      if (!usuarioActual) {
        alert("Debes iniciar sesión para inscribirte a un evento")
        return
      }

      const nombre = document.querySelector("#inscriptionNombre").value
      const email = document.querySelector("#inscriptionEmail").value

      const urlParams = new URLSearchParams(window.location.search)
      const eventoId = Number.parseInt(urlParams.get("id"))

      const evento = eventos.find((e) => e.id === eventoId)

      if (!evento) {
        alert("Evento no encontrado")
        return
      }

      if (usuarioActual.rol === "organizador" && evento.organizador.id === usuarioActual.id) {
        alert("No puedes inscribirte a tu propio evento")
        return
      }

      if (evento.inscritos >= evento.plazas) {
        alert("Lo sentimos, no quedan plazas disponibles para este evento")
        return
      }

      evento.inscritos++

      guardarEventosEnLocalStorage()

      document.querySelector("#inscriptionModal").style.display = "none"

      cargarDetalleEvento()

      alert(
        `¡Inscripción completada con éxito! Te has inscrito en "${evento.nombre}". Recibirás un correo de confirmación en ${email}.`,
      )
    })
  }

  const createEventForm = document.querySelector("#createEventForm")
  if (createEventForm) {
    createEventForm.addEventListener("submit", (event) => {
      event.preventDefault()

      if (!usuarioActual || usuarioActual.rol !== "organizador") {
        alert("Solo los organizadores pueden crear eventos")
        return
      }

      const nombre = document.querySelector("#eventName").value
      const categoria = document.querySelector("#eventCategory").value
      const fecha = document.querySelector("#eventDate").value
      const hora = document.querySelector("#eventTime").value
      const duracion = document.querySelector("#eventDuration").value
      const tipoUbicacion = document.querySelector("#eventLocationType").value
      const plazas = Number.parseInt(document.querySelector("#eventCapacity").value)
      const descripcion = document.querySelector("#eventDescription").value

      if (!nombre || !categoria || !fecha || !hora || !duracion || !plazas || !descripcion) {
        alert("Por favor, completa todos los campos obligatorios")
        return
      }

      let ubicacion = {}
      if (tipoUbicacion === "presencial") {
        const lugar = document.querySelector("#eventPlace").value
        const direccion = document.querySelector("#eventAddress").value
        if (!lugar || !direccion) {
          alert("Por favor, completa los datos de ubicación presencial")
          return
        }
        ubicacion = {
          tipo: "presencial",
          lugar: lugar,
          direccion: direccion,
        }
      } else {
        const plataforma = document.querySelector("#eventPlatform").value
        const enlace = document.querySelector("#eventLink").value
        if (!plataforma || !enlace) {
          alert("Por favor, completa los datos de ubicación online")
          return
        }
        ubicacion = {
          tipo: "online",
          plataforma: plataforma,
          enlace: enlace,
        }
      }

      const nuevoEvento = {
        id: getNewEventId(),
        nombre: nombre,
        fecha: fecha,
        hora: hora,
        duracion: duracion,
        ubicacion: ubicacion,
        categoria: categoria,
        descripcion: descripcion,
        imagen: `https://placehold.co/800x400/2c7d59/white?text=${encodeURIComponent(nombre)}`,
        organizador: {
          id: usuarioActual.id,
          nombre: usuarioActual.organizacion || usuarioActual.nombre,
          contacto: usuarioActual.email,
          telefono: "+34 000 000 000",
        },
        plazas: plazas,
        inscritos: 0,
      }

      eventos.push(nuevoEvento)

      guardarEventosEnLocalStorage()

      document.querySelector("#createEventModal").style.display = "none"

      alert("¡Evento creado con éxito!")

      window.location.href = `detalle_evento.html?id=${nuevoEvento.id}`
    })
  }
}

function mostrarLoginModal() {
  document.querySelector("#loginModal").style.display = "block"
}

function mostrarRegistroModal() {
  document.querySelector("#registerModal").style.display = "block"
}

function mostrarModalCrearEvento() {
  let createEventModal = document.querySelector("#createEventModal")

  if (!createEventModal) {
    createEventModal = document.createElement("div")
    createEventModal.id = "createEventModal"
    createEventModal.className = "modal"

    const modalHTML = `
      <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Crear Nuevo Evento</h2>
        <form id="createEventForm">
          <div class="form-group">
            <label for="eventName">Nombre del evento:</label>
            <input type="text" id="eventName" name="eventName" required>
          </div>
          <div class="form-group">
            <label for="eventCategory">Categoría:</label>
            <select id="eventCategory" name="eventCategory" required>
              <option value="conferencias">Conferencias</option>
              <option value="talleres">Talleres</option>
              <option value="seminarios">Seminarios</option>
              <option value="ferias">Ferias</option>
            </select>
          </div>
          <div class="form-group">
            <label for="eventDate">Fecha:</label>
            <input type="date" id="eventDate" name="eventDate" required>
          </div>
          <div class="form-group">
            <label for="eventTime">Hora:</label>
            <input type="time" id="eventTime" name="eventTime" required>
          </div>
          <div class="form-group">
            <label for="eventDuration">Duración:</label>
            <input type="text" id="eventDuration" name="eventDuration" placeholder="Ej: 2 horas" required>
          </div>
          <div class="form-group">
            <label for="eventLocationType">Tipo de ubicación:</label>
            <select id="eventLocationType" name="eventLocationType" required>
              <option value="presencial">Presencial</option>
              <option value="online">Online</option>
            </select>
          </div>
          
          <div id="presencialFields">
            <div class="form-group">
              <label for="eventPlace">Lugar:</label>
              <input type="text" id="eventPlace" name="eventPlace">
            </div>
            <div class="form-group">
              <label for="eventAddress">Dirección:</label>
              <input type="text" id="eventAddress" name="eventAddress">
            </div>
          </div>
          
          <div id="onlineFields" style="display: none;">
            <div class="form-group">
              <label for="eventPlatform">Plataforma:</label>
              <input type="text" id="eventPlatform" name="eventPlatform" placeholder="Ej: Zoom, Teams">
            </div>
            <div class="form-group">
              <label for="eventLink">Enlace:</label>
              <input type="text" id="eventLink" name="eventLink">
            </div>
          </div>
          
          <div class="form-group">
            <label for="eventCapacity">Plazas disponibles:</label>
            <input type="number" id="eventCapacity" name="eventCapacity" min="1" required>
          </div>
          <div class="form-group">
            <label for="eventDescription">Descripción:</label>
            <textarea id="eventDescription" name="eventDescription" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-primary">Crear Evento</button>
        </form>
      </div>
    `

    createEventModal.innerHTML = modalHTML
    document.body.appendChild(createEventModal)

    const locationTypeSelect = document.querySelector("#eventLocationType")
    const presencialFields = document.querySelector("#presencialFields")
    const onlineFields = document.querySelector("#onlineFields")

    locationTypeSelect.addEventListener("change", () => {
      if (locationTypeSelect.value === "presencial") {
        presencialFields.style.display = "block"
        onlineFields.style.display = "none"
      } else {
        presencialFields.style.display = "none"
        onlineFields.style.display = "block"
      }
    })

    const closeBtn = createEventModal.querySelector(".close-modal")
    closeBtn.addEventListener("click", () => {
      createEventModal.style.display = "none"
    })

    inicializarFormularios()
  }

  createEventModal.style.display = "block"

  const today = new Date().toISOString().split("T")[0]
  document.querySelector("#eventDate").min = today
}

function getNewEventId() {
  if (eventos.length === 0) {
    return 1
  }
  return Math.max(...eventos.map((e) => e.id)) + 1
}