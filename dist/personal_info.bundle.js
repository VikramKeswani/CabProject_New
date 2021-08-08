/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./public/js/personal_info.js ***!
  \************************************/
function appendData(data) {
  var mainContainer = document.getElementById("personal_information");
  var div = document.createElement("div"); //div.innerHTML = 'Name: ' + data.username + ' ' + data.email_address+' '+data.phone_number;

  div.innerHTML = "<h2>".concat(data.username, "</h2>\n            <label class=\"title\">Rating:</label>\n            <label>4.5</label>\n            <br>\n        <div class=\"row\">\n            <div class=\"\">\n                <label>Registered Phone Number:</label>\n              </div>\n              <div class=\"\">\n                <label>").concat(data.phone_number, "</label>  \n              </div>\n        \n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-1\">\n                <label>Email Address:</label>\n              </div>\n              <div class=\"col-md-10\">\n                <label>").concat(data.email_address, "</label>\n              </div>\n        </div>\n          <br>\n            <p><button class=\"button\">Contact</button></p>");
  mainContainer.appendChild(div);
}

function init() {
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
}

init();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxfaW5mby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDSSxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixNQUFJQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixzQkFBeEIsQ0FBcEI7QUFDSSxNQUFJQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixLQUF2QixDQUFWLENBRmtCLENBR2xCOztBQUNBRCxFQUFBQSxHQUFHLENBQUNFLFNBQUosaUJBQXNCTixJQUFJLENBQUNPLFFBQTNCLDJUQVNhUCxJQUFJLENBQUNRLFlBVGxCLGlSQWtCYVIsSUFBSSxDQUFDUyxhQWxCbEI7QUF1QkFSLEVBQUFBLGFBQWEsQ0FBQ1MsV0FBZCxDQUEwQk4sR0FBMUI7QUFDUDs7QUFHTCxTQUFTTyxJQUFULEdBQWU7QUFDZixXQUFTQyxVQUFULEdBQXFCO0FBQ2pCLFFBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBRCxDQUFwQjtBQUVIQyxJQUFBQSxLQUFLLENBQUMsMkNBQXlDSixLQUExQyxDQUFMLENBQ1FLLElBRFIsQ0FDYSxVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLEVBQUo7QUFBQSxLQURqQixFQUVRRixJQUZSLENBRWEsVUFBQWxCLElBQUksRUFBSTtBQUNWcUIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVl0QixJQUFaO0FBQ0NELE1BQUFBLFVBQVUsQ0FBQ0MsSUFBRCxDQUFWO0FBQ0osS0FMUjtBQU9BOztBQUNEWSxFQUFBQSxVQUFVO0FBRVQ7O0FBR0RELElBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZXRpbmdhcHAvLi9wdWJsaWMvanMvcGVyc29uYWxfaW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBmdW5jdGlvbiBhcHBlbmREYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvbmFsX2luZm9ybWF0aW9uXCIpO1xuICAgICAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAvL2Rpdi5pbm5lckhUTUwgPSAnTmFtZTogJyArIGRhdGEudXNlcm5hbWUgKyAnICcgKyBkYXRhLmVtYWlsX2FkZHJlc3MrJyAnK2RhdGEucGhvbmVfbnVtYmVyO1xuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9YDxoMj4ke2RhdGEudXNlcm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRpdGxlXCI+UmF0aW5nOjwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+NC41PC9sYWJlbD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWdpc3RlcmVkIFBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD4ke2RhdGEucGhvbmVfbnVtYmVyfTwvbGFiZWw+ICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+JHtkYXRhLmVtYWlsX2FkZHJlc3N9PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPjxidXR0b24gY2xhc3M9XCJidXR0b25cIj5Db250YWN0PC9idXR0b24+PC9wPmBcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9ICAgIFxuICAgIFxuXG5mdW5jdGlvbiBpbml0KCl7XG5mdW5jdGlvbiBnZXRDYWJCeUlkKCl7XG4gICAgbGV0IGNhYklkID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpZFwiKSk7XG5cbiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jdXN0b21lci9nZXQ/aWQ9XCIrY2FiSWQpXG4gICAgICAgIC50aGVuKHJlc3AgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgYXBwZW5kRGF0YShkYXRhKTtcbiAgICAgICAgfSlcblxufVxuZ2V0Q2FiQnlJZCgpO1xuXG59XG5cblxuaW5pdCgpOyJdLCJuYW1lcyI6WyJhcHBlbmREYXRhIiwiZGF0YSIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInVzZXJuYW1lIiwicGhvbmVfbnVtYmVyIiwiZW1haWxfYWRkcmVzcyIsImFwcGVuZENoaWxkIiwiaW5pdCIsImdldENhYkJ5SWQiLCJjYWJJZCIsInBhcnNlSW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=