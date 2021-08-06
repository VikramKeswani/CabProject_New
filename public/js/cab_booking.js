
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
    }).then(resp => resp.json())
    .then(data => {
        localStorage.setItem("cabId",data.cabId);
        window.location.replace("./register_dashboard.html");
    } )
}

