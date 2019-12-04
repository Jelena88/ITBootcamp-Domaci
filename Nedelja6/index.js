var users = '[{"username":"Stefan","password":"dhshdjs"},{"username":"Marija","password":"fffffff"},{"username":"Jovana","password":"gggdsd"}]';
var myObj = JSON.parse(users);

const button = document.querySelector('#submit')
button.addEventListener('click', onclick)


function onclick() {
    const inputtxt2 = document.querySelector('#text2')
    const inputtxt = document.querySelector('#text1')
    var field = inputtxt.value;
    var field2 = inputtxt2.value;
 
    var mnlen = 3;
    var mxlen = 15;

    if (field.length < mnlen || field.length > mxlen || field2.length < mnlen || field2.length > mxlen) {
        alert("Username i Password moraju imati između 3 i 15 karaktera");
        return false;
    }

    if (!isNaN(field.charAt(0))) {
        alert("Username ne može početi brojem");
        return false;
    }

 
    myObj.forEach(element=>{
        if (element.username == field && element.password == field2){
     
        return alert('Ulogovali ste se')}

      
               
   
            
        })
    }

    



//5. Sa Backendom bismo to uradili na sledeći način

//Koristili bismo fatch kao bi dohvatili podatake sa Backend-a 
//Kao metodu bismo koristli POST.
//JSON podate bismo pretvorili u string i parsirali
//Uz pomoć filtera bismo mogli da izvršimo proveru tih podataka, na osnovu čega bismo dobili true ili false





