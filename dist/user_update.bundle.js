/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./public/js/user_update.js ***!
  \**********************************/
function appendData(data) {
  var mainContainer = document.getElementById("update_form");
  mainContainer.innerHTML = "<div class=\"container\">      \n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-md-8 col-lg-8 col-xl-6\">\n                <div class=\"row\">\n                    <div class=\"col text-center\">\n                        <div class=\"container\">\n                            <h1>UPDATE DETAILS</h1>               \n                        </div>\n                        <br>\n                        <div class=\"container\">\n                        <p class=\"text-h3\" style=\"font-size:2em\">FILL DRIVER DETAILS</p>                        \n                        </div>\n                    </div>\n                </div>\n                <div class=\"row align-items-center\">\n                    <div class=\"col mt-4\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Name\" id=\"username\" value=".concat(data.username, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Unique Id\" id=\"customerId\" disabled>\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email Id\" id=\"email_address\" value=").concat(data.email_address, ">\n                    </div>\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Passowrd\" id=\"password\" value=").concat(data.password, ">\n                    </div>\n                </div>\n                <div class=\"row align-items-center mt-4\">\n                    <div class=\"col\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"address\" value=").concat(data.address, ">\n                    </div>\n                </div>\n                <div class=\"row justify-content-start mt-4\">\n                    <div class=\"col\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                    <input type=\"checkbox\" class=\"form-check-input\">\n                                            I Read and Accept <a href=\"./terms_condition.html\">Terms and Conditions</a>\n                            </label>\n                        </div>\n                        <br>\n                        <div class=\"container\">\n                        <a href=\"#\" class=\"btn btn-info\" role=\"button\" onclick= \"update()\">Submit</a> \n                        </div>\n                    </div>\n                </div>\n            </div>\n            </div>\n        </div>");
}

function getCabById() {
  var cabId = parseInt(localStorage.getItem("id"));
  fetch("http://localhost:8080/customer/get?id=" + cabId).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data);
    appendData(data);
  });
}

getCabById();

