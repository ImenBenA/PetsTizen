function addPost() {
	var description = document.getElementById("description").value;
	var town = document.getElementById("town").value;
	var image = document.getElementById("image").value;
	var userId = localStorage.getItem("connected");
	var currentTime = new Date();
	var warning = "";

	var petType;
	if (document.getElementById('r1').checked) {
		petType = document.getElementById('r1').value;

	} else if (document.getElementById('r2').checked) {
		petType = document.getElementById('r2').value;

	} else if (document.getElementById('r3').checked) {
		petType = document.getElementById('r3').value;
	} else {
		warning = warning + " What type of pet is it? ";
	}

	var type;
	if (document.getElementById('l').checked) {
		type = document.getElementById('l').value;

	} else if (document.getElementById('f').checked) {
		type = document.getElementById('f').value;

	} else {
		warning = warning + " Lost or Found? ";
	}
	
	// var petType=document.getElementById("petType").value;
	if (image == "" || description == "" || town == "" || warning != "")
		alert( warning = warning +  "Please fill out all the fields.");
	else {
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		xhr.open("POST", 'http://41.226.11.252:1180/pets/post/addPost.php',
				true);
		// xhr.setRequestHeader("Content-Type",
		// "application/json;charset=UTF-8");
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				console.log("user");
				location.href = "home.html";
			}

		}
		console.log(JSON.stringify({
			"description" : description,
			"petImage" : "aaa",
			"type" : type,
			"user_id" : userId,
			"date" : "2009-12-31",
			"petType" : petType,
			"town" : town
		}));
		xhr.send(JSON.stringify({
			"description" : description,
			"petImage" : image,
			"type" : type,
			"user_id" : userId,
			"date" : "2009-12-31 11:11:11",
			"petType" : petType,
			"town" : town
		}));
	}
}