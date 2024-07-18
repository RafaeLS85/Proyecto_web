
function handleNavClick(section) {

  const home = document.querySelector("#home")
  const profile = document.querySelector("#profile")
  const contact = document.querySelector("#contact")

    if(section === "home"){
      home.classList.remove("hide")
      profile.classList.add("hide")
      contact.classList.add("hide")
    }
    if(section === "profile"){
        profile.classList.remove("hide")
        home.classList.add("hide")
        contact.classList.add("hide")
    }
    if(section === "contact"){
        contact.classList.remove("hide")
        profile.classList.add("hide")
        home.classList.add("hide")
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
