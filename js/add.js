function uploadFile() {
    var fileForUpload = document.getElementById('fileToUpload').files[0];
    //document.getElementById("file_data").src = fileForUpload;
    getBase64(fileForUpload);
    /*var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function(evt) {
       ... // success callback
    }, false);
    xhr.open("POST", "...");
    xhr.send(dataForUpload);*/
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
            if ((encoded.length % 4) > 0) {
                encoded += '='.repeat(4 - (encoded.length % 4));
            }
            //resolve(encoded);
            document.getElementById("image").value = encoded;
        };
        reader.onerror = error => console.log("error : " + error);
    });
}