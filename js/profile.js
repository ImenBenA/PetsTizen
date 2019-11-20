function logout(){
	localStorage.removeItem("connected");
	location.href = "../index.html";
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