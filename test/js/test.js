var isPersistNeeded = eg.Persist.isNeeded();



var type = typeof performance !== "undefined" && performance.navigation && performance.navigation.type;


window.onpopstate = function () {
	update("true");
}
function update(pop) {
	var depths = (eg.Persist.StorageManager.getStateByKey("state___persist___", "depths") || []).map(function (url) {
		var dirs =  url.split("/");
	
		return dirs[dirs.length - 1];
	}).join(" -> ");


	
	document.querySelector("#testlog").innerHTML =
		"isPersistNeeded : " + isPersistNeeded + "; pop : " + pop + "<br/>" + 
		"href : " + location.href + "<br/>" +
		"path : " + location.pathname + "<br/>" + 
		"length : " + depths + "<br/>" + 
		"last : " + eg.Persist.StorageManager.getStateByKey("state___persist___", "lastUrl") + "<br/>" + 
		"type : " + type  + "<br/>" + 
		"";
}

update();