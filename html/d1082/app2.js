
$(function() {

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

    let a = $.urlParam("inputId")

    console.log(a)
    $(".div1").text(a)

    var url = "x2022.json";
  
    $.getJSON(url, function(data) {
      data.forEach(element => {
          // console.log(element.type, element.asks)
          console.log(element.type, element.asks[0])
          $(".div2").text(element.type + "  " + element.asks[0])
      });
    });


   
    $("#getData").click(function() {
  
      // Сохраняем элемент artistList и адрес JSON-файла в переменных

      var url = "x2022.json";
  
      // Получаем JSON-файл
      $.getJSON(url, function(data) {
        data.forEach(element => {
            // console.log(element.type, element.asks)
            console.log(element.type, element.asks[0])
            $(".div2").text(element.type, element.asks[0])
        });
      });

    });
  });
  