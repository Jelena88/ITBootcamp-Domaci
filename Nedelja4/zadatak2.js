var recept1=
{Ime: 'cokoladni Tart',
Tezina: 'tezak',
Sastojci: ['cokolada za kuvanje', 'brasno', 'ulje', 'jogurt', 'soda bikarbona', 'mleko', 'secer']};

var recept2={
Ime: 'sladoled',
Tezina: 'lak',
Sastojci: ['zaladjene banane', 'ekstrakt vanile', 'kakao']};

var recept3={
Ime: 'palacinke',
Tezina: 'pocetni',
Sastojci: ['ovsene pahuljice', 'ovseno brasno', 'jaja', 'mleko', 'banana', 'svez spanac']};

var recept4={
Ime: 'salata sa brokolijem',
Tezina: 'srednji',
Sastojci: ['brokoli', 'crveni luk', 'majonez', 'jogurt', 'suncokret', 'so']};



var recepti=[]
recepti.push(recept1,recept2,recept3,recept4); 

recepti.forEach(element=>{
    if (element.Tezina == 'lak'|| element.Tezina == 'pocetni'){
        console.log(element);
     
      
  }
} 
) 