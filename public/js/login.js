
document.querySelector('#login-form').addEventListener("submit",fnAddCab);

function fnAddCab(evt){
    obj = {}
    obj.username = document.querySelector("#uemail").value;
    obj.password= document.querySelector("#upassword").value;
     console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/customer/validate", 
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
        window.location = "./dashboard.html";
    } ).catch( ( error ) => {
        alert( error.message );
    } );
}
