
    function appendData(data) {
        var mainContainer = document.getElementById("details");
            var div = document.createElement("div");
            div.innerHTML =`<div class="projects">
            <h3>Source <---> Destination</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Source</h4>
                    <p>${data.fromLocation}</p>
                 </div>
                 <div class="data">
                   <h4>Desitnation</h4>
                    <p>${data.toLocation}</p>
              </div>
            </div>
        </div>

        <div class="projects">
        <h3>User Travelling Info</h3>
        <div class="projects_data">
             <div class="data">
                <h4>Depature Time</h4>
                <p>${data.fromDateTime}</p>
             </div>
             <div class="data">
               <h4>Arrival Date</h4>
                <p>${data.toDateTime}</p>
          </div>
        </div>
    </div>
          </div>`
            mainContainer.appendChild(div);
}    
    

function init(){
function getCabById(){
    let cabId = localStorage.getItem("userid");
 fetch("http://localhost:8080/tripbooking/getridestakencustomer?driverId="+cabId)
 .then(resp => resp.json())
 .then(data => {
            console.log(data);
             appendData(data);
        })
}
getCabById();

}


init();




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
