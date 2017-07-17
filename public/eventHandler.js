function loadDoc(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        id.innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET",'http://localhost:3000/ip', true);
    xhttp.send();
  }
