$(() => {
  
  $('#clickme').click(() =>  {
   
    $.getJSON('l192.json', (data) =>  {

        var items = [];

        $.each(data, function(key, val) {

          items.push('<li id="' + key + '">' + val + '</li>');    

        });

        $('<ul/>', {
          'class': 'interest-list',
          html: items.join('\n')
        }).appendTo('body');

     });

  });
});
