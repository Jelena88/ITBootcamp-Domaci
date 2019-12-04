

class MessageInput {
    constructor() {
        this.node = document.createElement('div');

        this.message = document.createElement('input');
        this.message.type = 'text';
        this.message.placeholder = 'Poruka'; // prostor za poruku

        this.username = document.createElement('input');
        this.username.type = 'text';
        this.username.placeholder = 'Username'; 
        this.node.appendChild(this.username);

        this.set = document.createElement('button');
        this.set.textContent = 'Potvrdi';
        this.node.appendChild(this.set);

        this.sendButton = document.createElement('button');
        this.sendButton.textContent = 'Posalji poruku'; // dugme za send


        
        this.node.appendChild(this.message);
        this.node.appendChild(this.sendButton); // prostor za kucanje i dugme smo stavili u jedan div
    }
    getNode() {
        return this.node;
    }
    btn_send_on_click(on_click) {
        this.sendButton.addEventListener('click', on_click); // pozvali smo funkciju za slanje poruke
    }
}

export {
    MessageInput
}


