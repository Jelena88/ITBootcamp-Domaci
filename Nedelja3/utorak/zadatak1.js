function max(a, b, c) {

    var max = a;

    if (b > max)
        max = b;
    if (c > max)
        max = c;

    return max;
}
console.log(max(3, 7, 10));

let porudzbina ={
    id:12,
    naziv: 'Maragrita',
    velicina:32,
    kolicina: 3,
    cena:900
}

function ukupnaCena () {
    var ukupnaCena=porudzbina.koliica*porudzbina.cena
    return ukupnaCena
    

}
porudzbina.ukupnaCena=ukupnaCena

console.log(porudzbina)