function logout(){
	localStorage.removeItem("connected");
	location.href = "../index.html";
}
function save(){
	var password = document.getElementById("password").value;
	var phone = document.getElementById("phone").value;
	var userId = localStorage.getItem("connected");
	if (phone == "" || password == "")
        alert("Please fill out all the fields");
    else {
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        xhr.open("POST", 'http://41.226.11.252:1180/pets/user/updateUser.php', true);
        //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                console.log("user");
                location.href = "home.html";
            }

        }
        xhr.send(JSON.stringify({
            "password": password,
            "phone": phone,
            "id": userId,
        }));
    }
}
function call(){
	  var appControl = new tizen.ApplicationControl('http://tizen.org/appcontrol/operation/dial',
            'tel:0123456789', null, null, null, null);
tizen.application.launchAppControl(appControl, null, function() {
console.log('launch application control succeed');
}, function(e) {
console.log('launch application control failed. reason: ' + e.message);
}, null);
}