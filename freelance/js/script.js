const overlay = document.querySelector('.overlay')
const rightMenu = document.querySelector('.header-right__menu')
const rightMenuOpen = document.querySelector('#header-right__open')
const rightMenuClose = document.querySelector('#header-right__close')
const col1 = document.querySelector('#col_1')
const col2 = document.querySelector('#col_2')
const col3 = document.querySelector('#col_3')
const col4 = document.querySelector('#col_4')

const leftMenu = document.querySelector('.header__bottom')
const leftMenuOpen = document.querySelector('.header__left_open')

rightMenuOpen.onclick = () => {
    rightMenu.classList.add('header-right__menu-open')
    overlay.classList.add('overlay-open')
}
rightMenuClose.onclick = () => {
    rightMenu.classList.remove('header-right__menu-open')
    overlay.classList.remove('overlay-open')
}
leftMenuOpen.onclick = () => {
    leftMenu.classList.toggle('header__left-menu-open')
    leftMenuOpen.classList.toggle('left_open_active')
    overlay.classList.toggle('overlay-open')
}
col1.onclick = () => {
    col1.parentNode.classList.toggle('footer__col_active')
}
col2.onclick = () => {
    col2.parentNode.classList.toggle('footer__col_active')
}
col3.onclick = () => {
    col3.parentNode.classList.toggle('footer__col_active')
}
col4.onclick = () => {
    col4.parentNode.classList.toggle('footer__col_active')
}