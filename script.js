var notification = document.getElementById("notif");
var showDropdown = document.getElementById("icon");

  function showNotification() {

    notification.src="images/bell-ringing.png";
      
  }

  function timer(){
      setInterval(showNotification, 5000);
  }

function dropdown() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function favourites(){

  var favourite = document.querySelectorAll(".favourite");
  for (let f = 0; f < favourite.length; f++) {
      favourite[f].addEventListener("click", function() {
        favourite[f].classList.remove('add-to');
        favourite[f].classList.add('favourite-added');
          
      });
  };
};

function viewed(){

  var view = document.querySelectorAll(".view");
  for (let v = 0; v < view.length; v++) {
      view[v].addEventListener("click", function() {
        view[v].classList.remove('add-to');
        view[v].classList.add('viewed');
          
      });
  };
};

showDropdown.addEventListener("click", dropdown);
timer();
favourites();
viewed();