var request = new XMLHttpRequest();
request.open('GET','https://api.spotify.com/v1');

request.onload = function() {
  var response = request.response;
  var parsedData = JSON.parse(response);
  console.log(parsedData);
};

request.send();