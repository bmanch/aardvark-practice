// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAnIDNBZUFPnCWqUZSpLLjp1GF4umID3Zw",
    authDomain: "aardvark-college-debt.firebaseapp.com",
    databaseURL: "https://aardvark-college-debt.firebaseio.com",
    projectId: "aardvark-college-debt",
    storageBucket: "aardvark-college-debt.appspot.com",
    messagingSenderId: "582943288825"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$.ajax({
	url: "https://aardvark-college-debt.firebaseio.com/income-by-major/area, ethnic, and civilization studies/static-median-income/year25.json",
	method: "GET"
}).done(function(response) {
	console.log(response)
});

$('small').text("fun");

database.ref("income-by-major").once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    var listItem = $('<li>');
    var linkForItem = $('<a>').addClass('majorChosen').attr('href', '#').text(key);
    listItem.append(linkForItem);
    $('#majorDropdown').append(listItem);
    console.log(key);
  });
});
