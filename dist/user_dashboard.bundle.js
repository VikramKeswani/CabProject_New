/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./public/js/user_dashboard.js ***!
  \*************************************/
// var search = document.getElementById("details");
// search.addEventListener("submit",function fnAddCab1(evt){
//     evt.preventDefault();
//     obj = {}
//     obj.customerId=localStorage.getItem("userid");
//     obj.email_address = document.querySelector("#email_address").value;
//     obj.username = document.querySelector("#username").value;
//     obj.password= document.querySelector("#password").value;
//    obj.address=document.querySelector("#address").value;
//    console.log(obj.address); 
//    obj.phone_number=document.querySelector("#phone_number").value;
//     console.log(obj);
//     fetch("http://localhost:8080/customer/update", 
//     {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(resp => resp.text())
//     .then(data => {
//         alert("Record Inserted Successfully")
//         window.location.replace("./user_dashboard.html");
//     } ).catch( ( error  => {
//         alert( "Something Went Wrong" );
//     } ));
// });
// const del = document.getElementById("inputDelete")
// del.addEventListener("click" , function(event){
//     let cabId = localStorage.getItem("userid");
//     const url="http://localhost:8080/customer/delete/"+cabId;
//     fetch(url,{method: 'DELETE'})
//         .then(resp => resp.text())
//         .then(data => {
//             console.log(url);
//             localStorage.removeItem("userid")
//             window.location = "http://127.0.0.1:8081/login.html";
//         })
//     })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9kYXNoYm9hcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNJRixNQUFNLENBQUNHLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDLFVBQVNDLEtBQVQsRUFBZTtBQUM3Q0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0MsVUFBYixDQUF3QixRQUF4QjtBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0Isa0NBQWxCO0FBQ0gsQ0FKRDtBQU9KLElBQU1DLElBQUksR0FBR1QsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDSVEsSUFBSSxDQUFDUCxnQkFBTCxDQUFzQixPQUF0QixFQUFnQyxVQUFTQyxLQUFULEVBQWU7QUFDM0NBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBRyxFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsMkNBQWxCO0FBQ0gsQ0FKRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVldGluZ2FwcC8uL3B1YmxpYy9qcy91c2VyX2Rhc2hib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG4vLyB2YXIgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpO1xuLy8gc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixmdW5jdGlvbiBmbkFkZENhYjEoZXZ0KXtcbi8vICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBvYmogPSB7fVxuLy8gICAgIG9iai5jdXN0b21lcklkPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcmlkXCIpO1xuLy8gICAgIG9iai5lbWFpbF9hZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbF9hZGRyZXNzXCIpLnZhbHVlO1xuLy8gICAgIG9iai51c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIikudmFsdWU7XG4vLyAgICAgb2JqLnBhc3N3b3JkPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnZhbHVlO1xuLy8gICAgb2JqLmFkZHJlc3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzXCIpLnZhbHVlO1xuLy8gICAgY29uc29sZS5sb2cob2JqLmFkZHJlc3MpOyBcbi8vICAgIG9iai5waG9uZV9udW1iZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZV9udW1iZXJcIikudmFsdWU7XG4vLyAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICBcbi8vICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jdXN0b21lci91cGRhdGVcIiwgXG4vLyAgICAge1xuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbi8vICAgICAgICAgfVxuLy8gICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbi8vICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgYWxlcnQoXCJSZWNvcmQgSW5zZXJ0ZWQgU3VjY2Vzc2Z1bGx5XCIpXG4vLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiLi91c2VyX2Rhc2hib2FyZC5odG1sXCIpO1xuLy8gICAgIH0gKS5jYXRjaCggKCBlcnJvciAgPT4ge1xuLy8gICAgICAgICBhbGVydCggXCJTb21ldGhpbmcgV2VudCBXcm9uZ1wiICk7XG4vLyAgICAgfSApKTtcbi8vIH0pO1xuXG5cbi8vIGNvbnN0IGRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXREZWxldGVcIilcbiAgICBcbi8vIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsIGZ1bmN0aW9uKGV2ZW50KXtcbi8vICAgICBsZXQgY2FiSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKTtcbi8vICAgICBjb25zdCB1cmw9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvY3VzdG9tZXIvZGVsZXRlL1wiK2NhYklkO1xuLy8gICAgIGZldGNoKHVybCx7bWV0aG9kOiAnREVMRVRFJ30pXG4vLyAgICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC50ZXh0KCkpXG4vLyAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbi8vICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcmlkXCIpXG4vLyAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MS9sb2dpbi5odG1sXCI7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcblxuXG5cblxuY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXRcIilcbiAgICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyaWRcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvbG9naW4uaHRtbFwiO1xuICAgIH0pXG5cblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MS91c2VyX2Rhc2hib2FyZC5odG1sXCI7XG4gICAgfSkiXSwibmFtZXMiOlsibG9nb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9tZSJdLCJzb3VyY2VSb290IjoiIn0=