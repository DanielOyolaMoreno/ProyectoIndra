const usuarios = [
  {
    id: 1,
    nombre: "Ana García",
    email: "ana@ejemplo.com",
    password: "password123",
    rol: "organizador",
    organizacion: "ArquitecturaVerde",
  },
  {
    id: 2,
    nombre: "Carlos López",
    email: "carlos@ejemplo.com",
    password: "password123",
    rol: "organizador",
    organizacion: "EcoMobility",
  },
  {
    id: 3,
    nombre: "María Rodríguez",
    email: "maria@ejemplo.com",
    password: "password123",
    rol: "usuario",
  },
  {
    id: 4,
    nombre: "Juan Pérez",
    email: "juan@ejemplo.com",
    password: "password123",
    rol: "usuario",
  },
]

let usuarioActual = null

function cargarUsuarioDesdeLocalStorage() {
  const usuarioGuardado = localStorage.getItem("usuarioActual")
  if (usuarioGuardado) {
    usuarioActual = JSON.parse(usuarioGuardado)
    console.log("Usuario cargado desde localStorage:", usuarioActual.nombre)
  }
}

function guardarUsuarioEnLocalStorage(usuario) {
  localStorage.setItem("usuarioActual", JSON.stringify(usuario))
  console.log("Usuario guardado en localStorage:", usuario.nombre)
}

function eliminarUsuarioDeLocalStorage() {
  localStorage.removeItem("usuarioActual")
  console.log("Usuario eliminado de localStorage")
}

function cerrarSesion(event) {
  event.preventDefault()
  usuarioActual = null

  eliminarUsuarioDeLocalStorage()

  actualizarUIUsuario()
  alert("Has cerrado sesión correctamente")

  window.location.reload()
}

function actualizarUIUsuario() {
  const loginBtn = document.querySelector("#loginBtn")
  const registerBtn = document.querySelector("#registerBtn")
  const navUl = document.querySelector("nav ul")

  if (usuarioActual) {
    if (loginBtn) {
      loginBtn.textContent = usuarioActual.nombre
      loginBtn.href = "#"
      loginBtn.removeEventListener("click", mostrarLoginModal)
      loginBtn.classList.add("disabled")
      loginBtn.style.pointerEvents = "none"
      loginBtn.style.opacity = "0.6"
      loginBtn.setAttribute("disabled", "true")
    }

    if (registerBtn) {
      registerBtn.textContent = "Cerrar Sesión"
      registerBtn.replaceWith(registerBtn.cloneNode(true))
      const newRegisterBtn = document.querySelector("#registerBtn")
      newRegisterBtn.textContent = "Cerrar Sesión"
      newRegisterBtn.removeEventListener("click", mostrarRegistroModal)
      newRegisterBtn.addEventListener("click", cerrarSesion)
    }

    if (navUl && !document.querySelector("#rolIndicator")) {
      const rolItem = document.createElement("li")
      rolItem.id = "rolIndicator"
      rolItem.className = "rol-badge"
      rolItem.textContent = usuarioActual.rol === "organizador" ? "Organizador" : "Usuario"
      navUl.appendChild(rolItem)
    }
  } else {
    if (loginBtn) {
      loginBtn.textContent = "Iniciar Sesión"
      loginBtn.addEventListener("click", mostrarLoginModal)
      loginBtn.classList.remove("disabled")
      loginBtn.style.pointerEvents = "auto"
      loginBtn.style.opacity = "1"
      loginBtn.removeAttribute("disabled")
    }

    if (registerBtn) {
      registerBtn.textContent = "Registrarse"
      registerBtn.replaceWith(registerBtn.cloneNode(true))
      const newRegisterBtn = document.querySelector("#registerBtn")
      newRegisterBtn.textContent = "Registrarse"
      newRegisterBtn.removeEventListener("click", cerrarSesion)
      newRegisterBtn.addEventListener("click", mostrarRegistroModal)
    }

    const rolIndicator = document.querySelector("#rolIndicator")
    if (rolIndicator) {
      rolIndicator.remove()
    }

    const misEventosLink = document.querySelector("#misEventosLink")
    if (misEventosLink) {
      misEventosLink.parentElement.remove()
    }
  }
}