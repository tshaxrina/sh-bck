let inps = document.querySelectorAll('input')
let next = document.querySelector('.next')
let sign = document.querySelector('.sign')
let newW = document.querySelector('.new')

let locale = JSON.parse(localStorage.getItem('email')) || null
console.log(locale);
let ms = {
    email: inps.value,
    name: inps.value,
    surname: inps.value,
    password: inps.value
}
next.onclick = () => {
    localStorage.setItem('email', JSON.stringify({
        email: email.value,
        name: name.value,
        surname: surname.value,
        password: password.value}))
        newW.href = "./C:\Shaxrinan\Новая папка\script.html"
}
let patterns = {
    surname: /^[a-z ,.'-]+$/i,
    name: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g
}
inps.forEach(inp => {

    inp.onkeyup = () => {
        if(patterns[inp.name].test(inp.value)) {
            inp.classList.remove('error')
        } else {
            inp.classList.add('error')
        }
    }
}) 