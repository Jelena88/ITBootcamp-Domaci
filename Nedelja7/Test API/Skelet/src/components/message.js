class Message {
    constructor(data) { //data ili moze da bude bilo sta
        this.node = document.createElement('div');// this.node je segment u koji cemo smestiti sve podate
         
        this.data = data; // parametar koji cemo dodeliti a to je objekat niza
//console.log(data) // ispisuje objekat
        this.message = document.createElement('label');
        this.message.textContent = `Poruka: ${this.data.message} ` ; // da ispisuje u HTML naziv i podataka koji vucemo sa backenda, data.message je podataka sa backenda
  
        this.time = document.createElement('label'); // svaki novi podatak smestamo u novi label
        this.time.textContent = `Datum: ${new Date(this.data.timestamp)} `
        this.author = document.createElement('label');
        this.author.textContent =`Autor: ${this.data.username}`;
        this.container = document.createElement('div'); // sve podatke smestamo u jedan div

        this.message.className = 'message';
       this.time.className = 'time';
       this.author.className = 'author';
        this.container.className = 'container';

        this.container.appendChild(this.author);
        this.container.appendChild(this.message);
        this.container.appendChild(this.time);
        this.node.appendChild(this.container); // div sa svom podacima smo smestili u segment <message><message>
    }
    getNode() {
        return this.node; // vraca node kao dom element
    }
}

export {
    Message
}