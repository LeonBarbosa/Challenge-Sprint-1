/* =============== login =============== */

/* ===== FOCUS ===== */
const inputs = document.querySelectorAll(".form__input")

/* ======= Add focus ======= */
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/* ======= Remove focus ======= */
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

/*===== LOGIN =====*/
document.addEventListener('DOMContentLoaded', () => {
  const showRegisterLink = document.getElementById('show-register');
  const showLoginLink = document.getElementById('show-login');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
  });

  showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
  });
});
