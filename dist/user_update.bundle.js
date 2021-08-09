/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./public/js/user_update.js ***!
  \**********************************/
function appendData(data) {
  var mainContainer = document.getElementById("update_form");
  mainContainer.innerHTML = "<div class=\"container\">      \n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n                <div class=\"row\">\n                    <div class=\"col text-center\">\n                        <div class=\"container\">\n                            <h1>UPDATE DETAILS</h1>               \n                        </div>\n                        <br>\n                        <div class=\"container\">\n                        <p class=\"text-h3\" style=\"font-size:2em\">FILL DRIVER DETAILS</p>                        \n                        </div>\n                    </div>\n                </div>\n                <div class=\"row align-items-center\">\n                    <div class=\"col mt-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"username\" value=".concat(data.username, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Unique Id\" id=\"customerId\" disabled>\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email Id\" id=\"email_address\" value=").concat(data.email_address, ">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Passowrd\" id=\"password\" value=").concat(data.password, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"address\" value=").concat(data.address, ">\n                    </div>\n                </div>\n                <div class=\"row justify-content-start mt-4\">\n                    <div class=\"col\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                    <input type=\"checkbox\" class=\"form-check-input\">\n                                            I Read and Accept <a href=\"./terms_condition.html\">Terms and Conditions</a>\n                            </label>\n                        </div>\n                        <br>\n                        <div class=\"container\">\n                        <a href=\"#\" class=\"btn btn-info\" role=\"button\" id=\"inputButton\">Submit</a> \n                        </div>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>");
}

function getCabById() {
  var cabId = parseInt(localStorage.getItem("userid"));
  fetch("http://localhost:8080/customer/get?id=" + cabId).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data);
    appendData(data);
  });
}

getCabById();
document.getElementById("inputButton").addEventListener("click", update, false);

function update() {
  obj = {};
  obj.customerId = localStorage.getItem("userid").value;
  obj.email_address = document.querySelector("#email_address").value;
  obj.username = document.querySelector("#username").value;
  obj.password = document.querySelector("#password").value;
  obj.address = document.querySelector("#address").value;
  obj.phone_number = document.querySelector("#phone_number").value;
  console.log(obj);
  evt.preventDefault();
  fetch("http://localhost:8080/customer/update", {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    alert("Record Inserted");
    window.location.reload();
  })["catch"](function (error) {
    alert("Something Went Wrong");
  });
}

;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ25CLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDLFVBQVNvQixLQUFULEVBQWU7QUFDN0NBLEVBQUFBLEtBQUssQ0FBQ1osY0FBTjtBQUNBaEIsRUFBQUEsWUFBWSxDQUFDNkIsVUFBYixDQUF3QixRQUF4QjtBQUNBTixFQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBa0Isa0NBQWxCO0FBQ0gsQ0FKRDtBQU9KLElBQU1NLElBQUksR0FBR3hDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0l1QyxJQUFJLENBQUN0QixnQkFBTCxDQUFzQixPQUF0QixFQUFnQyxVQUFTb0IsS0FBVCxFQUFlO0FBQzNDQSxFQUFBQSxLQUFLLENBQUNaLGNBQU47QUFDQU8sRUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLDJDQUFsQjtBQUNILENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmdhcHAvLi9wdWJsaWMvanMvdXNlcl91cGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZnVuY3Rpb24gYXBwZW5kRGF0YShkYXRhKSB7XG4gICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZV9mb3JtXCIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9YDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC04IGNvbC1sZy04IGNvbC14bC02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlVQREFURSBERVRBSUxTPC9oMT4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWgzXCIgc3R5bGU9XCJmb250LXNpemU6MmVtXCI+RklMTCBEUklWRVIgREVUQUlMUzwvcD4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIHZhbHVlPSR7ZGF0YS51c2VybmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlVuaXF1ZSBJZFwiIGlkPVwiY3VzdG9tZXJJZFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBJZFwiIGlkPVwiZW1haWxfYWRkcmVzc1wiIHZhbHVlPSR7ZGF0YS5lbWFpbF9hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJQYXNzb3dyZFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT0ke2RhdGEucGFzc3dvcmR9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgaWQ9XCJhZGRyZXNzXCIgdmFsdWU9JHtkYXRhLmFkZHJlc3N9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1zdGFydCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIFJlYWQgYW5kIEFjY2VwdCA8YSBocmVmPVwiLi90ZXJtc19jb25kaXRpb24uaHRtbFwiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWluZm9cIiByb2xlPVwiYnV0dG9uXCIgaWQ9XCJpbnB1dEJ1dHRvblwiPlN1Ym1pdDwvYT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG59ICAgIFxuXG5cblxuZnVuY3Rpb24gZ2V0Q2FiQnlJZCgpe1xubGV0IGNhYklkID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyaWRcIikpO1xuZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY3VzdG9tZXIvZ2V0P2lkPVwiK2NhYklkKVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgYXBwZW5kRGF0YShkYXRhKTtcbiAgICB9KVxuXG59XG5nZXRDYWJCeUlkKCk7XG5cblxuXG5cblxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCAoXCJpbnB1dEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyIChcImNsaWNrXCIsIHVwZGF0ZSwgZmFsc2UpO1xuXG5cblxuZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgb2JqID0ge31cbiAgICBvYmouY3VzdG9tZXJJZD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJpZFwiKS52YWx1ZTtcbiAgICBvYmouZW1haWxfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxfYWRkcmVzc1wiKS52YWx1ZTtcbiAgICBvYmoudXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpLnZhbHVlO1xuICAgIG9iai5wYXNzd29yZD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKS52YWx1ZTtcbiAgICBvYmouYWRkcmVzcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHJlc3NcIikudmFsdWU7XG4gICAgb2JqLnBob25lX251bWJlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lX251bWJlclwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2N1c3RvbWVyL3VwZGF0ZVwiLCBcbiAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgfSkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBhbGVydChcIlJlY29yZCBJbnNlcnRlZFwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSApLmNhdGNoKCAoIGVycm9yICA9PiB7XG4gICAgICAgIGFsZXJ0KCBcIlNvbWV0aGluZyBXZW50IFdyb25nXCIgKTtcbiAgICB9ICkpO1xufTtcblxuY29uc3QgbG9nb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXRcIilcbiAgICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyaWRcIilcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvbG9naW4uaHRtbFwiO1xuICAgIH0pXG5cblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODEvdXNlcl9kYXNoYm9hcmQuaHRtbFwiO1xuICAgIH0pXG4iXSwibmFtZXMiOlsiYXBwZW5kRGF0YSIsImRhdGEiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInVzZXJuYW1lIiwiZW1haWxfYWRkcmVzcyIsInBhc3N3b3JkIiwiYWRkcmVzcyIsImdldENhYkJ5SWQiLCJjYWJJZCIsInBhcnNlSW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJvYmoiLCJjdXN0b21lcklkIiwidmFsdWUiLCJxdWVyeVNlbGVjdG9yIiwicGhvbmVfbnVtYmVyIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJsb2dvdXQiLCJldmVudCIsInJlbW92ZUl0ZW0iLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==