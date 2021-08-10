document.getElementById ("inputButton").addEventListener ("click", update);

function update(){
    console.log("Hello");
    obj = {}
    obj.customerId=localStorage.getItem("userid").value;
    obj.email_address = document.querySelector("#email_address").value;
    obj.username = document.querySelector("#username").value;
    obj.password= document.querySelector("#password").value;
    obj.address=document.querySelector("#address").value;
    obj.phone_number=document.querySelector("#phone_number").value;
    console.log(obj);
    evt.preventDefault();
    fetch("http://localhost:8080/customer/update", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Record Inserted")
        window.location.reload();
    } ).catch( ( error  => {
        alert( "Something Went Wrong" );
    } ));
};
