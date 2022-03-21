var getUserRepos = function(lnd4812) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + lnd4812 + "/repos";
 
  // make a request to the url
 
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
    console.log(data);
  });
});
};
getUserRepos();
