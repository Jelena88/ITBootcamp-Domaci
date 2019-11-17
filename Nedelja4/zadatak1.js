

var recept1={
Ime: 'cokoladni Tart',
Tezina: 'tezak',
Sastojci: ['cokolada za kuvanje', 'brasno', 'ulje', 'jogurt', 'soda bikarbona', 'mleko', 'secer'],
ispis:function () {
    return `${this.Ime}: \nTezina:${this.Tezina}\nSastojci:${this.Sastojci}`;
}}

var recept2={
Ime: 'sladoled',
Tezina: 'lak',
Sastojci: ['zaladjene banane', 'ekstrakt vanile', 'kakao'],
ispis:function () {
    return `${this.Ime}: \nTezina:${this.Tezina}\nSastojci:${this.Sastojci}`;
}}


var recept3={
Ime: 'palacinke',
Tezina: 'pocetni',
Sastojci: ['ovsene pahuljice', 'ovseno brasno', 'jaja', 'mleko', 'banana', 'svez spanac'],
ispis:function () {
    return `${this.Ime}: \nTezina:${this.Tezina}\nSastojci:${this.Sastojci}`;
}

  }

var recept4={
Ime: 'salata sa brokolijem',
Tezina: 'srednji',
Sastojci: ['brokoli', 'crveni luk', 'majonez', 'jogurt', 'suncokret', 'so'],

    ispis:function () {
        return `${this.Ime}: \nTezina:${this.Tezina}\nSastojci:${this.Sastojci}`;
    }

      }
   
  
      console.log(recept1.ispis())
      console.log(recept2.ispis())
      console.log(recept3.ispis())
      console.log(recept4.ispis())


  

