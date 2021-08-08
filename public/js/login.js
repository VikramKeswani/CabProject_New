//import 'bootstrap/dist/css/bootstrap.min.css';
document.querySelector('#login-form').addEventListener("submit",fnAddCab);

function showFetchMessage( message, theme ) {
    fetchMessage.innerHTML = message;
    fetchMessage.style.display = 'block';
    fetchMessage.className = `message message-${theme}`;
}


function fnAddCab(evt){
    obj = {}
    obj.email_address = document.querySelector("#email").value;
    obj.password= document.querySelector("#password").value;
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
        localStorage.setItem("userid",data.customerId);
//        console.log(data)
        window.location = "./user_dashboard.html";
    } ).catch( ( error  => {
        alert( "Wrong Email Id And Password" );
    } ));
}


