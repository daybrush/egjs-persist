var isPersistNeeded = eg.Persist.isNeeded();


var depths = (eg.Persist.StorageManager.getStateByKey("state___persist___", "depths") || []).map(function (url) {
	var dirs =  url.split("/");

	return dirs[dirs.length - 1];
}).join(" -> ");
document.querySelector("#testlog").innerHTML =
	"isPersistNeeded : " + isPersistNeeded + "<br/>" + 
	"length : " + depths + "<br/>" + 
	"last : " + eg.Persist.StorageManager.getStateByKey("state___persist___", "lastUrl") + "<br/>" + 
	"";
