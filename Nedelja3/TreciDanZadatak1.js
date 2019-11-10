function array([a, b, c, d, e, f, g, h, i, j]) {
    var array = [a, b, c, d, e, f, g, h, i, j];
    var newArray = [];
    for (let i = 0; i < array.length; i++)
        
    if (array[i] % 5 == 0)
        newArray.push(array[i])
    return newArray;
}

console.log(array([1,2,3,4,5,10,15,23,1,5]));
