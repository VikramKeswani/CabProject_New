/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./public/js/table_display.js ***!
  \************************************/
function renderMeetings(teams) {
  const meetingsListEl = document.getElementById('search-results');
  let i = 0;
  meetingsListEl.innerHTML += teams.map(team => `<tr>
        <td>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck_${team.driverId}" >` + `<label class="custom-control-label" for="customCheck_${team.driverId}">1</label>
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
        <tr>`).join('');
  i = i + 1;
}

function init() {
  function getCabById() {
    //    let cabId = document.querySelector("").value
    fetch("http://localhost:8080/driver/getbestdriver").then(resp => resp.json()).then(data => {
      // rendering 
      renderMeetings(data); // is to render on the dom 
      //           console.log(data);
    });
  }

  getCabById();
}

init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVfZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxjQUFULENBQXlCQyxLQUF6QixFQUFpQztBQUM3QixRQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF5QixnQkFBekIsQ0FBdkI7QUFFQSxNQUFJQyxDQUFDLEdBQUMsQ0FBTjtBQUNBSCxFQUFBQSxjQUFjLENBQUNJLFNBQWYsSUFBNEJMLEtBQUssQ0FBQ00sR0FBTixDQUFXQyxJQUFJLElBQ3RDO0FBQ1Q7QUFDQTtBQUNBLGtGQUFrRkEsSUFBSSxDQUFDQyxRQUFTLEtBSHhGLEdBSUssd0RBQXVERCxJQUFJLENBQUNDLFFBQVM7QUFDbEY7QUFDQTtBQUNBLGNBQWNELElBQUksQ0FBQ0UsUUFBUztBQUM1QixjQUFjRixJQUFJLENBQUNHLFFBQVM7QUFDNUIsY0FBY0gsSUFBSSxDQUFDSSxPQUFRO0FBQzNCLGNBQWNKLElBQUksQ0FBQ0ssTUFBTztBQUMxQixjQUFjTCxJQUFJLENBQUNNLFlBQWE7QUFDaEMsY0FBY04sSUFBSSxDQUFDTyxTQUFVO0FBQzdCLGNBQWNQLElBQUksQ0FBQ0MsUUFBUztBQUM1QixjQUFjRCxJQUFJLENBQUNRLEdBQUk7QUFDdkI7QUFDQTtBQUNBLGFBbEJnQyxFQWtCaEJDLElBbEJnQixDQWtCWCxFQWxCVyxDQUE1QjtBQW1CSVosRUFBQUEsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsQ0FBSjtBQUNQOztBQUVELFNBQVNhLElBQVQsR0FBZTtBQUNmLFdBQVNDLFVBQVQsR0FBcUI7QUFDckI7QUFFQ0MsSUFBQUEsS0FBSyxDQUFDLDRDQUFELENBQUwsQ0FDUUMsSUFEUixDQUNhQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQURyQixFQUVRRixJQUZSLENBRWFHLElBQUksSUFBSTtBQUNWO0FBQ0R4QixNQUFBQSxjQUFjLENBQUN3QixJQUFELENBQWQsQ0FGVyxDQUdWO0FBQ1g7QUFDUSxLQVBSO0FBU0E7O0FBQ0RMLEVBQUFBLFVBQVU7QUFFVDs7QUFHREQsSUFBSSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVldGluZ2FwcC8uL3B1YmxpYy9qcy90YWJsZV9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlck1lZXRpbmdzKCB0ZWFtcyApIHtcbiAgICBjb25zdCBtZWV0aW5nc0xpc3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2VhcmNoLXJlc3VsdHMnICk7XG5cbiAgICBsZXQgaT0wXG4gICAgbWVldGluZ3NMaXN0RWwuaW5uZXJIVE1MICs9IHRlYW1zLm1hcCggdGVhbSA9PiAoXG4gICAgICAgIGA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cImN1c3RvbUNoZWNrXyR7dGVhbS5kcml2ZXJJZH1cIiA+YCtcbiAgICAgICAgICAgIGA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbUNoZWNrXyR7dGVhbS5kcml2ZXJJZH1cIj4xPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgICAgICA8dGQ+JHt0ZWFtLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RlYW0ucGFzc3dvcmR9PC90ZD5cbiAgICAgICAgPHRkPiR7dGVhbS5hZGRyZXNzfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RlYW0ucmF0aW5nfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RlYW0ucGhvbmVfbnVtYmVyfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RlYW0ubGljZW5jZU5vfTwvdGQ+XG4gICAgICAgIDx0ZD4ke3RlYW0uZHJpdmVySWR9PC90ZD5cbiAgICAgICAgPHRkPiR7dGVhbS5jYWJ9PC90ZD5cbiAgICAgICAgPHRkPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5SZW1vdmU8L2J1dHRvbj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+YCkpLmpvaW4oJycpO1xuICAgICAgICBpPWkrMTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpe1xuZnVuY3Rpb24gZ2V0Q2FiQnlJZCgpe1xuLy8gICAgbGV0IGNhYklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIlwiKS52YWx1ZVxuXG4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZHJpdmVyL2dldGJlc3Rkcml2ZXJcIilcbiAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyByZW5kZXJpbmcgXG4gICAgICAgICAgIHJlbmRlck1lZXRpbmdzKGRhdGEpO1xuICAgICAgICAgICAgLy8gaXMgdG8gcmVuZGVyIG9uIHRoZSBkb20gXG4gLy8gICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KVxuXG59XG5nZXRDYWJCeUlkKCk7XG5cbn1cblxuXG5pbml0KCk7Il0sIm5hbWVzIjpbInJlbmRlck1lZXRpbmdzIiwidGVhbXMiLCJtZWV0aW5nc0xpc3RFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwiaW5uZXJIVE1MIiwibWFwIiwidGVhbSIsImRyaXZlcklkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJyYXRpbmciLCJwaG9uZV9udW1iZXIiLCJsaWNlbmNlTm8iLCJjYWIiLCJqb2luIiwiaW5pdCIsImdldENhYkJ5SWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9