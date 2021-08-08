//import 'bootstrap/dist/css/bootstrap.min.css';
document.querySelector('#login-form').addEventListener("submit",fnAddCab);


function fnAddCab(evt){
    obj = {}
    obj.username = document.querySelector("#email").value;
    obj.password= document.querySelector("#password").value;
     console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/driver/validate", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        localStorage.setItem("id",data.customerId);
//        console.log(data)
        window.location = "https://www.google.com";
    } ).catch( ( error  => {
        alert( "Wrong Email Id And Password" );
    } ));
}


