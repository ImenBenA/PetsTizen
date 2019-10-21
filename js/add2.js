function addPost() {
    var town = document.getElementById("town").value;
    var image = document.getElementById("image").value;
    //var type=document.getElementById("type").value;
    var description = document.getElementById("description").value;
    //var petType=document.getElementById("petType").value;
    if (image == "" || description == "" || town == "")
        alert("veuillez remplir tous les champs");
    else {
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        xhr.open("POST", 'http://41.226.11.252:1180/pets/post/addPost.php', true);
        //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                console.log("user");
            }

        }
        xhr.send(JSON.stringify({
            "description": description,
            "petImage": image,
            "type": "cat",
            "user_id": "60",
            "date": "2009-12-31 11:11:11",
            "petType": "fedi123",
            "town": town
        }));
    }
}