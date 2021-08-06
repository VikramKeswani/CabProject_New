function renderMeetings( teams ) {
    const meetingsListEl = document.getElementById( 'search-results' );

    let i=0
    meetingsListEl.innerHTML += teams.map( team => (
        `<tr>
        <td>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck_${team.driverId}" >`+
            `<label class="custom-control-label" for="customCheck_${team.driverId}">1</label>
        </div>
      </td>
        <td>${team.username}</td>
        <td>${team.password}</td>
        <td>${team.address}</td>
        <td>${team.rating}</td>
        <td>${team.phone_number}</td>
        <td>${team.licenceNo}</td>
        <td>${team.driverId}</td>
        <td>${team.cab}</td>
        <td><button class="btn btn-primary">Remove</button></td>
        </tr>
        <tr>`)).join('');
        i=i+1;
}

function init(){
function getCabById(){
//    let cabId = document.querySelector("").value

 fetch("http://localhost:8080/driver/getbestdriver")
        .then(resp => resp.json())
        .then(data => {
            // rendering 
           renderMeetings(data);
            // is to render on the dom 
 //           console.log(data);
        })

}
getCabById();

}


init();