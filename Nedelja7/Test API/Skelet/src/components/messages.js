import { get_messages } from "../utilities/ser";
import { Message } from "./message";

class Messages  {
    constructor() {
        this.node = document.createElement('messages'); // kreirali smo <messages></messages>
        
        get_messages().then(obj=>{ // funkcija koja uzima sve podatke sa backendaa to je objekat sa uslovom if
            //console.log(obj) //{success: true, data: Array(3)}
            if(obj.success == true) { // uslov 
                this.node.innerHTML = ''; //<messages></messages>
               
               obj.data.forEach( element => { // obj.data je niz, element je objekat u nizu Array(3)
                    let message= new Message(element); // za svaki element (koji je objekat) niza ce dati novu poruku koja ispisuje ceo objekat. Objekat je prosoa kroz konstruktor u message
                    //console.log(element) // element je objekat koji sadrzi autora poruku i vreme
                    this.node.appendChild(message.getNode());  // dodajemo poruku, autora i vreme u <messages></messages> kao dom
//console.log(message)
//console.log(message.getNode())
//console.log(message.getNode())

                    
                });
            }
         
        });
    }
    getNode(){
        return this.node;}
 
    }


export {
    Messages
}