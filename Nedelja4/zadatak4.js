var recept1={
    Ime: 'cokoladni Tart',
    Tezina: 'tezak',
    Sastojci: ['cokolada za kuvanje', 'brasno', 'ulje', 'jogurt', 'soda bikarbona', 'mleko', 'secer'],
  }


sastojak1 = {
    imeSastojka: 'jaja',
    kolicina: 10,
    cena: 150

}

sastojak2 = {
    imeSastojka: 'cokolada',
    kolicina: 200,
    cena: 200

}

sastojak3 = {
    imeSastojka: 'secer',
    kolicina: 500,
    cena: 300

}

sastojak4 = {
    imeSastojka: 'brasno',
    kolicina: 300,
    cena: 150

}

sastojak5 = {
    imeSastojka: 'ulje',
    kolicina: 100,
    cena: 110

}
var sastojak=[]
    sastojak.push(sastojak1,sastojak2,sastojak3,sastojak4,sastojak5); 


    recept1.Sastojci=sastojak
    console.log(recept1)

