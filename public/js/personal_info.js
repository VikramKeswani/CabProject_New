
    function appendData(data) {
        var mainContainer = document.getElementById("details");
            var div = document.createElement("div");
            div.innerHTML =`<div class="info">
                <h3>Information</h3>
                <div class="info_data">
                     <div class="data">
                        <h4>Email</h4>
                        <p>${data.email_address}</p>
                     </div>
                     <div class="data">
                       <h4>Phone</h4>
                        <p>${data.phone_number}</p>
                  </div>
                </div>
            </div>
          
          <div class="projects">
                <h3>Address Info</h3>
                <div class="projects_data">
                     <div class="data">
                        <h4>Address</h4>
                        <p>${data.address}</p>
                     </div>
                     <div class="data">
                       <h4>Name</h4>
                        <p>${data.username}</p>
                  </div>
                </div>
            </div>
          
            <div class="social_media">
              <div class="container">
                <p>Share Us On </p>
              </div>
              <br>
              <div class="container">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
              </div>
    
          </div>`
            mainContainer.appendChild(div);
    }    
    

function init(){
function getCabById(){
    let cabId = parseInt(localStorage.getItem("userid"));

 fetch("http://localhost:8080/customer/get?id="+cabId)
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
