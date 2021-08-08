let sampleData

fetch("http://localhost:8080/driver/viewfreedriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(sampleData => {
            sampleData.forEach((data)=>{
               const option=document.getElementById("driver")
               const newOption=document.createElement("option")
               newOption.textContent = data.driverId
               newOption.value =  data.driverId
               option.appendChild(newOption)
            })
            //console.log(data);
            // is to render on the dom 
        })
const submit = document.getElementById("submit")


  
submit.addEventListener("click", function(event){
    event.preventDefault()
    obj = {}
    driver = {}
    customer = {}
    customer.customerId = localStorage.getItem("id")
    //console.log(localStorage.getItem("id"))
        driver.driverId = document.getElementById("driver").value
        obj.fromLocation = document.getElementById("from").value
        obj.toLocation = document.getElementById("to").value
        obj.fromDateTime = document.getElementById("from_date").value
        obj.toDateTime = document.getElementById("to_date").value
        obj.distanceKm = document.getElementById("distance").value
        obj.driver = driver
        obj.customer = customer
        fetch("http://localhost:8080/trip/new_trip", 
        {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(data => {
        alert("Record Inserted Successfully"+  data);
    } )
    })  