document.querySelector('#user-reg-form').addEventListener("submit",fnAddCab);
//document.getElementById('1').onclick = reply_click;
function fnAddCab(evt){
    obj = {}
    obj.username = document.querySelector("#username").value;
    obj.password= document.querySelector("#password").value;
    obj.address= document.querySelector("#address").value;
    obj.email_address= document.querySelector("#email_address").value;
    obj.phone_number= document.querySelector("#phone_number").value;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/customer/insert", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Information Filled Successfully");
        window.location.reload();
    } ).catch( ( error  => {
        alert( "Something Went Wrong" );
    } ));
}
