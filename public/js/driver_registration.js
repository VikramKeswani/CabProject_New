
document.querySelector('#driver_form').addEventListener("submit",fnAddCab);

function fnAddCab(evt){
    obj = {}
    cab={}
    cab.cabId=localStorage.getItem("cabId");
    obj.email_address = document.querySelector("#inputEmail").value;
    obj.password= document.querySelector("#inputPassword").value;
    obj.cabId=
    obj.cabId=document.querySelector("#inputAddress")
    obj.licenceNo=document.querySelector("#inputLicence").value;
    obj.phone_number=document.querySelector("#inputPhoneNumber").value;
    obj.rating=document.querySelector("#inputRating").value;
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
        alert("Record Inserted Successfully"+  data)
        window.location.replace("./driver_dashboard.html");
    } )
}

