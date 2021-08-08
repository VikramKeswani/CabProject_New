// document.getElementById("inputButton1").disabled = false;


document.querySelector('#cab-reg-form').addEventListener("submit",fnAddCab);
//document.getElementById('1').onclick = reply_click;
function fnAddCab(evt){
    obj = {}
    obj.perKmRate = document.querySelector("#perKmRate").value;
    obj.carType= document.querySelector("#cabType").value;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/cab/insert", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Information Filled Successfully");
        localStorage.setItem("cabId",data.cabId);
        window.location.replace("#");
//         document.getElementById("#input2Button").disabled = false;
    } ).catch( ( error  => {
        alert( "Something Went Wrong" );
    } ));
}


document.querySelector('#driver-reg-form').addEventListener("submit",fnAddCab1);
function fnAddCab1(evt){
    obj = {}
    cab={}
    cab.cabId=localStorage.getItem("cabId");
    obj.email_address = document.querySelector("#email_address").value;
    obj.username = document.querySelector("#username").value;
    obj.password= document.querySelector("#password").value;
   obj.address=document.querySelector("#address").value;
    obj.licenceNo=document.querySelector("#licenceNo").value;
    obj.phone_number=document.querySelector("#phone_number").value;
    obj.rating=document.querySelector("#rating").value;
    obj.cab = cab;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/driver/insert", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.text())
    .then(data => {
        alert("Record Inserted Successfully")
        localStorage.removeItem("cabId");
        window.location.replace("#");
    } ).catch( ( error  => {
        alert( "Something Went Wrong" );
    } ));
}




