function fnAddCab(evt){
    obj = {}
//    obj.id = document.querySelector("input[id='cab-id']").value
  //  obj.cabId = document.querySelector("input[id='cab-id']").value
    //obj.cabType = document.querySelector("input[id='cab-type']").value
    //obj.perKm = document.querySelector("input[id='per-km']").value
    obj.licenceNo = document.querySelector("input[id='inputLicence']").value;
    obj.email_address= document.querySelector("input[id='inputEmail4']").value;
    obj.username = document.querySelector("input[id='inputName']").value;
    obj.password = document.querySelector("input[id='inputPassword']").value;
    obj.address = document.querySelector("input[id='inputAddress']").value;
    obj.phone_number = document.querySelector("input[id='inputPhoneNumber']").value;
    obj.rating = document.querySelector("input[id='inputRating']").value;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/cabs/insert", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json())
    .then(data => {
        alert("Record Inserted Successfully"+  data)
        window.location.replace("../index.html");
    } )
}


function getCabById(evt){
    let cabId = document.querySelector("input[id='cab-id']").value

    fetch("http://localhost:3000/cabs/" + cabId)
        .then(resp => resp.json())
        .then(data => {
            // rendering 
            console.log(data);
            // is to render on the dom 
        })
}