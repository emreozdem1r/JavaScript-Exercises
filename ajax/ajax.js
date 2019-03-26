function loadDoc() {
/*	onreadystatechange:Defines a function to be called when the readyState property changes
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

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
      var body=document.getElementTagName("body")[0];
      var span=document.createElement("span");
      var spanText= document.createTextNode(this.responseText);
      span.appendChild(spanText);
      body.appendChild(span);

    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send(null);
  return false;
}