
    function appendData(data) {
        var mainContainer = document.getElementById("personal_information");
            var div = document.createElement("div");
            //div.innerHTML = 'Name: ' + data.username + ' ' + data.email_address+' '+data.phone_number;
            div.innerHTML =`<h2>${data.username}</h2>
            <label class="title">Rating:</label>
            <label>4.5</label>
            <br>
        <div class="row">
            <div class="">
                <label>Registered Phone Number:</label>
              </div>
              <div class="">
                <label>${data.phone_number}</label>  
              </div>
        
        </div>
        <div class="row">
            <div class="col-md-1">
                <label>Email Address:</label>
              </div>
              <div class="col-md-10">
                <label>${data.email_address}</label>
              </div>
        </div>
          <br>
            <p><button class="button">Contact</button></p>`
            mainContainer.appendChild(div);
    }    
    

function init(){
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

}


init();