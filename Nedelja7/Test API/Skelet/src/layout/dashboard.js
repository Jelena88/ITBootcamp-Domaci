import { Content } from "./content";

class Dashboard {
    constructor() {
        this.node = document.createElement('dashboard');
        
    
        let content = new Content();


        this.node.appendChild(content.getNode());

    }
    getNode() {
        return this.node;
    }
}

export {
    Dashboard
}