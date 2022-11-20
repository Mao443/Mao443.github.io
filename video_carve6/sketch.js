
let world;
let marker_carve;
let plane;
let video;
let dynamicBuffer;
let videoControl;
function setup() {
  world = new World('ARScene');
  dynamicBuffer = createGraphics(1970, 1080);
  dynamicBuffer.clear();
  let dTexture = world.createDynamicTextureFromCreateGraphics(dynamicBuffer);
  plane = new Plane({
    x:0,
    y:1,
    z:0,
    width:2,
    height:1.125,
    asset: dTexture,
    dynamicTexture: true,
    dynamicTextureWidth: 1970,
    dynamicTextureHeight: 1080,
    rotationX: -90,
  });
  console.log(plane);
  marker_carve = world.getMarker('carve');
  marker_carve.add( plane );

  //video
  video = createVideo("2.mp4", vidLoad);
  videoControl = false;
}


function draw() {
  if(marker_carve.isVisible() == true){
    //if(video.)
    if(videoControl == false){
      video.play();
      videoControl = true;
    }
  }else{
    videoControl = false;
    video.stop();
  }
  dynamicBuffer.clear();
  dynamicBuffer.image(video, 0, 0);
}

function vidLoad(){

  video.hide();
  video.addCue(15, jumpToPage, "../carve6.html");
 
}

function jumpToPage(url){
  window.location.replace(url);
}
