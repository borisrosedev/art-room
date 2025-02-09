document.addEventListener('DOMContentLoaded', () => {

    const landingLogoFigure = document.getElementById('landing-logo-figure')
    const landingMain = document.getElementById('landing-main')

    setTimeout(() => {
        landingLogoFigure.classList.remove('show-up-1-5-s')
        landingLogoFigure.classList.add('show-up-higher-1-5-s')

        setTimeout(() => {
            landingMain.innerHTML = ""
            const enterButton = document.createElement('button')
            enterButton.setAttribute('type', 'button')
            enterButton.textContent = "Découvrir ArtRoom"
            enterButton.classList.add('button')
            enterButton.classList.add('is-primary')
            enterButton.classList.add('is-dark')
            enterButton.classList.add('show-up-1-5-s')
            landingMain.appendChild(enterButton)
            

        }, 1500)
    }, 2000)
})



