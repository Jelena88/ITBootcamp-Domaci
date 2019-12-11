

class MessageInput {
    constructor() {
        this.node = document.createElement('div');

        this.message = document.createElement('input');
        this.message.type = 'text';
        this.message.placeholder = 'Poruka'; 

        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.placeholder = 'Username'; 
        this.node.appendChild(this.username);

      // this.set = document.createElement('button');
      // this.set.textContent = 'Potvrdi';
      // this.node.appendChild(this.set);

        this.sendButton = document.createElement('button');
        this.sendButton.textContent = 'Posalji poruku'; 

     //   
     //   this.sortButton = document.createElement('button');
     //   this.sortButton.textContent = 'Sortiraj'; 

        
      //  this.node.appendChild(this.sortButton);
        this.node.appendChild(this.message);
        this.node.appendChild(this.sendButton); 

//
     //   this.set.addEventListener('click', () => {
     //       if(this.set.clicked!==true){
     //           alert ("potvrdi username")}
        }
       

       // )}
    getNode() {
        return this.node;
    }
    btn_send_on_click(on_click) {
        this.sendButton.addEventListener('click', on_click); 
    }


    sort(onClick2) {
        this.set.addEventListener('click', onClick2);
    }
}

export {
    MessageInput
}


//Sta je Fetch?
//Fetch API je noviji i unapređen način za asinhronu komunikaciju, Fetch funkcija pravi obećanje (promise), 
//koje nakon što se razreši, mozemo dalje koristiti

//Koja je razlika izmedju GET i POST-a

//Post metoda je dizajnirana da zahteva da se sa veb servera prihvata podatak poslat u okviru http zahteva.
//Ona slaje podatke koji se obradjuju, a ukljuceni su u telo zahteva. Na ovaj nacin se mogu stvoriti novi ili azurirati postojeci podaci
//Nasuprot tome get metod je dizajniran da preuzme podatke sa servera. Za razliku od GET, podaci koji se šalju POST metodom su nevidljivi
//za korisnika, i ne dodaju se URL adresi, oni se prenose u telu HTTP zahteva.POST metod nema ograničenje u smislu veličine,
//dok GET ima, zbog ograničenja dužine URL adrese

//Pomocu koje reci eksportujemo funkciju/klasy unutar file-a?

// export
//export function functionName(){...}
//export class ClassName {...}

//Sta je React?

//React je JavaScript biblioteka otvorenog koda koja obezbedjuje pregled podataka zapisanih preko HTML-a.


