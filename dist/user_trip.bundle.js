/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./public/js/user_trip.js ***!
  \********************************/
function appendData(data) {
  var mainContainer = document.getElementById("details");
  var div = document.createElement("div");
  div.innerHTML = "<div class=\"projects\">\n            <h3>Source <---> Destination</h3>\n            <div class=\"projects_data\">\n                 <div class=\"data\">\n                    <h4>Source</h4>\n                    <p>".concat(data.fromLocation, "</p>\n                 </div>\n                 <div class=\"data\">\n                   <h4>Desitnation</h4>\n                    <p>").concat(data.toLocation, "</p>\n              </div>\n            </div>\n        </div>\n\n        <div class=\"projects\">\n        <h3>User Travelling Info</h3>\n        <div class=\"projects_data\">\n             <div class=\"data\">\n                <h4>Depature Time</h4>\n                <p>").concat(data.fromDateTime, "</p>\n             </div>\n             <div class=\"data\">\n               <h4>Arrival Date</h4>\n                <p>").concat(data.toDateTime, "</p>\n          </div>\n        </div>\n    </div>\n          </div>");
  mainContainer.appendChild(div);
}

function init() {
  function getCabById() {
    var cabId = localStorage.getItem("userid");
    fetch("http://localhost:8080/tripbooking/getridestakencustomer?driverId=" + cabId).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      console.log(data);
      appendData(data);
    });
  }

  getCabById();
}

init();
var logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.removeItem("userid");
  window.location = "http://127.0.0.1:8081/login.html";
});
var home = document.getElementById("home");
home.addEventListener("click", function (event) {
  event.preventDefault();
  window.location = "http://127.0.0.1:8081/user_dashboard.html";
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl90cmlwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNJLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLE1BQUlDLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQXBCO0FBQ0ksTUFBSUMsR0FBRyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBRCxFQUFBQSxHQUFHLENBQUNFLFNBQUosb09BS2FOLElBQUksQ0FBQ08sWUFMbEIsbUpBU2FQLElBQUksQ0FBQ1EsVUFUbEIsNlJBbUJTUixJQUFJLENBQUNTLFlBbkJkLG9JQXVCU1QsSUFBSSxDQUFDVSxVQXZCZDtBQTRCQVQsRUFBQUEsYUFBYSxDQUFDVSxXQUFkLENBQTBCUCxHQUExQjtBQUNYOztBQUdELFNBQVNRLElBQVQsR0FBZTtBQUNmLFdBQVNDLFVBQVQsR0FBcUI7QUFDakIsUUFBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBWjtBQUNIQyxJQUFBQSxLQUFLLENBQUMsc0VBQW9FSCxLQUFyRSxDQUFMLENBQ0NJLElBREQsQ0FDTSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxLQURWLEVBRUNGLElBRkQsQ0FFTSxVQUFBbEIsSUFBSSxFQUFJO0FBQ0hxQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXRCLElBQVo7QUFDQ0QsTUFBQUEsVUFBVSxDQUFDQyxJQUFELENBQVY7QUFDSixLQUxSO0FBTUE7O0FBQ0RhLEVBQUFBLFVBQVU7QUFFVDs7QUFHREQsSUFBSTtBQUtKLElBQU1XLE1BQU0sR0FBR3JCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0lvQixNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZTtBQUM3Q0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FYLEVBQUFBLFlBQVksQ0FBQ1ksVUFBYixDQUF3QixRQUF4QjtBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0Isa0NBQWxCO0FBQ0gsQ0FKRDtBQU9KLElBQU1DLElBQUksR0FBRzVCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0kyQixJQUFJLENBQUNOLGdCQUFMLENBQXNCLE9BQXRCLEVBQWdDLFVBQVNDLEtBQVQsRUFBZTtBQUMzQ0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUFFLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQiwyQ0FBbEI7QUFDSCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nYXBwLy4vcHVibGljL2pzL3VzZXJfdHJpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBmdW5jdGlvbiBhcHBlbmREYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIik7XG4gICAgICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPWA8ZGl2IGNsYXNzPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxoMz5Tb3VyY2UgPC0tLT4gRGVzdGluYXRpb248L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzX2RhdGFcIj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlNvdXJjZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5mcm9tTG9jYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICA8aDQ+RGVzaXRuYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cD4ke2RhdGEudG9Mb2NhdGlvbn08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c1wiPlxuICAgICAgICA8aDM+VXNlciBUcmF2ZWxsaW5nIEluZm88L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfZGF0YVwiPlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgPGg0PkRlcGF0dXJlIFRpbWU8L2g0PlxuICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5mcm9tRGF0ZVRpbWV9PC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICA8aDQ+QXJyaXZhbCBEYXRlPC9oND5cbiAgICAgICAgICAgICAgICA8cD4ke2RhdGEudG9EYXRlVGltZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbn0gICAgXG4gICAgXG5cbmZ1bmN0aW9uIGluaXQoKXtcbmZ1bmN0aW9uIGdldENhYkJ5SWQoKXtcbiAgICBsZXQgY2FiSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcbiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC90cmlwYm9va2luZy9nZXRyaWRlc3Rha2VuY3VzdG9tZXI/ZHJpdmVySWQ9XCIrY2FiSWQpXG4gLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgIGFwcGVuZERhdGEoZGF0YSk7XG4gICAgICAgIH0pXG59XG5nZXRDYWJCeUlkKCk7XG5cbn1cblxuXG5pbml0KCk7XG5cblxuXG5cbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0XCIpXG4gICAgbG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcmlkXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDgxL2xvZ2luLmh0bWxcIjtcbiAgICB9KVxuXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIilcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvdXNlcl9kYXNoYm9hcmQuaHRtbFwiO1xuICAgIH0pXG4iXSwibmFtZXMiOlsiYXBwZW5kRGF0YSIsImRhdGEiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJmcm9tTG9jYXRpb24iLCJ0b0xvY2F0aW9uIiwiZnJvbURhdGVUaW1lIiwidG9EYXRlVGltZSIsImFwcGVuZENoaWxkIiwiaW5pdCIsImdldENhYkJ5SWQiLCJjYWJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvbWUiXSwic291cmNlUm9vdCI6IiJ9