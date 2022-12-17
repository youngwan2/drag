const ball =document.querySelector('.ball');



let isTrue = false

function moveAt(pageX,pageY) {
    ball.style.left = pageX - ball.offsetWidth/2 +'px'
    ball.style.top = pageY - ball.offsetHeight/2 + 'px'
}


document.addEventListener('mousemove', (e)=>{
    if(isTrue === false) return 
    moveAt(e.pageX, e.pageY)
})



ball.addEventListener('click',()=>{
    if(isTrue === true){isTrue = false}
    else{isTrue =true}
    document.removeEventListener('mousemove',moveAt)
})