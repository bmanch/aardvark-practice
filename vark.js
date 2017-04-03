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

//sample ajax call on our firebase database
$.ajax({
	url: "https://aardvark-college-debt.firebaseio.com/income-by-major/Area, Ethnic, and Civilization Studies/static-median-income/year25.json",
	method: "GET"
}).done(function(response) {
	console.log(response)
});

database.ref("income-by-major").once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    var listItem = $('<li>');
    var linkForItem = $('<a>').addClass('majorChosen').attr('href', '#').text(key);
    listItem.append(linkForItem);
    $('#majorDropdown').append(listItem);
  });
  $('.majorChosen').on('click', function(event) {
    event.preventDefault();
    var major = $(this).text();
    console.log(major);

    $('#majorFill').text(major);
  });
});

$('.college').on('click', function() {
  var currentCollege = $(this).text();
  var logo = $("<img>").attr('src', 'https://logo.clearbit.com/' + currentCollege + '.edu');
  $('#logo').html(logo);
});

