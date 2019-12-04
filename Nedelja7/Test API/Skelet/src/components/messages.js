import { get_messages } from "../utilities/ser";
import { Message } from "./message";

class Messages  {
    constructor() {
        this.node = document.createElement('messages'); 
        
        get_messages().then(obj=>{ 
            if(obj.success == true) { 
                this.node.innerHTML = ''; 
               
               obj.data.forEach( element => { 
                    let message= new Message(element); 
                  
                    this.node.appendChild(message.getNode());  


                    
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