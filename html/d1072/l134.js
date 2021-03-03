window.onload = function () {
    //var clickMeButton = document.getElementById('clickMe');
    //clickMeButton.onclick = runTheExample;

    document.getElementById('clickMe').onclick = runTheExample;
}

function runTheExample() {
    var fourth = document.getElementById('fourth')
    fourth.innerHTML += "fourth"
    fourth.innerHTML += "<br>"
    
    var myElement = document.getElementById('second');

    var myNodeName = myElement.nodeName;
    fourth.innerHTML += myNodeName
    fourth.innerHTML += "<br>"

    fourth.innerHTML += myElement.innerHTML
    document.getElementById('second').innerHTML = "See how I set the text here?";
    fourth.innerHTML += "<br>"

    var listOfParagraphs = document.getElementsByTagName('p');
    for (i=0; i<listOfParagraphs.length; i++){
        fourth.innerHTML += "" + i + " " + listOfParagraphs[i].textContent
        fourth.innerHTML += "<br>"
    }
    fourth.innerHTML += "<br>"

    fourth.innerHTML += "<br>"

}

var myElement = document.getElementById('second');

var myNodeName = myElement.nodeName;
alert(myNodeName);
