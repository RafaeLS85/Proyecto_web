
function handleNavClick(section) {

    if(section === "home"){
        document.querySelector("#home").classList.add("show")
        document.querySelector("#home").classList.remove("hide")

        document.querySelector("#profile").classList.add("hide")
        document.querySelector("#profile").classList.remove("show")

        document.querySelector("#contact").classList.add("hide")
        document.querySelector("#contact").classList.remove("show")
    }
    if(section === "profile"){
        document.querySelector("#home").classList.remove("show")
        document.querySelector("#home").classList.add("hide")

        document.querySelector("#profile").classList.add("show")
        document.querySelector("#profile").classList.remove("hide")

        document.querySelector("#contact").classList.add("hide")
        document.querySelector("#contact").classList.remove("show")
    }
    if(section === "contact"){
        document.querySelector("#home").classList.remove("show")
        document.querySelector("#home").classList.add("hide")

        document.querySelector("#profile").classList.remove("show")
        document.querySelector("#profile").classList.add("hide")

        document.querySelector("#contact").classList.remove("hide")
        document.querySelector("#contact").classList.add("show")
    }    
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
