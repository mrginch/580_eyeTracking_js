function main(){
	alert('a');
	
	webgazer.setRegression("threadedRidge");
	
	
	webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport 
    var yprediction = data.y; //these y coordinates are relative to the viewport
    console.log(elapsedTime); //elapsed time is based on time since begin was called
	}).begin();
	
	webgazer.showPredictionPoints(true);
	
	var pos = $('.redBanner').position();
	var leftPos = pos.left;
	var rightPos = pos.right;
	
	alert(leftPos + " " + rightPos);
	
	

}

$(document).ready(main);
	