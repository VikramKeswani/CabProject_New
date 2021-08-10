/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./public/js/driver_update.js ***!
  \************************************/
function appendData(data) {
  var mainContainer = document.getElementById("update_form");
  mainContainer.innerHTML = "<div class=\"container\">      \n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n                <div class=\"row\">\n                    <div class=\"col text-center\">\n                        <div class=\"container\">\n                            <h1>UPDATE DETAILS</h1>               \n                        </div>\n                        <br>\n                        <div class=\"container\">\n                        <p class=\"text-h3\" style=\"font-size:2em\">FILL DRIVER DETAILS</p>                        \n                        </div>\n                    </div>\n                </div>\n                <div class=\"row align-items-center\">\n                    <div class=\"col mt-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"username\" value=".concat(data.username, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Unique Id\" id=\"customerId\" value=").concat(data.driverId, " readonly>\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email Id\" id=\"email_address\" value=").concat(data.email_address, ">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Passowrd\" id=\"password\" value=").concat(data.password, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"address\" value=").concat(data.address, ">\n                    </div>\n                </div>\n                <div class=\"row justify-content-start mt-4\">\n                    <div class=\"col\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                    <input type=\"checkbox\" class=\"form-check-input\">\n                                            I Read and Accept <a href=\"./terms_condition.html\">Terms and Conditions</a>\n                            </label>\n                        </div>\n                        <br>\n                    </div>\n                </div>\n            </div>\n        </div>");
}

function getCabById() {
  var cabId = parseInt(localStorage.getItem("driverid"));
  fetch("http://localhost:8080/driver/get?id=" + cabId).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data);
    appendData(data);
  });
}

