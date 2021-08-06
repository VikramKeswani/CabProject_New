import 'bootstrap/dist/css/bootstrap.min.css';

function init(){
    document.querySelector('#login-form').addEventListener("submit",fnAddCab);
}


function fnAddCab(evt){
    obj = {}
    obj.username = document.querySelector("#email").value;
    obj.password= document.querySelector("#password").value;
    console.log(obj.username +" "+obj.password);
    evt.preventDefault();

    fetch("http://localhost:8080/customer/validate", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.text())
    .then(data => {
        alert("Record Inserted Successfully"+  data)
        window.location.replace("./dashboard.html");
    } ) .catch( ( error ) => {
        alert( error.message );
    } );
}

init();
