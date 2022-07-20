const optionsToggler = document.getElementById('options_toggler');
const options = document.getElementById('options');


optionsToggler.addEventListener('click', (e) => {
    options.style.flexBasis = options.style.flexBasis === "350px" ? "0" : "350px"
})