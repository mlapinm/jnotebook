window.onload = function () {
    var clickMeButton = document.getElementById('clickMe1');
    clickMeButton.onclick = runTheExample1;

    document.getElementById('clickMe2').onclick = runTheExample2;
}

function runTheExample1(){
    document.getElementById('fourth').innerHTML = 'running the example 1'
    // alert('running the example 1')
}

function runTheExample2(){
    document.getElementById('fourth').innerHTML = 'running the example 2'
//    alert('running the example 2')
}


