


function appendData(data) {
    var mainContainer = document.getElementById("update_form");
        mainContainer.innerHTML =`<div class="container">      
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                <div class="row">
                    <div class="col text-center">
                        <div class="container">
                            <h1>UPDATE DETAILS</h1>               
                        </div>
                        <br>
                        <div class="container">
                        <p class="text-h3" style="font-size:2em">FILL DRIVER DETAILS</p>                        
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col mt-4">
                        <input type="text" class="form-control" placeholder="Name" id="username" value=${data.username}>
                    </div>
                </div>
                <div class="row align-items-center mt-4">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Unique Id" id="customerId" value=${data.driverId} readonly>
                    </div>
                </div>
                <div class="row align-items-center mt-4">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Email Id" id="email_address" value=${data.email_address}>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Passowrd" id="password" value=${data.password}>
                    </div>
                </div>
                <div class="row align-items-center mt-4">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Address" id="address" value=${data.address}>
                    </div>
                </div>
                <div class="row justify-content-start mt-4">
                    <div class="col">
                        <div class="form-check">
                            <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input">
                                            I Read and Accept <a href="./terms_condition.html">Terms and Conditions</a>
                            </label>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>`
    }    



function getCabById(){
let cabId = parseInt(localStorage.getItem("driverid"));
fetch("http://localhost:8080/driver/get?id="+cabId)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
         appendData(data);
    })

}
getCabById();


const update = document.getElementById("inputButton")
    
update.addEventListener("click" , function(event){
    obj = {}
        console.log(document.getElementById("customerId").value)
        obj.username = document.getElementById("username").value
        obj.password = document.getElementById("password").value
        obj.address = document.getElementById("address").value
       obj.driverId = document.getElementById("customerId").value
        obj.email_address = document.getElementById("email_address").value
    const url="http://localhost:8080/driver/update/"
    fetch(url,{method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
        "Content-Type": "application/json"
    }
}).then(data => {
            console.log(url);
            alert("Record updataed sucessfully");
            getCabById();
            window.location.reload();
        })
    })


    const del = document.getElementById("inputButton2")
    del.addEventListener("click" , function(event){
    let cabId = localStorage.getItem("driverid");
    const url="http://localhost:8080/driver/delete?cabId="+cabId;
    fetch(url,{method: 'DELETE',
    headers: {
        "Content-Type": "application/json"
    }})
        .then(data => {
            console.log(url);
            localStorage.removeItem("driverid")
            window.location = "http://127.0.0.1:8081/login.html";
        })
    })








const logout = document.getElementById("logout")
    logout.addEventListener("click" , function(event){
        event.preventDefault()
        localStorage.removeItem("userid")
        window.location = "http://127.0.0.1:8081/login.html";
    })


const home = document.getElementById("home")
    home.addEventListener("click" , function(event){
        event.preventDefault()
        window.location = "http://127.0.0.1:8081/driver_dashboard.html";
    })
