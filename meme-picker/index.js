import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName('radio')
    const option = document.getElementById(e.target.id).parentElement
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    option.classList.add('highlight')
}

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked')?.value
    if (selectedEmotion) {
        const isGif = gifsOnlyOption.checked;
        const matchingCatsArray = catsData.filter(cat => isGif
            ? cat.emotionTags.includes(selectedEmotion) && cat.isGif
            : cat.emotionTags.includes(selectedEmotion)
        )
        return matchingCatsArray
    } 
}

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1) {
        return catsArray[0]
    }
    else {
        const index = Math.floor(Math.random() * catsArray.length)
        return catsArray[index]
    }
}

function renderCat() {
    getSingleCatObject()
}

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for (let emotion of emotions) {
        radioItems += `
            <div class='radio'>
                <label for='${emotion}'>${emotion}</label>
                <input
                    type='radio'
                    id='${emotion}'
                    value='${emotion}'
                    name='emotions'
                >
            </div>
        `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)