function start() {
    Webcam.attach(cam);
}

camara = document.getElementById("cam");
Webcam.set({
    width:300, height:300, image_format:"png", png_quality:100
});

function selfi() {
    Webcam.snap(function(oourl) {
        document.getElementById("ara").innerHTML = '<img id="oourl" src="'+oourl+'"/>'
    }
        )
     link = document.getElementById("link");
     image = document.getElementById("oourl").src ; link.href = image; link.click();
}