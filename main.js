var ndes = [$('.nde1'), $('.nde2'), $('.nde3'), $('.nde4'), $('.nde5'), $('.nde6')];
var index = 1;
var ndes = ['.nde1', '.nde2', '.nde3', '.nde4', '.nde5', '.nde6'];


function choose(){
		switch(index){
			case 1:
				$('.nde1').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			case 2:
				$('.nde1').change(function(){$(this).css("border", "0px solid black");}).trigger("change");
				$('.nde2').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			case 3:
				$('.nde2').change(function(){$(this).css("border", "0px solid black");}).trigger("change");
				$('.nde3').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			case 4:
				$('.nde3').change(function(){$(this).css("border", "0px solid black");}).trigger("change");
				$('.nde4').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			case 5:
				$('.nde4').change(function(){$(this).css("border", "0px solid black");}).trigger("change");
				$('.nde5').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			case 6:
				$('.nde5').change(function(){$(this).css("border", "0px solid black");}).trigger("change");
				$('.nde6').change(function(){$(this).css("border", "5px solid black");}).trigger("change");
				break;
			default:
				break;
		}
		
	return;
}

function main(){
	choose();
	
	webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport 
    var yprediction = data.y; //these y coordinates are relative to the viewport
	
    console.log(elapsedTime); //elapsed time is based on time since begin was called
	
	if(xprediction<= 150/*$('.greenBanner').position().left && yprediction <= $('.greenBanner').position().top*/){}
	else if(xprediction>= $('.redBanner').position().left/*  && yprediction <= $('.redBanner').position().top*/){ index++;choose();}
	
	
	
	}).begin();
	
	webgazer.showPredictionPoints(true);

}
	
$(document).ready(main);


/*var gbPos = $('.greenBanner').position();
	var gbR = gbPos.left+150;
	var gbT = gbPos.top;
	var rbPos = $('.redBanner').position();
	var rbL = rbPos.left;
	var rbT = rbPos.top;*/
	
	
/*
	if(xprediction<= $('.greenBanner').position().left && yprediction <= $('.greenBanner').position().top){continue;}
	else if(xprediction>= $('.redBanner').position().left && yprediction <= $('.redBanner').position().top){ index++;continue;}
	else{continue;}
	
	//choose();*/
	