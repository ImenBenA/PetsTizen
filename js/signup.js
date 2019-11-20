    	window.onload = function() {
    	    // TODO:: Do your initialization job

    	    // add eventListener for tizenhwkey
    	    document.addEventListener('tizenhwkey', function(e) {
    	        if (e.keyName === "back") {
    	        	location.href = "../index.html";
    	    }});

    	    // Sample code

    	};
    	function signup() {
    	    var username = document.getElementById("username").value;
    	    var password = document.getElementById("password").value;
    	    var email = document.getElementById("email").value;
    	    var phone = document.getElementById("phone").value;
    	    if (username == "" || password == "" || email == ""|| phone == "")
    	        alert("veuillez remplir tous les champs");
    	    else {
    	        if (window.XMLHttpRequest) {
    	            xhr = new XMLHttpRequest();
    	        }
    	        xhr.open("POST", 'http://41.226.11.252:1180/pets/user/addUser.php', true);
    	        //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    	        xhr.onreadystatechange = function() {
    	            if (xhr.readyState == 4) {
    	                console.log("aaa"+xhr.responseText);
    	                location.href = "home.html";
    	            }

    	        }
    	        xhr.send(JSON.stringify({
    	        	"email" : email,
					"username" : username,
					"password" : password,
					"phone" : phone,
					"token" : "token"
    	        }));
    	    }
    	    alert ("Clicked");
    	}