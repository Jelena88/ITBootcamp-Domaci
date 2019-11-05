function cena1cm(cena, poluprecnik) {
 
    return cena/(Math.pow(poluprecnik,2)*Math.PI)

}

console.log(`cena Pizze po 1cm2 iznosi ${cena1cm(600,16)} dinara`)