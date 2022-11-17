
let world;

let marker_choose;
let marker_color;
let marker_carve;
let marker_link;


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
  marker_choose = world.getMarker('choose');
  marker_choose.add( plane );

  //video
  video = createVideo("choose.mp4", vidLoad);
  videoControl = false;
}


function draw() {
  if(marker_choose.isVisible() == true){
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
  video.addCue(2, jumpToPage, "../../../html css.1.html");
 
}

function jumpToPage(url){
  window.location.replace(url);
}


function setup() {
  world = new World('ARScene');
  dynamicBuffer = createGraphics(960, 540);
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
    dynamicTextureWidth: 960,
    dynamicTextureHeight: 540,
    rotationX: -90,
  });
  console.log(plane);
  marker_color = world.getMarker('color');
  marker_color.add( plane );

  //video
  video = createVideo("color.mp4", vidLoad);
  videoControl = false;
}


function draw() {
  if(marker_color.isVisible() == true){
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
  video.addCue(2, jumpToPage, "www.baidu.com");
 
}

function jumpToPage(url){
  window.location.replace(url);
}



function setup() {
  world = new World('ARScene');
  dynamicBuffer = createGraphics(960, 540);
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
    dynamicTextureWidth: 960,
    dynamicTextureHeight: 540,
    rotationX: -90,
  });
  console.log(plane);
  marker_carve = world.getMarker('carve');
  marker_carve.add( plane );

  //video
  video = createVideo("carve.mp4", vidLoad);
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
  video.addCue(2, jumpToPage, "www.baidu.com");
 
}

function jumpToPage(url){
  window.location.replace(url);
}



function setup() {
  world = new World('ARScene');
  dynamicBuffer = createGraphics(960, 540);
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
    dynamicTextureWidth: 960,
    dynamicTextureHeight: 540,
    rotationX: -90,
  });
  console.log(plane);
  marker_link = world.getMarker('link');
  marker_link.add( plane );

  //video
  video = createVideo("link.mp4", vidLoad);
  videoControl = false;
}


function draw() {
  if(marker_link.isVisible() == true){
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
  video.addCue(2, jumpToPage, "www.baidu.com");
 
}

function jumpToPage(url){
  window.location.replace(url);
}
