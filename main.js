Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_qualtiy:90
})
camera = document.getElementById("camera");
Webcam.attach( '#camera');

function takeSnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_url+'"/>';
    });
};
console.log('ml5 version:', ml5.version);

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6Yq29zw4D/', modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}