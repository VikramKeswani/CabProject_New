function renderMeetings( teams ) {
    const meetingsListEl = document.getElementById( 'search-results' );

    let i=0
    meetingsListEl.innerHTML += teams.map( team => (
        `<tr>
        <td>${team.fromLocation}</td>
        <td>${team.toLocation}</td>
        <td>${team.fromDateTime}</td>
        <td>${team.toDateTime}</td>
        <td>${team.billAmount}</td>
        <td>${team.customer.customerId}</td>
        </tr>
        <tr>`)).join('');
        i=i+1;
}

function init(){
function getCabById(){
    let cabId = localStorage.getItem("driverid");
 fetch("http://localhost:8080/tripbooking/getridestaken?driverId="+cabId)
        .then(resp => resp.json())
        .then(data => {
           renderMeetings(data);

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

        window.location = "http://127.0.0.1:8081/driver_dashboard.html";
    })