function update() {
  obj = {};
  obj.customerId = localStorage.getItem("id").value;
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl91cGRhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDdEIsTUFBSUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDSUYsRUFBQUEsYUFBYSxDQUFDRyxTQUFkLGs0QkFnQmlHSixJQUFJLENBQUNLLFFBaEJ0Ryx1akJBMEIwR0wsSUFBSSxDQUFDTSxhQTFCL0csd01BNkJxR04sSUFBSSxDQUFDTyxRQTdCMUcsMlJBa0NtR1AsSUFBSSxDQUFDUSxPQWxDeEc7QUFzRFA7O0FBSUQsU0FBU0MsVUFBVCxHQUFxQjtBQUNyQixNQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLENBQUQsQ0FBcEI7QUFDQUMsRUFBQUEsS0FBSyxDQUFDLDJDQUF5Q0osS0FBMUMsQ0FBTCxDQUNLSyxJQURMLENBQ1UsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQUFKO0FBQUEsR0FEZCxFQUVLRixJQUZMLENBRVUsVUFBQWYsSUFBSSxFQUFJO0FBQ1ZrQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW5CLElBQVo7QUFDQ0QsSUFBQUEsVUFBVSxDQUFDQyxJQUFELENBQVY7QUFDSixHQUxMO0FBT0M7O0FBQ0RTLFVBQVU7O0FBV1YsU0FBU1csTUFBVCxHQUFpQjtBQUNiQyxFQUFBQSxHQUFHLEdBQUcsRUFBTjtBQUNBQSxFQUFBQSxHQUFHLENBQUNDLFVBQUosR0FBZVYsWUFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLEVBQTJCVSxLQUExQztBQUNBRixFQUFBQSxHQUFHLENBQUNmLGFBQUosR0FBb0JKLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDRCxLQUE3RDtBQUNBRixFQUFBQSxHQUFHLENBQUNoQixRQUFKLEdBQWVILFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsV0FBdkIsRUFBb0NELEtBQW5EO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ2QsUUFBSixHQUFjTCxRQUFRLENBQUNzQixhQUFULENBQXVCLFdBQXZCLEVBQW9DRCxLQUFsRDtBQUNBRixFQUFBQSxHQUFHLENBQUNiLE9BQUosR0FBWU4sUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixVQUF2QixFQUFtQ0QsS0FBL0M7QUFDQUYsRUFBQUEsR0FBRyxDQUFDSSxZQUFKLEdBQWlCdkIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixlQUF2QixFQUF3Q0QsS0FBekQ7QUFDQUwsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDQUssRUFBQUEsR0FBRyxDQUFDQyxjQUFKO0FBQ0FiLEVBQUFBLEtBQUssQ0FBQyx1Q0FBRCxFQUNMO0FBQ0ljLElBQUFBLE1BQU0sRUFBRSxNQURaO0FBRUlDLElBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLEdBQWYsQ0FGVjtBQUdJVyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUhiLEdBREssQ0FBTCxDQU9HakIsSUFQSCxDQU9RLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsRUFBSjtBQUFBLEdBUFosRUFRQ0YsSUFSRCxDQVFNLFVBQUFmLElBQUksRUFBSTtBQUNWaUMsSUFBQUEsS0FBSyxDQUFDLGlCQUFELENBQUw7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILEdBWEQsV0FXYSxVQUFBQyxLQUFLLEVBQUs7QUFDbkJKLElBQUFBLEtBQUssQ0FBRSxzQkFBRixDQUFMO0FBQ0gsR0FiRDtBQWNIOztBQUFBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nYXBwLy4vcHVibGljL2pzL3VzZXJfdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmZ1bmN0aW9uIGFwcGVuZERhdGEoZGF0YSkge1xuICAgIHZhciBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVfZm9ybVwiKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPWA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtOCBjb2wtbGctOCBjb2wteGwtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5VUERBVEUgREVUQUlMUzwvaDE+ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1oM1wiIHN0eWxlPVwiZm9udC1zaXplOjJlbVwiPkZJTEwgRFJJVkVSIERFVEFJTFM8L3A+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT0ke2RhdGEudXNlcm5hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJVbmlxdWUgSWRcIiBpZD1cImN1c3RvbWVySWRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgSWRcIiBpZD1cImVtYWlsX2FkZHJlc3NcIiB2YWx1ZT0ke2RhdGEuZW1haWxfYWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiUGFzc293cmRcIiBpZD1cInBhc3N3b3JkXCIgdmFsdWU9JHtkYXRhLnBhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIGlkPVwiYWRkcmVzc1wiIHZhbHVlPSR7ZGF0YS5hZGRyZXNzfT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQgbXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBSZWFkIGFuZCBBY2NlcHQgPGEgaHJlZj1cIi4vdGVybXNfY29uZGl0aW9uLmh0bWxcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgcm9sZT1cImJ1dHRvblwiIG9uY2xpY2s9IFwidXBkYXRlKClcIj5TdWJtaXQ8L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSAgICBcblxuXG5cbmZ1bmN0aW9uIGdldENhYkJ5SWQoKXtcbmxldCBjYWJJZCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaWRcIikpO1xuZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY3VzdG9tZXIvZ2V0P2lkPVwiK2NhYklkKVxuICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgYXBwZW5kRGF0YShkYXRhKTtcbiAgICB9KVxuXG59XG5nZXRDYWJCeUlkKCk7XG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHVwZGF0ZSgpe1xuICAgIG9iaiA9IHt9XG4gICAgb2JqLmN1c3RvbWVySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKS52YWx1ZTtcbiAgICBvYmouZW1haWxfYWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWxfYWRkcmVzc1wiKS52YWx1ZTtcbiAgICBvYmoudXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpLnZhbHVlO1xuICAgIG9iai5wYXNzd29yZD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKS52YWx1ZTtcbiAgICBvYmouYWRkcmVzcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHJlc3NcIikudmFsdWU7XG4gICAgb2JqLnBob25lX251bWJlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lX251bWJlclwiKS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZyhvYmopO1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2N1c3RvbWVyL3VwZGF0ZVwiLCBcbiAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmopLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgfSkudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBhbGVydChcIlJlY29yZCBJbnNlcnRlZFwiKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSApLmNhdGNoKCAoIGVycm9yICA9PiB7XG4gICAgICAgIGFsZXJ0KCBcIlNvbWV0aGluZyBXZW50IFdyb25nXCIgKTtcbiAgICB9ICkpO1xufTtcblxuXG4iXSwibmFtZXMiOlsiYXBwZW5kRGF0YSIsImRhdGEiLCJtYWluQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInVzZXJuYW1lIiwiZW1haWxfYWRkcmVzcyIsInBhc3N3b3JkIiwiYWRkcmVzcyIsImdldENhYkJ5SWQiLCJjYWJJZCIsInBhcnNlSW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsIm9iaiIsImN1c3RvbWVySWQiLCJ2YWx1ZSIsInF1ZXJ5U2VsZWN0b3IiLCJwaG9uZV9udW1iZXIiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=