document.addEventListener("DOMContentLoaded", function () {
  // Use event delegation so this works when React mounts the form later
  document.addEventListener("submit", function (ev) {
    if (ev.target && ev.target.id === "it-form") {
      ev.preventDefault();
      var form = ev.target;
      var status = document.getElementById("status"); // note: multiple statuses might exist in DOM if multiple forms
      
      function success() {
        form.reset();
        if(status) {
          status.classList.add("success");
          status.innerHTML = "Thank you message sent.!";
        }
      }

      function error() {
        if(status) {
          status.classList.add("error");
          status.innerHTML = "Oops! There was a problem.";
        }
      }

      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    }
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
