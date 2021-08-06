import 'bootstrap/dist/css/bootstrap.min.css';

document.querySelector('#cab_form').addEventListener("submit",fnAddCab);

function fnAddCab(evt){
    obj = {}
    obj.perKmRate = document.querySelector("#inputPerKmRate").value;
    obj.carType= document.querySelector("#inputCabType").value;
    console.log(obj);
    evt.preventDefault();

    fetch("http://localhost:8080/cab/insert", 
    {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.text())
    .then(data => {
        alert("Record Inserted Successfully"+  data)
        window.location.replace("./register_dasboard.html");
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