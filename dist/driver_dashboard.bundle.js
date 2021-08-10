/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./public/js/driver_dashboard.js ***!
  \***************************************/
document.getElementById("freeCabButton").addEventListener("click", init);

function init() {
  function getCabById() {
    var cabId = parseInt(localStorage.getItem("driverid"));
    event.preventDefault();
    fetch("http://localhost:8080/tripbooking/freeride?driverId=" + cabId).then(function (resp) {
      return resp.text();
    }).then(function (data) {
      alert("Yes Successful");
      window.location = "./freecab.html";
    })["catch"](function (error) {
      console.log(error);
    });
  }

  getCabById();
}

init();
var logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
  //        event.preventDefault()
  localStorage.removeItem("driverid");
  window.location = "http://127.0.0.1:8081/login.html";
});
var home = document.getElementById("home");
home.addEventListener("click", function (event) {
  //     event.preventDefault()
  window.location = "http://127.0.0.1:8081/driver_dashboard.html";
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyX2Rhc2hib2FyZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxnQkFBekMsQ0FBMEQsT0FBMUQsRUFBbUVDLElBQW5FOztBQUdBLFNBQVNBLElBQVQsR0FBZTtBQUNYLFdBQVNDLFVBQVQsR0FBcUI7QUFDakIsUUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUFELENBQXBCO0FBQ0FDLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNIQyxJQUFBQSxLQUFLLENBQUMseURBQXVETixLQUF4RCxDQUFMLENBQ1FPLElBRFIsQ0FDYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxLQURqQixFQUVRRixJQUZSLENBRWEsVUFBQUcsSUFBSSxFQUFJO0FBQ1ZDLE1BQUFBLEtBQUssQ0FBQyxnQkFBRCxDQUFMO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixnQkFBbEI7QUFDSCxLQUxSLFdBS2dCLFVBQUNDLEtBQUQsRUFBVztBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxLQVBWO0FBU0E7O0FBQ0RmLEVBQUFBLFVBQVU7QUFFVDs7QUFHREQsSUFBSTtBQUlSLElBQU1tQixNQUFNLEdBQUd0QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBcUIsTUFBTSxDQUFDcEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBa0MsVUFBU08sS0FBVCxFQUFlO0FBQ2pEO0FBQ1FGLEVBQUFBLFlBQVksQ0FBQ2dCLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQU4sRUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLGtDQUFsQjtBQUNILENBSkw7QUFPQSxJQUFNTSxJQUFJLEdBQUd4QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNJdUIsSUFBSSxDQUFDdEIsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBZ0MsVUFBU08sS0FBVCxFQUFlO0FBQ2hEO0FBQ0tRLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQiw2Q0FBbEI7QUFDSCxDQUhELEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nYXBwLy4vcHVibGljL2pzL2RyaXZlcl9kYXNoYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJlZUNhYkJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdCk7XG5cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGZ1bmN0aW9uIGdldENhYkJ5SWQoKXtcbiAgICAgICAgbGV0IGNhYklkID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkcml2ZXJpZFwiKSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3RyaXBib29raW5nL2ZyZWVyaWRlP2RyaXZlcklkPVwiK2NhYklkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWWVzIFN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIuL2ZyZWVjYWIuaHRtbFwiOyBcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICB9XG4gICAgZ2V0Q2FiQnlJZCgpO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBpbml0KCk7XG4gICAgXG4gICAgXG5cbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb3V0XCIpXG5sb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4vLyAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImRyaXZlcmlkXCIpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDgxL2xvZ2luLmh0bWxcIjtcbiAgICB9KVxuXG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIilcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvZHJpdmVyX2Rhc2hib2FyZC5odG1sXCI7XG4gICAgfSlcblxuICAgICJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJnZXRDYWJCeUlkIiwiY2FiSWQiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsInRleHQiLCJkYXRhIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==