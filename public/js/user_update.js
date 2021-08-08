


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
                        <input type="text" class="form-control" placeholder="Unique Id" id="customerId" disabled>
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
                        <div class="container">
                        <a href="#" class="btn btn-info" role="button" onclick= "update()">Submit</a> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>`
}    



function getCabById(){
let cabId = parseInt(localStorage.getItem("id"));
fetch("http://localhost:8080/customer/get?id="+cabId)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
         appendData(data);
    })

}
getCabById();










function update(){
    obj = {}
    obj.customerId=localStorage.getItem("id").value;
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


