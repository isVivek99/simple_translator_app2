

var button = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output");



button.addEventListener("click", buttonClick);


function buttonClick(){
    console.log("clicked");
    var inputValue = inputText.value; 
    console.log("input:",inputValue); 
    //var url = "https://api.funtranslations.com/translate/minion.json";
    var url = "https://api.funtranslations.com/translate/dothraki.json";
    fetch(createURL(url))
    .then(function responseHandler(response){return response.json()})
    .then(function logJSON(json){outputText.innerText=json.contents.translated})
     
}

function createURL(text){
    var urlText = text+"?"+"text="+inputText.value;
    return urlText;
}





