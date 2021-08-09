/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./public/js/driver_login.js ***!
  \***********************************/
//import 'bootstrap/dist/css/bootstrap.min.css';
document.querySelector('#driverlogin-form').addEventListener("submit", fnAddCab);

function fnAddCab(evt) {
  obj = {};
  obj.email_address = document.querySelector("#email").value;
  obj.password = document.querySelector("#password").value;
  console.log(obj);
  evt.preventDefault();
  fetch("http://localhost:8080/driver/validate", {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    localStorage.setItem("driverid", data.driverId);
    console.log(data);
    window.location = "./driver_dashboard.html";
  })["catch"](function (error) {
    alert("Wrong Email Id And Password");
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyX2xvZ2luLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0FBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENDLGdCQUE1QyxDQUE2RCxRQUE3RCxFQUFzRUMsUUFBdEU7O0FBR0EsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBc0I7QUFDbEJDLEVBQUFBLEdBQUcsR0FBRyxFQUFOO0FBQ0FBLEVBQUFBLEdBQUcsQ0FBQ0MsYUFBSixHQUFvQk4sUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDTSxLQUFyRDtBQUNBRixFQUFBQSxHQUFHLENBQUNHLFFBQUosR0FBY1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DTSxLQUFsRDtBQUNDRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNERCxFQUFBQSxHQUFHLENBQUNPLGNBQUo7QUFFQUMsRUFBQUEsS0FBSyxDQUFDLHVDQUFELEVBQ0w7QUFDSUMsSUFBQUEsTUFBTSxFQUFFLE1BRFo7QUFFSUMsSUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsR0FBZixDQUZWO0FBR0lZLElBQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBSGIsR0FESyxDQUFMLENBT0dDLElBUEgsQ0FPUSxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxHQVBaLEVBUUNGLElBUkQsQ0FRTSxVQUFBRyxJQUFJLEVBQUk7QUFDVkMsSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWdDRixJQUFJLENBQUNHLFFBQXJDO0FBQ0FmLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVyxJQUFaO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQix5QkFBbEI7QUFDSCxHQVpELFdBWWEsVUFBQUMsS0FBSyxFQUFLO0FBQ25CQyxJQUFBQSxLQUFLLENBQUUsNkJBQUYsQ0FBTDtBQUNILEdBZEQ7QUFnQkgsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmdhcHAvLi9wdWJsaWMvanMvZHJpdmVyX2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RyaXZlcmxvZ2luLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZm5BZGRDYWIpO1xuXG5cbmZ1bmN0aW9uIGZuQWRkQ2FiKGV2dCl7XG4gICAgb2JqID0ge31cbiAgICBvYmouZW1haWxfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxcIikudmFsdWU7XG4gICAgb2JqLnBhc3N3b3JkPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnZhbHVlO1xuICAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvZHJpdmVyL3ZhbGlkYXRlXCIsIFxuICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH1cbiAgICB9KS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZHJpdmVyaWRcIixkYXRhLmRyaXZlcklkKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIuL2RyaXZlcl9kYXNoYm9hcmQuaHRtbFwiO1xuICAgIH0gKS5jYXRjaCggKCBlcnJvciAgPT4ge1xuICAgICAgICBhbGVydCggXCJXcm9uZyBFbWFpbCBJZCBBbmQgUGFzc3dvcmRcIiApO1xuICAgIH0gKSk7XG4gICAgXG59XG5cblxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmbkFkZENhYiIsImV2dCIsIm9iaiIsImVtYWlsX2FkZHJlc3MiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRyaXZlcklkIiwid2luZG93IiwibG9jYXRpb24iLCJlcnJvciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==