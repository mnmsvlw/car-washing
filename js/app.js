// import {QRCode} from '../js/qrcode'

const body = document.body
const textField = document.querySelectorAll('.text.field')
const form = document.querySelector('.form')
const email = document.querySelector('#email')
const blank = document.querySelector('#blank')
const filled = document.querySelector('#filled')
const qrcode = document.querySelector('#qrcode')


let backgroundNumber = 0
// let qr = new QRCode()

form.addEventListener('submit', generateQR)

const uuid = getLocalStorage()
changeBg()

function changeBg() {
    backgroundNumber === 3 ? backgroundNumber = 1 : backgroundNumber++
    body.style.backgroundImage = `url(../assets/img/${backgroundNumber}.jpg)`;
    clearTextFields()
    changeText()
    setTimeout(changeBg, 5000)
}

function changeText() {
    textField[backgroundNumber - 1].classList.add('active')
    // const fields = [...textField]
    // console.log(fields[0])
    // console.log(textField)
}

function clearTextFields() {
    textField.forEach(field => {
        field.classList.remove('active')
    })
}

function generateQR() {
    const email = document.querySelector('#email').value
    const uuid = crypto.randomUUID()
    const data = { email, uuid }
    localStorage.setItem('data', JSON.stringify(data))
}

function getLocalStorage() {
    if (localStorage.getItem('data')) {
        blank.style.display = 'none'
        return JSON.parse(localStorage.getItem('data')).uuid
    } else {
        filled.style.display = 'none'
    }
}

