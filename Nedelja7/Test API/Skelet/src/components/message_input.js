

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

        this.set = document.createElement('button');
        this.set.textContent = 'Potvrdi';
        this.node.appendChild(this.set);

        this.sendButton = document.createElement('button');
        this.sendButton.textContent = 'Posalji poruku'; 

        
        this.sortButton = document.createElement('button');
        this.sortButton.textContent = 'Sortiraj'; 

        
        this.node.appendChild(this.sortButton);
        this.node.appendChild(this.message);
        this.node.appendChild(this.sendButton); 


        this.set.addEventListener('click', () => {
            if(this.set.clicked!==true){
                alert ("potvrdi username")}
        }
       

        )}
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


