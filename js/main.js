window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};
function login(){
	var username , password ;
	username = document.loginform.username.value;
	password = document.loginform.password.value;
	if (window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
		xhr.open("POST", 'http://41.226.11.252:1180/pets/user/userByUsernamePassword.php', true);
		//xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 )
		{
			var JsonUser = JSON.parse(xhr.responseText);
            console.log("user"+JsonUser);
			if (JsonUser.username == undefined && JsonUser.password == undefined)
			alert("Wrong informations");
			else {
				console.log(JsonUser.id);
				localStorage.removeItem("connected");
				localStorage.setItem("connected", JsonUser.id);
				location.href = "interfaces/home.html";
			}
			
		}

	}
	xhr.send(JSON.stringify({ "username": username, "password": password }));
	alert ("Clicked");
}
function checklogin (){
	if (localStorage.getItem("connected") != null)
		location.href = "interfaces/home.html";
		
}