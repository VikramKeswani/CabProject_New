fetch("http://localhost:8080/driver/viewfreedriver",{method: 'GET'})
        .then(resp => resp.json())
        .then(data => {
                const driver_id=document.getElementById("driver_Id");
                driver_id.value =  data.driverId
                const customer_id=document.getElementById("customer_Id");
                customer_id.value=localStorage.getItem("userid");
        });


const submit = document.getElementById("book-cab")

submit.addEventListener("submit", function(event){
    event.preventDefault();
    obj={}
    customer={}
    drivers={}
    customer.customerId = localStorage.getItem("userid");
    drivers.driverId =document.getElementById("driver_Id").value
    obj.fromLocation = document.getElementById("fromLocation").value
    obj.toLocation = document.getElementById("toLocation").value
    obj.fromDateTime = document.getElementById("fromDateTime").value
    obj.toDateTime = document.getElementById("toDateTime").value
    obj.distanceKm = document.getElementById("distanceInKm").value
    obj.status=1
    obj.driver = drivers
    obj.customer = customer
    fetch("http://localhost:8080/tripbooking/insert", 
    {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
        "Content-Type": "application/json"
    }
})
.then(data => {
    window.location.reload();
    
} ).catch((error) => {
    console.log(error)
})

});  



const logout = document.getElementById("logout")
    logout.addEventListener("click" , function(event){
        event.preventDefault()
        localStorage.removeItem("userid")
        window.location = "http://127.0.0.1:8081/login.html";
    })


const home = document.getElementById("home")
    home.addEventListener("click" , function(event){
        event.preventDefault()

        window.location = "http://127.0.0.1:8081/user_dashboard.html";
    })