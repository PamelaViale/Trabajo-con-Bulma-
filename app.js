
 
    
    const $ = (selector) => document.querySelector(selector)

    document.addEventListener("DOMContentLoaded", () => {
      // -------- NAVBAR --------
      const burger = $(".navbar-burger")
      const menu = $("#navbarBasicExample")

      // Al hacer clic en el botón hamburguesa, alterno la visibilidad del menu
      burger.addEventListener("click", () => {
        burger.classList.toggle("is-active")
        menu.classList.toggle("is-active")
      });

      // Cerrar el menu hamburguesa si hago clic fuera 
      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !burger.contains(e.target)) {
          burger.classList.remove("is-active")
          menu.classList.remove("is-active")
        }
      });

      //VALIDACIONES FORM
      const form = $("#contactForm")
      const nameInput = $("#name")
      const emailInput = $("#email")
      const nameHelp = $("#nameHelp")
      const emailHelp = $("#emailHelp")

      // de3 input nombre
      nameInput.addEventListener("input", () => {
        if (nameInput.value.trim().length >= 3) {
          nameInput.classList.add("is-success")
          nameInput.classList.remove("is-danger")
          nameHelp.textContent = "Nombre válido"
          nameHelp.className = "help is-success"
        } else {
          nameInput.classList.add("is-danger")
          nameInput.classList.remove("is-success")
          nameHelp.textContent = "El nombre debe tener al menos 3 caracteres"
          nameHelp.className = "help is-danger"
        }
      });

      // del input email 
      emailInput.addEventListener("input", () => {
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add("is-success")
          emailInput.classList.remove("is-danger")
          emailHelp.textContent = "Email válido"
          emailHelp.className = "help is-success"
        } else {
          emailInput.classList.add("is-danger")
          emailInput.classList.remove("is-success")
          emailHelp.textContent = "Email inválido"
          emailHelp.className = "help is-danger"
        }
      });

      // Al enviar el formulario
      form.addEventListener("submit", (e) => {
        e.preventDefault()

        if (
          nameInput.classList.contains("is-success") &&
          emailInput.classList.contains("is-success")
        ) {
          alert("Mensaje enviado")
          form.reset() // Limpia los campos
          nameInput.classList.remove("is-success")
          emailInput.classList.remove("is-success")
          nameHelp.textContent = ""
          emailHelp.textContent = ""
        } else {
          alert(" Corrige los errores antes de enviar")
        }
      })
    })
