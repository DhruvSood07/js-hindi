// generate random colors

const randomColor= function(){
    const hex = "0123456789ABCDEF"
    let color ='#'

    for(let i =0;i<6;i++){
        color += hex[Math.float(Math.random()*16)]
    }
    return color
}

const startChangingColor = function(){
    document.body.style.backgroundColor =randomColor();
}
const stopChangingColor = function(){
    
}
document.querySelector("start").
    addEventListener('click', startChangingColor)

    document.querySelector("stop").
    addEventListener('click', stop)
