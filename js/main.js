const navigation = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded',function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu')
    const mobilemenu = document.querySelector('.mobile-menu')

    hamburgerMenu.addEventListener('click',function() {
        mobilemenu.classList.toggle('open')
    })
 
    document.addEventListener('click',function(event){
        if (!mobilemenu.contains(event.target) && !hamburgerMenu.contains(event.target) ) {
            mobilemenu.classList.remove('open')
        }
    })
})