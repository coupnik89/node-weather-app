console.log('Client side javascript file is loaded!')

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
        
//     })
// })
fetch('http://localhost:3000/weather?address=!').then((response) => {
    // json() = parsed json
    response.json().then((data) => {
        if(data.error) {
            return console.log(data.error)
        }

        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const address = document.querySelector('#location')
const foreCast = document.querySelector('#foreCast')
const errorMsg = document.querySelector('#error')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:3000/weather?address=${search.value}`).then((response) => {
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