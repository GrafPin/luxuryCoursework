var video = document.getElementById('myVideo');

function toggleMute() {
  var images = $(".volume").attr("src");
  video.muted = !video.muted;
  if (images == "images/volume on.png") {
    $(".volume").attr("src","images/volume off.png");
  }
  else {
    $(".volume").attr("src","images/volume on.png");
  }
}
