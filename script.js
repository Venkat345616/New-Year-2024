let ball = document.querySelector('.ball')
let chim = document.querySelector('.chim')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let fire = document.querySelector('.fire')
let year = document.querySelector('.year')
let wishes = document.querySelector('.wishes')
let names = document.querySelector('.name')
let border = document.querySelector('.border')
let background = document.querySelector('body')
let p_name = document.querySelector('.p_name')
let btn = document.querySelector('.btn')









function none(){
    ball.style.display = 'none'
    chim.style.display = 'none'
    left.style.display = 'none'
    right.style.display = 'none'
    fire.style.display = 'none'
    year.style.display = 'none'
    wishes.style.display = 'none'
    border.style.display = 'none'
   
}

none()

function block(){
    ball.style.display = 'block'
    chim.style.display = 'block'
    left.style.display = 'block'
    right.style.display = 'block'
    fire.style.display = 'block'
    year.style.display = 'block'
    wishes.style.display = 'block'
    border.style.display = 'block'
    names.innerHTML = p_name.value
    p_name.style.display = 'none'
    btn.style.display = 'none'
    background.style.backgroundImage = 'linear-gradient(45deg, rgba(88, 52, 133, 1) 30%, rgba(0, 212, 255, 1) 100%)'

}