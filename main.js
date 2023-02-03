//Reconoze tu voz
SpeechRecognition = window.webkitSpeechRecognition;
 
//lo almacena como una voz nueva
var recognition = new SpeechRecognition();

//manda a llamar al textbox
var Textbox = document.getElementById("textbox");


function start()
{
    //se vacia el texbox
    Textbox.innerHTML = "";
    //se manda a llamar una función predefinida en la api
    recognition.start();
}
 
//la variable es igual a el parametro evento
recognition.onresult = function(event) {


// console.log(event);

//convierte la voz a texto
var Content = event.results[0][0].transcript;

//muestra la voz convertida a texto
    Textbox.innerHTML = Content;
    //console.log(Content);
    //si content igual a tima mi selfie se manda a llamar a la variable speak
      if(Content =="Toma mi selfie")
      {
        //console.log("tomando selfie --- ");
        speak();
      }
}




function speak(){
    //hace que la compu hable
    var synth = window.speechSynthesis;

    //hace que diga tomando tu selfie en 5 segundos
    speak_data = "Tomando tu Selfie en 5 segundos";

    //el texto de toma mi selfie lo convierte a voz
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    //la variable snith se vuelve igual a utterthis
    synth.speak(utterThis);

    //prende la wevcam
    Webcam.attach(camera);

    //prende el temporizador
    setTimeout(function()
    {
        take_selfie();
        save();
    }, 5000);
}


 //la variable camera almacena lo que contiene el id camera
camera = document.getElementById("camera");
//se le da el alto ancho y resolución a la foto
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});


function take_selfie()
{
    //se muestra la webcam
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}




function save()
{
    //se muestra la imagen en un cuadro abajo
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
