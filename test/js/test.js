var isPersistNeeded = eg.Persist.isNeeded();



var type = typeof performance !== "undefined" && performance.navigation && performance.navigation.type;


function update() {
	var depths = (eg.Persist.StorageManager.getStateByKey("state___persist___", "depths") || []).map(function (url) {
		var dirs =  url.split("/");
	
		return dirs[dirs.length - 1];
	}).join(" -> ");

	document.querySelector("#testlog").innerHTML =
		"isPersistNeeded : " + isPersistNeeded + "<br/>" + 
		"length : " + depths + "<br/>" + 
		"last : " + eg.Persist.StorageManager.getStateByKey("state___persist___", "lastUrl") + "<br/>" + 
		"type : " + type  + "<br/>" + 
		"";
}

update();