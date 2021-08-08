/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./public/js/driver_login.js ***!
  \***********************************/
//import 'bootstrap/dist/css/bootstrap.min.css';
document.querySelector('#login-form').addEventListener("submit", fnAddCab);

function fnAddCab(evt) {
  obj = {};
  obj.username = document.querySelector("#email").value;
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
    localStorage.setItem("id", data.customerId); //        console.log(data)

    window.location = "https://www.google.com";
  })["catch"](function (error) {
    alert("Wrong Email Id And Password");
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJpdmVyX2xvZ2luLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0FBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsZ0JBQXRDLENBQXVELFFBQXZELEVBQWdFQyxRQUFoRTs7QUFHQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUFzQjtBQUNsQkMsRUFBQUEsR0FBRyxHQUFHLEVBQU47QUFDQUEsRUFBQUEsR0FBRyxDQUFDQyxRQUFKLEdBQWVOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ00sS0FBaEQ7QUFDQUYsRUFBQUEsR0FBRyxDQUFDRyxRQUFKLEdBQWNSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixFQUFvQ00sS0FBbEQ7QUFDQ0UsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEdBQVo7QUFDREQsRUFBQUEsR0FBRyxDQUFDTyxjQUFKO0FBRUFDLEVBQUFBLEtBQUssQ0FBQyx1Q0FBRCxFQUNMO0FBQ0lDLElBQUFBLE1BQU0sRUFBRSxNQURaO0FBRUlDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVYLEdBQWYsQ0FGVjtBQUdJWSxJQUFBQSxPQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUhiLEdBREssQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsR0FQWixFQVFDRixJQVJELENBUU0sVUFBQUcsSUFBSSxFQUFJO0FBQ1ZDLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixJQUFyQixFQUEwQkYsSUFBSSxDQUFDRyxVQUEvQixFQURVLENBRWxCOztBQUNRQyxJQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0Isd0JBQWxCO0FBQ0gsR0FaRCxXQVlhLFVBQUFDLEtBQUssRUFBSztBQUNuQkMsSUFBQUEsS0FBSyxDQUFFLDZCQUFGLENBQUw7QUFDSCxHQWREO0FBZUgsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmdhcHAvLi9wdWJsaWMvanMvZHJpdmVyX2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsZm5BZGRDYWIpO1xuXG5cbmZ1bmN0aW9uIGZuQWRkQ2FiKGV2dCl7XG4gICAgb2JqID0ge31cbiAgICBvYmoudXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpLnZhbHVlO1xuICAgIG9iai5wYXNzd29yZD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKS52YWx1ZTtcbiAgICAgY29uc29sZS5sb2cob2JqKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RyaXZlci92YWxpZGF0ZVwiLCBcbiAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgfSkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsZGF0YS5jdXN0b21lcklkKTtcbi8vICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb21cIjtcbiAgICB9ICkuY2F0Y2goICggZXJyb3IgID0+IHtcbiAgICAgICAgYWxlcnQoIFwiV3JvbmcgRW1haWwgSWQgQW5kIFBhc3N3b3JkXCIgKTtcbiAgICB9ICkpO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZm5BZGRDYWIiLCJldnQiLCJvYmoiLCJ1c2VybmFtZSIsInZhbHVlIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY3VzdG9tZXJJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZXJyb3IiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=