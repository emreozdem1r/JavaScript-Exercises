function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}
/*  onreadystatechange:Defines a function to be called when the readyState property changes
  readyState:
  0 = uninitialized
  1 = loading
  2 = loaded
  3 = interactive
  4 = complete
  responseText= veriyi "string" biçimde yollar
  responseXML= veriyi XML olarak yollar
  status= Sunucunun durumunun sayısal değerini belirtir
  403: "Forbidden"
  404: not found
  200: ok
  statusText= Durumla gelen yazı değerini belirtir.

*/