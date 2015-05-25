function goHome(){
    $.mobile.changePage( "dashboard.html", { transition: "none"});
}
function showMap(stn){
launchnavigator.navigate(
  stn,
  null,
  function(){
  },
  function(error){
  });
}
