let httpRequest;
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btnAjax').addEventListener('click', function() {
    	httpRequest = new XMLHttpRequest();
    	httpRequest.onreadystatechange = parseResponse;
	    httpRequest.open('GET', 'http://jsonplaceholder.typicode.com/users');
	    httpRequest.send();
    })
});

function parseResponse() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        document.getElementById('divResult').innerHTML = httpRequest.responseText
      } else {
        console.log('something broke ....')
      }
    }
}