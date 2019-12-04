let url = 'https://coetus.herokuapp.com';

let get_messages = () => {
    return fetch(`${url}/api/message`)
    .then(response => response.json())

    
};

let send_message = (username, message) => { 
    return fetch(`${url}/api/message`, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'PUT', 
        body: JSON.stringify({
            username: username,
            message: message

            
        })
    }) 
    .then(response => response.json());
};

let get_user_messages = (username) => {
    return fetch(`${url}/api/message`, {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST', 
        body: JSON.stringify({
            username: username
        })
    })
    .then(response => response.json());
}


export {
    get_messages,
    send_message, 
    get_user_messages,

}