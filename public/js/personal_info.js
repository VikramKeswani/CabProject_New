
    function appendData(data) {
        var mainContainer = document.getElementById("personal_information");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = 'Name: ' + data[i].username + ' ' + data[i].email_address+' '+data[i].phone_number;
            mainContainer.appendChild(div);
        }
    }    
    

function init(){
function getCabById(){
//    let cabId = document.querySelector("").value

 fetch("http://localhost:8080/customer/get?id=1")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
             appendData(data);
        })

}
getCabById();

}


init();