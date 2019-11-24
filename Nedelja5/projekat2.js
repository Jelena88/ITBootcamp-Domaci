const selekt = document.querySelector('#selekt')
const prihodiLista = document.querySelector('#prihodiLista')
const rashodiLista = document.querySelector('#rashodiLista')
const rashodiCont = document.querySelector('rashodiUkupno')
const div = document.querySelector('div')

var dugme = document.querySelector('#unosDugme')
dugme.addEventListener('click', add)
var opis = document.querySelector('#opis')
var iznos = document.querySelector('#iznos')

var items1 = [0];
var items2 = []

function add() {

    var sel = selekt.value
    var opis = document.querySelector('#opis')
    var iznos = document.querySelector('#iznos')

    if (opis.value == '') {
        alert("Popunite polje opis")
return
    }
    if (iznos.value <= 0) {
        alert("Uneli ste pogresan iznos")
return
    }

    

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    function sumArray(total, value) {
        return total + value;
        }
    if (sel == 'Prihodi') {
var par = document.createElement('div')
par.className = 'list1cont'
        var par1 = document.createElement('div')
        par1.className = 'div1'
        var obrisi = document.createElement('button')
        obrisi.className ='obrisi1'

        obrisi.innerHTML = 'x'
        par.appendChild(par1)
        par.appendChild(obrisi)
        prihodiLista.appendChild(par)
        par1.innerHTML = `${opis.value} +${formatNumber(iznos.value)}`
        items1.push(iznos.value * 1);
 
      var sum1 = items1.reduce(sumArray);
//par.innerHTML = `${formatNumber(sum1)}`
        document.getElementById('prihodiUkupno').innerHTML = `${formatNumber(sum1)} `
        
        obrisi.addEventListener ('click', removee)
        function removee(e){
           
            var obrisi = e.target
            var divtoremove1 = obrisi.parentElement
            divtoremove1.remove();


        }
        
    }

   
    if (sel == 'Rashodi') {
        var parr = document.createElement('div')
    parr.className = 'list2cont'


        var sum1 = items1.reduce(sumArray);
        if (sum1 == 0){alert('Unesite prvo prihode'); return}
        var par2 = document.createElement('div')
        par2.className = 'div2'

        var obrisi1 = document.createElement('button')
        obrisi1.className ='obrisi2'
        obrisi1.innerHTML = 'x'
        parr.appendChild(par2)
        parr.appendChild(obrisi1)
        rashodiLista.appendChild(parr)
    var procenat = (iznos.value*100/sum1).toFixed(2)
 

        par2.innerHTML = `${opis.value} -${formatNumber(iznos.value)} (${procenat}%)`

        items2.push(iznos.value * 1 - iznos.value * 2);
        

        
        var sum2 = items2.reduce(sumArray);
        //if (sum1 == 0){document.getElementById('rashodiUkupno').innerHTML = ``}
        //else
        var procenat2 = (-sum2*100/sum1).toFixed(2)
        
     
        document.getElementById('rashodiUkupno').innerHTML = `${formatNumber(sum2)}  (${procenat2}%)`
       
        obrisi1.addEventListener ('click', removeee)
        function removeee(a){
            var obrisi1 = a.target
            var divtoremove2 = obrisi1.parentElement
            divtoremove2.remove();
        }
       

        
   }





    var items3 = items1.concat(items2)
    var sum3 = items3.reduce(sumArray);

    //if (sum1 == 0) {document.getElementById('stanjeUkupno').innerHTML = ``}
    //else
    document.getElementById('stanjeUkupno').innerHTML = `${formatNumber(sum3)}`

   // var item4 = items2.reduce(sumArray)*100/items1.reduce(sumArray)
//
   // console.log(item4)
   // var ite4cont = document.createElement('p')
   // document.innerHTML=ite4cont
   // ite4cont.appendChild(item4)
   // rashodiCont.appendChild(ite4cont)
//
}//

  




