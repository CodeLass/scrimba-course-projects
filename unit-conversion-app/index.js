/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')

convertBtn.addEventListener("click", function() {
    const rawValue = inputEl.value.trim()
    if (rawValue === '') return

    const value = Number(rawValue)
    if (!Number.isNaN(value)) {
        lengthEl.textContent = convertLength(value)
        volumeEl.textContent = convertVolume(value)
        massEl.textContent = convertMass(value)
    }
})

function convertLength(num) {
    const metersToFeet = (num * 3.281).toFixed(3)
    const feetToMeters = (num / 3.281).toFixed(3)
    return `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetToMeters} meters`
}

function convertVolume(num) {
    const litersToGallons = (num * 0.264).toFixed(3)
    const gallonsToLiters = (num / 0.264).toFixed(3)
    return `${num} liters = ${litersToGallons} gallons | ${num} gallons = ${gallonsToLiters} liters`
}

function convertMass(num) {
    const kilosToPounds = (num * 2.204).toFixed(3)
    const poundsToKilos = (num / 2.204).toFixed(3)
    return `${num} kilos = ${kilosToPounds} pounds | ${num} pounds = ${poundsToKilos} kilos`
}