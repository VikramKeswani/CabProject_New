const logout = document.getElementById("logout")
    logout.addEventListener("click" , function(event){
        event.preventDefault()
        localStorage.removeItem("driverid")
        window.location = "http://127.0.0.1:8081/login.html";
    })


const home = document.getElementById("home")
    home.addEventListener("click" , function(event){
        event.preventDefault()

        window.location = "http://127.0.0.1:8081/driver_dashboard.html";
    })