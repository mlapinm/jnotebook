
$(function() {


    // Пользователь щёлкнул по кнопке getData
    $("#getData").click(function() {
        // f1()
        f2()

   });

   function f2(){
    var win = window.open('index2.html?inputId=somevalue', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }

   }

    function f1(){
        var url = 'index2.html';

        var params = {
            param1: '1'
        };        
        var f = $("<form target='_blank' method='GET' style='display:none;'></form>").attr({
            action: url
        }).appendTo(document.body);

        for (var i in params) {


                    $('<input type="hidden" />').attr({
                        name: i,
                        value: params[i]
                    }).appendTo(f);

        }
            
        f.submit();
 
    }
  });
  