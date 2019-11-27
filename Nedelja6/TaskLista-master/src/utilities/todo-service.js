
let apiUrl = 'http://localhost'
let apiPort = "4001";



function getToDo(username) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          id: username
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}


function getAllToDo(){
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
    return res;
    }


function add(username, title) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          id: username, 
          title: title
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}
function delete1(username, title) {
    
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'DELETE',
        body: JSON.stringify({
          id: username,
          title: title
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}


export{
    getToDo,
    getAllToDo,
    add,
    delete1
}



//Na stranicu to do dodati tektualno polje za unos i dugme, prilikom klik an dugme postavlja se username korisnika 
//na stranici se zatim ispisuju svi njegovi taskovi . Prilikom dodavanaj taska korisniku se na back end dodaje taj task
//i ukoliko je uspesno dodat task, taj tsak se prikazuje i na front 