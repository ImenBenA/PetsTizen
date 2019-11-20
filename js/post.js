    	function getData(type){
    	if (window.XMLHttpRequest){
    		xhr = new XMLHttpRequest();
    	}
    		xhr.open('GET', 'http://41.226.11.252:1180/pets/post/allPosts.php');
    		//xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    		xhr.onreadystatechange = function(){
    		if(xhr.readyState == 4 )
    		{
    			var postArray = JSON.parse(xhr.responseText);
    			var cells ="";
    			var post ;
                for (i=0 ; i < postArray.length ; i++){
                	post = postArray[i];
                	if (post.type == type)
                	cells += '<div class="outerCard"  onclick="details('+ post.id +')><div class="innerCard"><div class="TitleContainer"><div class="TitleImage"><img src="../images/tag_'+type+'.png">  </div><div class="Title">'+post.petType+' '+type+' near '+post.town+'</div><div class="Next"><img src="../images/next.png"></div></div></div><div class="innerCard"><img src="http://41.226.11.252:1180/pets/post/'+post.petImage+'" alt="cat image"></div><div class="innerCard"><div class="Description">'+post.description+'</div></div><div class="innerCard"><div class="Date">'+post.date+'</div></div> </div> ';
                	//fillCells(postArray[i]);
                		}
                document.getElementById("view").innerHTML = cells;
    			/*if (JsonUser.username == undefined && JsonUser.password == undefined)
    			alert("Wrong informations");
    			else 
    			location.href = "interfaces/home.html";*/
    		}

    	}
    	xhr.send();
    	//alert("chay");
    	}
    	
    	function details(type){
        	if (window.XMLHttpRequest){
        		xhr = new XMLHttpRequest();
        	}
        		xhr.open('GET', 'http://41.226.11.252:1180/pets/post/allPosts.php');
        		//xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        		xhr.onreadystatechange = function(){
        		if(xhr.readyState == 4 )
        		{
        			var postArray = JSON.parse(xhr.responseText);
        			var cells ="";
        			var post ;
                    for (i=0 ; i < postArray.length ; i++){
                    	post = postArray[i];
                    	if (post.type == type)
                    	cells += '<div class="outerCard"  onclick="details('+ post.id +')><div class="innerCard"><div class="TitleContainer"><div class="TitleImage"><img src="../images/tag_'+type+'.png">  </div><div class="Title">'+post.petType+' '+type+' near '+post.town+'</div><div class="Next"><img src="../images/next.png"></div></div></div><div class="innerCard"><img src="http://41.226.11.252:1180/pets/post/'+post.petImage+'" alt="cat image"></div><div class="innerCard"><div class="Description">'+post.description+'</div></div><div class="innerCard"><div class="Date">'+post.date+'</div></div> </div> ';
                    	//fillCells(postArray[i]);
                    		}
                    document.getElementById("view").innerHTML = cells;
        			/*if (JsonUser.username == undefined && JsonUser.password == undefined)
        			alert("Wrong informations");
        			else 
        			location.href = "interfaces/home.html";*/
        		}

        	}
        	xhr.send();
        	//alert("chay");
        	}
    	
    	function getMyData(type){
        	if (window.XMLHttpRequest){
        		xhr = new XMLHttpRequest();
        	}
        		xhr.open('GET', 'http://41.226.11.252:1180/pets/post/allPosts.php');
        		//xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        		xhr.onreadystatechange = function(){
        		if(xhr.readyState == 4 )
        		{
        			var connected = localStorage.getItem("connected");
        			//console.log("user"+connected);
        			var postArray = JSON.parse(xhr.responseText);
        			var cells ="";
        			var post ;
                    for (i=0 ; i < postArray.length ; i++){
                    	post = postArray[i];
                    	console.log("user"+post.user_id.id);
                    	if ("my_posts" == type && post.user_id.id == connected)
                    	cells += '<div class="outerCard"><div class="innerCard"><div class="TitleContainer"><div class="TitleImage"><img src="../images/tag_'+post.type+'.png">  </div><div class="Title">'+post.petType+' '+type+' near '+post.town+'</div><div class="Next"><img src="../images/next.png"></div></div></div><div class="innerCard"><img src="http://41.226.11.252:1180/pets/post/'+post.petImage+'" alt="cat image"></div><div class="innerCard"><div class="Description">'+post.description+'</div></div><div class="innerCard"><div class="Date">'+post.date+'</div></div> </div> ';
                    	//fillCells(postArray[i]);
                    		}
                    var stored = localStorage.getItem(connected);
                    if (stored != cells)
                    localStorage.setItem(connected,cells);
                    console.log("items "+localStorage.getItem(connected));
                    if (localStorage.getItem(connected) == cells)
                    	console.log("true "+true);
                    document.getElementById("view").innerHTML = cells;
        			/*if (JsonUser.username == undefined && JsonUser.password == undefined)
        			alert("Wrong informations");
        			else 
        			location.href = "interfaces/home.html";*/
        		}

        	}
        	xhr.send();
        	//alert("chay");
        	}
  function check(type){
	  if (navigator.onLine)
		  getMyData(type)
		  else {
			  var connected = localStorage.getItem("connected");
			  console.log("user"+connected);
              var stored = localStorage.getItem(connected);
              console.log("items "+stored);
              document.getElementById("view").innerHTML = localStorage.getItem(connected);
		}
		  
  }
    	function fillCells(post){
    		document.getElementById("view").innerHTML = 
    		'<div class="outerCard"><div class="innerCard"><div class="TitleContainer"><div class="TitleImage"><img src="../images/tag_green.png"></div><div class="Title">Title</div><div class="Next"><img src="../images/next.png"></div></div></div><div class="innerCard"><img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="cat image"></div><div class="innerCard"><div class="Description">description desc desscription ption pdescription desc desscr cription desc desscrption desc desscrription desc desscrndescription desc desscr</div></div><div class="innerCard"><div class="Date">20/10/2019</div></div> </div> ';
    		}
