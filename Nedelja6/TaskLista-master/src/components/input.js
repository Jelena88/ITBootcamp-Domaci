class Login {
    constructor(){
        this.node = document.createElement('div')
this.input = document.createElement('input')
this.input.type = "text";
this.input.placeholder = this.input.name = 'username';

this.button = document.createElement('button');
this.button.type = 'submit';
this.button.innerHTML = 'LogIn'
this.button.value = 'LogIn'

this.node.appendChild(this.input);
this.node.appendChild(this.button);
this.input='';
}
getNode(){
    return this.node;
}
btnSetEventOnClick(onClick) {
    this.button.addEventListener('click', onClick);
}
}
    


export {
    Login
}