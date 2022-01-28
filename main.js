   prdiction_1 = ""

   Webkam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality : 90
})

camera = document.getelementbyid("camera")
    
Webcam.attach('#camera');

function takesnapshot(){
webcam.snap(function (data_uri){
document.getelementbyid("result").innerHTML= '<img id = "capture_image"  src ="'+data_uri+'"/>';

});
}
console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
 
function modelLoaded() {
    console.log('Model Loaded!');
  }