





// var search = document.getElementById("details");
// search.addEventListener("submit",function fnAddCab1(evt){
//     evt.preventDefault();
//     obj = {}
//     obj.customerId=localStorage.getItem("userid");
//     obj.email_address = document.querySelector("#email_address").value;
//     obj.username = document.querySelector("#username").value;
//     obj.password= document.querySelector("#password").value;
//    obj.address=document.querySelector("#address").value;
//    console.log(obj.address); 
//    obj.phone_number=document.querySelector("#phone_number").value;
//     console.log(obj);
    
//     fetch("http://localhost:8080/customer/update", 
//     {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(resp => resp.text())
//     .then(data => {
//         alert("Record Inserted Successfully")
//         window.location.replace("./user_dashboard.html");
//     } ).catch( ( error  => {
//         alert( "Something Went Wrong" );
//     } ));
// });


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