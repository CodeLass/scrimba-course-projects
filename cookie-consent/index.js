const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const modalText = document.getElementById('modal-text')
const consentForm = document.getElementById('consent-form')

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function() {
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e) {
    e.preventDefault()
    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">
                Uploading your data to the dark web...
            </p>
        </div>
    `
})