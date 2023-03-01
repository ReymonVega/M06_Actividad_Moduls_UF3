

function draw (posicionX, posicionY, expansion, color) {
   
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 10; //El tamaño de linea
    ctx.strokeStyle = color;
    ctx.arc(posicionX, posicionY, expansion,  1 * Math.PI, false);
    ctx.stroke();
}

function randomCirlce (colores,posicionXGlobal,posicionYGlobal,expansion) {
    
    //Bucle
    for (let i = 0; i < colores.length; i++) {

        console.log("colores",colores[i], 'expansion' ,expansion); // Recorrer el array
        expansion += 10; //Reutilizando el for, para la expansion
        draw(posicionXGlobal, posicionYGlobal, expansion, colores[i]);
        /*
        arcoiris(posicionXGlobal, posicionYGlobal, 130, colores[1]);
        arcoiris(posicionXGlobal, posicionYGlobal, 140, colores[2]);
        arcoiris(posicionXGlobal, posicionYGlobal, 150, colores[3]);
        arcoiris(posicionXGlobal, posicionYGlobal, 160, colores[4]);
        */
        
    }
}

export {draw,randomCirlce}






