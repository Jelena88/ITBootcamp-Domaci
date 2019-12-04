class Message {
    constructor(data) { 
        this.node = document.createElement('div');
         
        this.data = data;
        this.message = document.createElement('label');
        this.message.textContent = `Poruka: ${this.data.message} ` ; 
  
        this.time = document.createElement('label'); 
        this.time.textContent = `Datum: ${new Date(this.data.timestamp)} `
        this.author = document.createElement('label');
        this.author.textContent =`Autor: ${this.data.username}`;
        this.container = document.createElement('div'); 

        this.message.className = 'message';
       this.time.className = 'time';
       this.author.className = 'author';
        this.container.className = 'container';

        this.container.appendChild(this.author);
        this.container.appendChild(this.message);
        this.container.appendChild(this.time);
        this.node.appendChild(this.container); 
    }
    getNode() {
        return this.node; 
    }
}

export {
    Message
}