
import { Messages } from "../components/messages";
import { MessageInput } from "../components/message_input";
import { send_message } from "../utilities/ser";



class Content {
    constructor() {

     
        this.node = document.createElement('main');


        let messages = new Messages();
        let message_input = new MessageInput();
   
        //setBtnMessageOnClick
  

        message_input.btn_send_on_click(() => {
          

            if(message_input.message.value.trim() == '' || message_input.username.value.trim() =='' )
            return alert('Polje za poruku i username ne moze biti prazno');
            send_message(message_input.username.value, message_input.message.value)
            .then(response => {
                if(response.success == true) {
                    messages.getNode();
                    location.reload()
                
                }
            })

        });



        this.node.appendChild(messages.getNode());
        this.node.appendChild(message_input.getNode());
    
    }
    getNode() {
        return this.node;
    }
}

export {
    Content
}
