const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const address = document.querySelector('#location')
const foreCast = document.querySelector('#foreCast')
const errorMsg = document.querySelector('#error')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    address.innerHTML = 'Loading...'
    foreCast.innerHTML = ''
    
    fetch(`/weather?address=${search.value}`).then((response) => {
        // json() = parsed json
        response.json().then((data) => {
            if (data.error) {
                return errorMsg.innerHTML = data.error 
            }

            address.innerHTML = data.location
            foreCast.innerHTML = data.forecast
        })
    })
})