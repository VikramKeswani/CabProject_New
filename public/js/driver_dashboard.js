

document.getElementById("freeCabButton").addEventListener("click", init);


function init(){
    function getCabById(){
        let cabId = parseInt(localStorage.getItem("driverid"));
        event.preventDefault();
     fetch("http://localhost:8080/tripbooking/freeride?driverId="+cabId)
            .then(resp => resp.text())
            .then(data => {
                alert("Yes Successful");
                window.location = "./freecab.html"; 
            }).catch((error) => {
                console.log(error)
              });
    
    }
    getCabById();
    
    }
    
    
    init();
    
    

const logout = document.getElementById("logout")
logout.addEventListener("click" , function(event){
//        event.preventDefault()
        localStorage.removeItem("driverid")
        window.location = "http://127.0.0.1:8081/login.html";
    })


const home = document.getElementById("home")
    home.addEventListener("click" , function(event){
   //     event.preventDefault()
        window.location = "http://127.0.0.1:8081/driver_dashboard.html";
    })

    