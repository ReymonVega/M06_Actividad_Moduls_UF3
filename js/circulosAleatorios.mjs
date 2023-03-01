function dibujo (posicionX, posicionY, expansion, escalaGrises ) {
    var c = document.getElementById("myCanvas2");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    
    ctx.arc(posicionX, posicionY, expansion, 0, 2 * Math.PI);
    ctx.fillStyle = escalaGrises;
    ctx.fill() //Llamadno al fillStyle
    // ctx.stroke();
}
function random(max, min) {
    return parseInt(Math.random() * (max - min) + min);

}

function circuloAle () {

    for (let i = 0; i < 10; i++) {
    
        let posicionXLocal= random(545, 55)
        let posicionYLocal = random(390, 60);
        let expansionLocal = random(70, 45);
        let escalaGrises = random(222, 67);
    
        let textoRGB = `rgb(${escalaGrises},${escalaGrises},${escalaGrises})` 
        dibujo(posicionXLocal,posicionYLocal , expansionLocal, textoRGB); //55 min y max 545
        //Y = 60min y max = 390
     
        // console.log(random(10, 2))
    

        //67 black y gris 222
        
    }
}



export {circuloAle}



//2. En el segon canvas dibuixaràs 10 cercles aleatoris amb diferents graus de gris (serà aleatori el centre, el radi i el nivell de gris). 