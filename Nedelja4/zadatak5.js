var recept1={
    Ime: 'cokoladni Tart',
    Tezina: 'tezak',
    Sastojci: [
      { imeSastojka: 'jaja', kolicina: 10, cena: 15 },
      { imeSastojka: 'cokolada', kolicina: 2, cena: 200 },
      { imeSastojka: 'secer', kolicina: 5, cena: 90 },
      { imeSastojka: 'brasno', kolicina: 3, cena: 80 },
      { imeSastojka: 'ulje', kolicina: 1, cena: 120 }
    ],

    cenaRecepta:function (){
        let cenaRecepta = 0;
        for (let i=0; i<this.Sastojci.length; i+=1) {
          cenaRecepta += this.Sastojci[i].kolicina * this.Sastojci[i].cena;
        }
        return cenaRecepta
        
      }
}

console.log(recept1.cenaRecepta())
		   
		   
		