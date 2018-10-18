$(document).ready(function() {

  var userage = parseInt(prompt('What is your age?'));

  if (userage >= 18 && userage < 100 ) {
    $('#vote').show();
  } else if (userage === 100) {
    alert("You are too old to vote!");
  } else {
    $('#cantvote').show();
  }
});