getCabById();
var update = document.getElementById("inputButton");
update.addEventListener("click", function (event) {
  obj = {};
  console.log(document.getElementById("customerId").value);
  obj.username = document.getElementById("username").value;
  obj.password = document.getElementById("password").value;
  obj.address = document.getElementById("address").value;
  obj.driverId = document.getElementById("customerId").value;
  obj.email_address = document.getElementById("email_address").value;
  var url = "http://localhost:8080/driver/update/";
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (data) {
    console.log(url);
    alert("Record updataed sucessfully");
    getCabById();
    window.location.reload();
  });
});
var del = document.getElementById("inputButton2");
del.addEventListener("click", function (event) {
  var cabId = localStorage.getItem("driverid");
  var url = "http://localhost:8080/driver/delete?cabId=" + cabId;
  fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (data) {
    console.log(url);
    localStorage.removeItem("driverid");
    window.location = "http://127.0.0.1:8081/login.html";
  });
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQWIsQ0FBcUIsVUFBckIsQ0FBWjtBQUNBLE1BQU1ZLEdBQUcsR0FBQywrQ0FBNkNmLEtBQXZEO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ1csR0FBRCxFQUFLO0FBQUNDLElBQUFBLE1BQU0sRUFBRSxRQUFUO0FBQ1ZJLElBQUFBLE9BQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBREMsR0FBTCxDQUFMLENBSUtmLElBSkwsQ0FJVSxVQUFBaEIsSUFBSSxFQUFJO0FBQ1ZtQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWjtBQUNBYixJQUFBQSxZQUFZLENBQUN3QixVQUFiLENBQXdCLFVBQXhCO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixrQ0FBbEI7QUFDSCxHQVJMO0FBU0MsQ0FaRDtBQXFCSixJQUFNSSxNQUFNLEdBQUdwQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNJbUMsTUFBTSxDQUFDaEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBa0MsVUFBU0MsS0FBVCxFQUFlO0FBQzdDQSxFQUFBQSxLQUFLLENBQUNnQixjQUFOO0FBQ0ExQixFQUFBQSxZQUFZLENBQUN3QixVQUFiLENBQXdCLFFBQXhCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQixrQ0FBbEI7QUFDSCxDQUpEO0FBT0osSUFBTU0sSUFBSSxHQUFHdEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDSXFDLElBQUksQ0FBQ2xCLGdCQUFMLENBQXNCLE9BQXRCLEVBQWdDLFVBQVNDLEtBQVQsRUFBZTtBQUMzQ0EsRUFBQUEsS0FBSyxDQUFDZ0IsY0FBTjtBQUNBTixFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0IsNkNBQWxCO0FBQ0gsQ0FIRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVldGluZ2FwcC8uL3B1YmxpYy9qcy9kcml2ZXJfdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmZ1bmN0aW9uIGFwcGVuZERhdGEoZGF0YSkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVfZm9ybVwiKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPWA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOCBjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5VUERBVEUgREVUQUlMUzwvaDE+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1oM1wiIHN0eWxlPVwiZm9udC1zaXplOjJlbVwiPkZJTEwgRFJJVkVSIERFVEFJTFM8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT0ke2RhdGEudXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJVbmlxdWUgSWRcIiBpZD1cImN1c3RvbWVySWRcIiB2YWx1ZT0ke2RhdGEuZHJpdmVySWR9IHJlYWRvbmx5PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBJZFwiIGlkPVwiZW1haWxfYWRkcmVzc1wiIHZhbHVlPSR7ZGF0YS5lbWFpbF9hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzb3dyZFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT0ke2RhdGEucGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgaWQ9XCJhZGRyZXNzXCIgdmFsdWU9JHtkYXRhLmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1zdGFydCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIFJlYWQgYW5kIEFjY2VwdCA8YSBocmVmPVwiLi90ZXJtc19jb25kaXRpb24uaHRtbFwiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgIH0gICAgXG5cblxuXG5mdW5jdGlvbiBnZXRDYWJCeUlkKCl7XG5sZXQgY2FiSWQgPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRyaXZlcmlkXCIpKTtcbmZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RyaXZlci9nZXQ/aWQ9XCIrY2FiSWQpXG4gICAgLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICBhcHBlbmREYXRhKGRhdGEpO1xuICAgIH0pXG5cbn1cbmdldENhYkJ5SWQoKTtcblxuXG5jb25zdCB1cGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0QnV0dG9uXCIpXG4gICAgXG51cGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgb2JqID0ge31cbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21lcklkXCIpLnZhbHVlKVxuICAgICAgICBvYmoudXNlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpLnZhbHVlXG4gICAgICAgIG9iai5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWVcbiAgICAgICAgb2JqLmFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZHJlc3NcIikudmFsdWVcbiAgICAgICBvYmouZHJpdmVySWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbWVySWRcIikudmFsdWVcbiAgICAgICAgb2JqLmVtYWlsX2FkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsX2FkZHJlc3NcIikudmFsdWVcbiAgICBjb25zdCB1cmw9XCJodHRwOi8vbG9jYWxob3N0OjgwODAvZHJpdmVyL3VwZGF0ZS9cIlxuICAgIGZldGNoKHVybCx7bWV0aG9kOiAnUFVUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9XG59KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiUmVjb3JkIHVwZGF0YWVkIHN1Y2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgZ2V0Q2FiQnlJZCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRCdXR0b24yXCIpXG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGxldCBjYWJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZHJpdmVyaWRcIik7XG4gICAgY29uc3QgdXJsPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2RyaXZlci9kZWxldGU/Y2FiSWQ9XCIrY2FiSWQ7XG4gICAgZmV0Y2godXJsLHttZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9fSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJkcml2ZXJpZFwiKVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvbG9naW4uaHRtbFwiO1xuICAgICAgICB9KVxuICAgIH0pXG5cblxuXG5cblxuXG5cblxuY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXRcIilcbiAgICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyaWRcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvbG9naW4uaHRtbFwiO1xuICAgIH0pXG5cblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvZHJpdmVyX2Rhc2hib2FyZC5odG1sXCI7XG4gICAgfSlcbiJdLCJuYW1lcyI6WyJhcHBlbmREYXRhIiwiZGF0YSIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidXNlcm5hbWUiLCJkcml2ZXJJZCIsImVtYWlsX2FkZHJlc3MiLCJwYXNzd29yZCIsImFkZHJlc3MiLCJnZXRDYWJCeUlkIiwiY2FiSWQiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvYmoiLCJ2YWx1ZSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJkZWwiLCJyZW1vdmVJdGVtIiwibG9nb3V0IiwicHJldmVudERlZmF1bHQiLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==