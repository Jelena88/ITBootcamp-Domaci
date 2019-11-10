
function lifeSupply(numPerMonth,age){
    var lifeSupply = numPerMonth*12;
    var years = 100-age;
    return lifeSupply*years
}


console.log(lifeSupply(10,26)) 

