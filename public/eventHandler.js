function loadDoc(id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState != 4 || this.status != 200) {
        console.error("IP logging request failed");
      }
    };
    xhttp.open("GET",'/ip', true);
    xhttp.send();
  }
