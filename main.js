window.addEventListener('scroll', onScroll)
onScroll()

// função scroll
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuOnSection(home)
    activateMenuOnSection(services)
    activateMenuOnSection(about)
    activateMenuOnSection(contact)
    //activateMenuOnSection()
    
}

// mostrar posição no menu
function activateMenuOnSection(section){

    const targetLine = scrollY + innerHeight/2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //limite superior
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight

    // limite inferior
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    // achar o elemento pelo seletor
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }

    
}

function showNavOnScroll(){
    if(scrollY>0){
        navigation.classList.add('scroll')
    } else{
        navigation.classList.remove('scroll')
    }
}


// BackToTopButton

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }
// scroll Reveal

ScrollReveal({
    origin:'top',
    distance:'30px',
    duration: 700,

}).reveal(`#home, home img, #home .stats, #services, #services .cards, #about`);

// função menu
function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

