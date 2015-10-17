curScene = 1;
            
function changeScene(destination){
var selOption = document.getElementById("option_" + curScene);
var optionText = document.getElementById("scene_" + curScene + "_" + destination).innerHTML;
selOption.innerHTML=" / " + optionText;
var currentSceneElement = document.getElementById("scene_" + curScene);
currentSceneElement.className = "folded block";
var nextScene = document.getElementById("scene_" + destination);
nextScene.className = "current block";
curScene = destination;
}