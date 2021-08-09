//import 'bootstrap/dist/css/bootstrap.min.css';
document.querySelector('#driverlogin-form').addEventListener("submit",fnAddCab);


function fnAddCab(evt){
    obj = {}
    obj.email_address = document.querySelector("#email").value;
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
        localStorage.setItem("driverid",data.driverId);
        console.log(data)
        window.location = "./driver_dashboard.html";
    } ).catch( ( error  => {
        alert( "Wrong Email Id And Password" );
    } ));
    
}


