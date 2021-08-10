/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./public/js/driver_profile.js ***!
  \*************************************/
function appendData(data) {
  var mainContainer = document.getElementById("details");
  var div = document.createElement("div");
  div.innerHTML = "<div class=\"info\">\n                <h3>Information</h3>\n                <div class=\"info_data\">\n                     <div class=\"data\">\n                        <h4>Email</h4>\n                        <p>".concat(data.email_address, "</p>\n                     </div>\n                     <div class=\"data\">\n                       <h4>Phone</h4>\n                        <p>").concat(data.phone_number, "</p>\n                  </div>\n                </div>\n            </div>\n          \n          <div class=\"projects\">\n                <h3>Address Info</h3>\n                <div class=\"projects_data\">\n                     <div class=\"data\">\n                        <h4>Address</h4>\n                        <p>").concat(data.address, "</p>\n                     </div>\n                     <div class=\"data\">\n                       <h4>Name</h4>\n                        <p>").concat(data.username, "</p>\n                  </div>\n                </div>\n            </div>\n          \n            <div class=\"social_media\">\n              <div class=\"container\">\n                <p>Share Us On </p>\n              </div>\n              <br>\n              <div class=\"container\">\n                <ul>\n                  <li><a href=\"#\"><i class=\"fab fa-facebook-f\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fab fa-twitter\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fab fa-instagram\"></i></a></li>\n              </ul>\n              </div>\n    \n          </div>");
  mainContainer.appendChild(div);
}

function init() {
  function getCabById() {
    var cabId = localStorage.getItem("driverid");
    fetch("http://localhost:8080/driver/get?id=" + cabId).then(function (resp) {
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
  window.location = "http://127.0.0.1:8081/driver_dashboard.html";
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyX3Byb2ZpbGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0ksU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsTUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBcEI7QUFDSSxNQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixrT0FLaUJOLElBQUksQ0FBQ08sYUFMdEIsNkpBU2lCUCxJQUFJLENBQUNRLFlBVHRCLCtVQW1CaUJSLElBQUksQ0FBQ1MsT0FuQnRCLDRKQXVCaUJULElBQUksQ0FBQ1UsUUF2QnRCO0FBMENBVCxFQUFBQSxhQUFhLENBQUNVLFdBQWQsQ0FBMEJQLEdBQTFCO0FBQ1A7O0FBR0wsU0FBU1EsSUFBVCxHQUFlO0FBQ2YsV0FBU0MsVUFBVCxHQUFxQjtBQUNqQixRQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFaO0FBRUhDLElBQUFBLEtBQUssQ0FBQyx5Q0FBdUNILEtBQXhDLENBQUwsQ0FDUUksSUFEUixDQUNhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLElBQUwsRUFBSjtBQUFBLEtBRGpCLEVBRVFGLElBRlIsQ0FFYSxVQUFBbEIsSUFBSSxFQUFJO0FBQ1ZxQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXRCLElBQVo7QUFDQ0QsTUFBQUEsVUFBVSxDQUFDQyxJQUFELENBQVY7QUFDSixLQUxSO0FBT0E7O0FBQ0RhLEVBQUFBLFVBQVU7QUFFVDs7QUFHREQsSUFBSTtBQUtKLElBQU1XLE1BQU0sR0FBR3JCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0lvQixNQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZTtBQUM3Q0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FYLEVBQUFBLFlBQVksQ0FBQ1ksVUFBYixDQUF3QixRQUF4QjtBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0Isa0NBQWxCO0FBQ0gsQ0FKRDtBQU9KLElBQU1DLElBQUksR0FBRzVCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0kyQixJQUFJLENBQUNOLGdCQUFMLENBQXNCLE9BQXRCLEVBQWdDLFVBQVNDLEtBQVQsRUFBZTtBQUMzQ0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBRUFFLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQiw2Q0FBbEI7QUFDSCxDQUpELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nYXBwLy4vcHVibGljL2pzL2RyaXZlcl9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGZ1bmN0aW9uIGFwcGVuZERhdGEoZGF0YSkge1xuICAgICAgICB2YXIgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKTtcbiAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9YDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb19kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkVtYWlsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5lbWFpbF9hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBob25lPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5waG9uZV9udW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICA8aDM+QWRkcmVzcyBJbmZvPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHNfZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7ZGF0YS5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5hbWU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtkYXRhLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsX21lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cD5TaGFyZSBVcyBPbiA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFiIGZhLWluc3RhZ3JhbVwiPjwvaT48L2E+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0gICAgXG4gICAgXG5cbmZ1bmN0aW9uIGluaXQoKXtcbmZ1bmN0aW9uIGdldENhYkJ5SWQoKXtcbiAgICBsZXQgY2FiSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRyaXZlcmlkXCIpO1xuXG4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZHJpdmVyL2dldD9pZD1cIitjYWJJZClcbiAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICBhcHBlbmREYXRhKGRhdGEpO1xuICAgICAgICB9KVxuXG59XG5nZXRDYWJCeUlkKCk7XG5cbn1cblxuXG5pbml0KCk7XG5cblxuXG5cbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0XCIpXG4gICAgbG9nb3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcmlkXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDgxL2xvZ2luLmh0bWxcIjtcbiAgICB9KVxuXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIilcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvZHJpdmVyX2Rhc2hib2FyZC5odG1sXCI7XG4gICAgfSlcbiJdLCJuYW1lcyI6WyJhcHBlbmREYXRhIiwiZGF0YSIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImVtYWlsX2FkZHJlc3MiLCJwaG9uZV9udW1iZXIiLCJhZGRyZXNzIiwidXNlcm5hbWUiLCJhcHBlbmRDaGlsZCIsImluaXQiLCJnZXRDYWJCeUlkIiwiY2FiSWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibG9nb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVJdGVtIiwid2luZG93IiwibG9jYXRpb24iLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==