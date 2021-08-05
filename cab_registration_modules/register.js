function fnAddCab(evt){
    obj = {}
    obj.perKmRate = document.querySelector("input[id='perKmRate']").value;
    obj.carType= document.querySelector("input[id='carType']").value;
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
        window.location.replace("../login_module/login.html");
    } )
}


// function getCabById(evt){
//     let cabId = document.querySelector("input[id='cab-id']").value

//     fetch("http://localhost:3000/cabs/" + cabId)
//         .then(resp => resp.json())
//         .then(data => {
//             // rendering 
//             console.log(data);
//             // is to render on the dom 
//         })
// }