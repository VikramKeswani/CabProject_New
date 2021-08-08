/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./public/js/register_dashboard.js ***!
  \*****************************************/
// document.getElementById("inputButton1").disabled = false;
document.querySelector('#cab-reg-form').addEventListener("submit", fnAddCab); //document.getElementById('1').onclick = reply_click;

function fnAddCab(evt) {
  obj = {};
  obj.perKmRate = document.querySelector("#perKmRate").value;
  obj.carType = document.querySelector("#cabType").value;
  console.log(obj);
  evt.preventDefault();
  fetch("http://localhost:8080/cab/insert", {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.json()).then(data => {
    alert("Information Filled Successfully");
    localStorage.setItem("cabId", data.cabId);
    window.location.replace("#"); //         document.getElementById("#input2Button").disabled = false;
  }).catch(error => {
    alert("Something Went Wrong");
  });
}

document.querySelector('#driver-reg-form').addEventListener("submit", fnAddCab1);

function fnAddCab1(evt) {
  obj = {};
  cab = {};
  cab.cabId = localStorage.getItem("cabId");
  obj.email_address = document.querySelector("#email_address").value;
  obj.username = document.querySelector("#username").value;
  obj.password = document.querySelector("#password").value;
  obj.address = document.querySelector("#address").value;
  obj.licenceNo = document.querySelector("#licenceNo").value;
  obj.phone_number = document.querySelector("#phone_number").value;
  obj.rating = document.querySelector("#rating").value;
  obj.cab = cab;
  console.log(obj);
  evt.preventDefault();
  fetch("http://localhost:8080/driver/insert", {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(resp => resp.text()).then(data => {
    alert("Record Inserted Successfully");
    localStorage.removeItem("cabId");
    window.location.replace("#");
  }).catch(error => {
    alert("Something Went Wrong");
  });
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUNPLGNBQUo7QUFFQUMsRUFBQUEsS0FBSyxDQUFDLHFDQUFELEVBQ0w7QUFDSUMsSUFBQUEsTUFBTSxFQUFFLE1BRFo7QUFFSUMsSUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsR0FBZixDQUZWO0FBR0lZLElBQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBSGIsR0FESyxDQUFMLENBT0dDLElBUEgsQ0FPUUMsSUFBSSxJQUFJQSxJQUFJLENBQUNzQixJQUFMLEVBUGhCLEVBUUN2QixJQVJELENBUU1HLElBQUksSUFBSTtBQUNWQyxJQUFBQSxLQUFLLENBQUMsOEJBQUQsQ0FBTDtBQUNBQyxJQUFBQSxZQUFZLENBQUNtQixVQUFiLENBQXdCLE9BQXhCO0FBQ0FoQixJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0gsR0FaRCxFQVlJQyxLQVpKLENBWWFDLEtBQUssSUFBSztBQUNuQlIsSUFBQUEsS0FBSyxDQUFFLHNCQUFGLENBQUw7QUFDSCxHQWREO0FBZUgsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmdhcHAvLi9wdWJsaWMvanMvcmVnaXN0ZXJfZGFzaGJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRCdXR0b24xXCIpLmRpc2FibGVkID0gZmFsc2U7XG5cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhYi1yZWctZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIixmbkFkZENhYik7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCcxJykub25jbGljayA9IHJlcGx5X2NsaWNrO1xuZnVuY3Rpb24gZm5BZGRDYWIoZXZ0KXtcbiAgICBvYmogPSB7fVxuICAgIG9iai5wZXJLbVJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlckttUmF0ZVwiKS52YWx1ZTtcbiAgICBvYmouY2FyVHlwZT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYWJUeXBlXCIpLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKG9iaik7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jYWIvaW5zZXJ0XCIsIFxuICAgIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG9iaiksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH1cbiAgICB9KS50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiSW5mb3JtYXRpb24gRmlsbGVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYWJJZFwiLGRhdGEuY2FiSWQpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIiNcIik7XG4vLyAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiI2lucHV0MkJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0gKS5jYXRjaCggKCBlcnJvciAgPT4ge1xuICAgICAgICBhbGVydCggXCJTb21ldGhpbmcgV2VudCBXcm9uZ1wiICk7XG4gICAgfSApKTtcbn1cblxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJpdmVyLXJlZy1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLGZuQWRkQ2FiMSk7XG5mdW5jdGlvbiBmbkFkZENhYjEoZXZ0KXtcbiAgICBvYmogPSB7fVxuICAgIGNhYj17fVxuICAgIGNhYi5jYWJJZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhYklkXCIpO1xuICAgIG9iai5lbWFpbF9hZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbF9hZGRyZXNzXCIpLnZhbHVlO1xuICAgIG9iai51c2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcm5hbWVcIikudmFsdWU7XG4gICAgb2JqLnBhc3N3b3JkPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnZhbHVlO1xuICAgb2JqLmFkZHJlc3M9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzXCIpLnZhbHVlO1xuICAgIG9iai5saWNlbmNlTm89ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWNlbmNlTm9cIikudmFsdWU7XG4gICAgb2JqLnBob25lX251bWJlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lX251bWJlclwiKS52YWx1ZTtcbiAgICBvYmoucmF0aW5nPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nXCIpLnZhbHVlO1xuICAgIG9iai5jYWIgPSBjYWI7XG4gICAgY29uc29sZS5sb2cob2JqKTtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RyaXZlci9pbnNlcnRcIiwgXG4gICAge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkob2JqKSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLnRleHQoKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgYWxlcnQoXCJSZWNvcmQgSW5zZXJ0ZWQgU3VjY2Vzc2Z1bGx5XCIpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY2FiSWRcIik7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiI1wiKTtcbiAgICB9ICkuY2F0Y2goICggZXJyb3IgID0+IHtcbiAgICAgICAgYWxlcnQoIFwiU29tZXRoaW5nIFdlbnQgV3JvbmdcIiApO1xuICAgIH0gKSk7XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZm5BZGRDYWIiLCJldnQiLCJvYmoiLCJwZXJLbVJhdGUiLCJ2YWx1ZSIsImNhclR5cGUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsImRhdGEiLCJhbGVydCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjYWJJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsImNhdGNoIiwiZXJyb3IiLCJmbkFkZENhYjEiLCJjYWIiLCJnZXRJdGVtIiwiZW1haWxfYWRkcmVzcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhZGRyZXNzIiwibGljZW5jZU5vIiwicGhvbmVfbnVtYmVyIiwicmF0aW5nIiwidGV4dCIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9